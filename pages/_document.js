import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // const sheet = new ServerStyleSheet();
    // const page = renderPage(App => props =>
    //   sheet.collectStyles(<App {...props} />)
    // );
    const page = renderPage();

    // const styleTags = sheet.getStyleElement();

    return { ...page };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <script src="https://js.stripe.com/v3/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
