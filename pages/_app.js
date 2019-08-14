import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import Page from '../components/layout/Page';
import withData from '../lib/withData';
import PleaseSignIn from '../components/user/PleaseSignIn';

class MyApp extends App {
  static async getInitialProps({ Component, ctx, apolloClient }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps, path: ctx.asPath };
  }

  render() {
    const { Component, apollo, pageProps, path } = this.props;
    function pathCheck(p) {
      if (p.startsWith('/reset')) {
        return <Component {...pageProps} />;
      }
      return (
        <PleaseSignIn>
          <Page
            shopsURL={
              p.startsWith('/shops') || (p.startsWith('/settings') && true)
            }
          >
            <Component {...pageProps} />
          </Page>
        </PleaseSignIn>
      );
    }

    return (
      <Container>
        <style>{`
          .layout {
            display: flex;
          }
          .hover:hover {
            opacity: 0.85;
          }

          .shine {
            background: #e4e7eb;
            background-image: linear-gradient(
              to right,
              #e4e7eb 0%,
              #edeef1 20%,
              #e4e7eb 40%,
              #e4e7eb 100%
            );
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;

            -webkit-animation-duration: 1.5s;
            -webkit-animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-name: placeholderShimmer;
            -webkit-animation-timing-function: linear;
          }

          a:link {
            text-decoration: none;
            color: rgb(35, 67, 97);
          }

          a:visited {
            text-decoration: none;
            color: rgb(35, 67, 97);
          }

          a:hover {
            text-decoration: none;
            color: #2e669a;
          }

          a:active {
            text-decoration: none;
            color: #2e669a;
          }

          .clean-input{
            box-shadow: none
          }

          @-webkit-keyframes placeholderShimmer {
            0% {
              background-position: -468px 0;
            }

            100% {
              background-position: 468px 0;
            }
          }

          @media screen and (max-width: 768px) {
            .hidden {
              display: none;
            }

            .layout {
              display: block;
            }
          }
          @media screen and (min-width: 769px) {
            .show {
              display: none;
            }
          }
          ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          ::-moz-placeholder {
            /* Firefox 19+ */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          :-ms-input-placeholder {
            /* IE 10+ */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          :-moz-placeholder {
            /* Firefox 18- */
            color: #8b949c !important;
            opacity: 1 !important;
          }
        `}</style>
        <ApolloProvider client={apollo}>{pathCheck(path)}</ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
