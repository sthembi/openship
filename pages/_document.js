import Document, { Head, Main, NextScript } from 'next/document';
import { extractStyles } from 'evergreen-ui';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // const sheet = new ServerStyleSheet();
    // const page = renderPage(App => props =>
    //   sheet.collectStyles(<App {...props} />)
    // );
    const page = renderPage();

    // const styleTags = sheet.getStyleElement();
    const { css, hydrationScript } = extractStyles();

    return { ...page, css, hydrationScript };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          {/* {this.props.styleTags}{" "} */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700"
            rel="stylesheet"
          />
          <script src="https://js.stripe.com/v3/" />
          {/* eslint-disable */}
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          {this.props.hydrationScript}
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
