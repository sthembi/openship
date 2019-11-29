// import Koa from 'koa';
// import mount from 'koa-mount';
// import { graphQLProxy } from '@shopify/koa-shopify-graphql-proxy';

// const server = new Koa();

// const posts = [
//   {
//     title: 'Next.js is awesome',
//   },
//   {
//     title: 'API support is really great',
//   },
// ];

// const handler = (req, res) => {
//   graphQLProxy({
//     shop: `powertoolexpress.myshopify.com`,
//     password: 'bf32484226c7c5a12120631a6e9d2c1e',
//   });
// };

// export default server.use(handler);

// import Koa from "koa";
// import serverless from "serverless-http";

const handler = (req, res) => {
  res.end("Hello Next.js middleware!");
};

export default handler;

// or as a promise
// const handler = serverless(app);
// module.exports.handler = async (event, context) => {
//   // you can do other things here
//   const result = await handler(event, context);
//   // and here
//   return result;
// };
