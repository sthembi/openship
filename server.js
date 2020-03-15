if (!process.browser)
  // polyfill
  global.fetch = require('isomorphic-unfetch');

const shopifyAuth = require('@cala/koa-shopify-auth').default;

const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const session = require('koa-session');
const ApolloClient = require('apollo-boost').default;
const bodyParser = require('koa-bodyparser');
const { default: koaPlayground } = require('graphql-playground-middleware-koa');
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const mount = require('koa-mount');
const gql = require('graphql-tag').default;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session(server));
  server.keys = ['hello'];

  // client
  //   .query({
  //     query: ALL_SHOPS_QUERY,
  //     variables: shopsQueryVars
  //   })
  //   .then(response =>
  //     response.data.shops.forEach(function(shop, index) {
  //       const domain = shop.domain.split(".")[0];
  //       server.use(
  //         mount(
  //           `/${domain}`,
  //           graphQLProxy({
  //             shop: shop.domain,
  //             password: shop.accessToken
  //           })
  //         )
  //       );
  //     })
  //   );

  server.use(
    shopifyAuth({
      // if specified, mounts the routes off of the given path
      // eg. /shopify/auth, /shopify/auth/callback
      // defaults to ''
      prefix: '/shopify',
      // your shopify app api key
      apiKey: process.env.SHOPIFY_API_KEY,
      // your shopify app secret
      secret: process.env.SHOPIFY_SECRET,
      // scopes to request on the merchants store
      scopes: [
        'write_orders, write_products, read_orders, read_products, write_fulfillments, write_draft_orders',
      ],
      accessMode: 'offline',
      // callback for when auth is completed
      afterAuth(ctx) {
        // add/install shop
        const { shop, accessToken } = ctx.state.shopify;

        // Using fetch instead of mutation for webhook registration

        ctx.redirect(`/shops?shop=${shop}&accessToken=${accessToken}`);
      },
    })
  );

  router.post('/_shopify', bodyParser(), async (ctx, next) => {
    // const { shop } = ctx.request.body;

    // console.log(ctx.request.header);

    // const query = gql`
    //   query($first: Int!, $skip: Int!) {
    //     shops(orderBy: createdAt_DESC, first: $first, skip: $skip) {
    //       id
    //       domain
    //       accessToken
    //       createdAt
    //       name
    //       settings
    //     }
    //   }
    // `;

    // const variables = {
    //   skip: 0,
    //   first: 10,
    // };

    // const url =
    //   process.env.NODE_ENV !== 'production'
    //     ? 'http://localhost:4444'
    //     : 'https://server.app.openship.org';
    // const opts = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     ...ctx.request.header,
    //   },
    //   body: JSON.stringify({ query, variables }),
    // };
    // if (ctx.request.header.cookie) {
    //   fetch(url, opts)
    //     .then(response => response.json())
    //     .then(responseAsJson => {
    //       if (responseAsJson.data) {
    //         responseAsJson.data.shops.map(shop =>
    // server.use(
    //   mount(
    //     `/shopify/${shop.name}`,
    //     graphQLProxy({
    //       shop: `${shop.name}.myshopify.com`,
    //       password: shop.accessToken,
    //     })
    //   )
    // )
    //         );
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
    const { shops } = ctx.request.body;
    shops.map(shop =>
      server.use(
        mount(
          `/${shop.accessToken}`,
          graphQLProxy({
            shop: `${shop.domain}`,
            password: shop.accessToken,
          })
        )
      )
    );
    ctx.res.statusCode = 200;
    await next();
  });

  router.get('/playgrounds', koaPlayground({}));

  router.get('*', async ctx => {
    if (!ctx.path.match('/playgrounds')) {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }
  });

  router.post('*', async ctx => {
    if (!ctx.path.match('/_shopify')) {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }
  });

  // router.post('*', async ctx => {
  //   if (!ctx.path.match('/_shopify')) {
  //     await handle(ctx.req, ctx.res);
  //     ctx.respond = false;
  //   }
  // });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
