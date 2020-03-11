import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Page from '../components/layout/Page';
import withData from '../lib/withData';
import PleaseSignIn from '../components/user/PleaseSignIn';
import theme from '../theme';

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
        <ThemeProvider theme={theme}>
          <CSSReset />
          <PleaseSignIn>
            <Page
              shopsURL={
                p.startsWith('/shops') || (p.startsWith('/settings') && true)
              }
            >
              <Component {...pageProps} />
            </Page>
          </PleaseSignIn>
        </ThemeProvider>
      );
    }

    return (
      <>
        <style>{`
          .layout {
            display: flex;
          }
          .hover:hover {
            opacity: 0.85;
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

        `}</style>
        <ApolloProvider client={apollo}>{pathCheck(path)}</ApolloProvider>
      </>
    );
  }
}

export default withData(MyApp);
