import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      Head;
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-IN">
        <Head>
          <title>Portfolio</title>
          <meta name="robots" content="all" />
          <meta
            name="description"
            content="this is my portfolio website parmeshwar.me"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Parmeshwar Rathod" />
          <meta name="keywords" content="portfolio, web development, Node JS Developer , Schbang, Backend Developer" />
          <script
            key="structured-1"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Portfolio',
              headline: 'Hello world this is parmeshwar, a passionate backend developer',
              description: "Hi there! My name is Parmeshwar, and I'm a passionate backend developer with 1.5 years of experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive",
              author: [
              {
              '@type': 'Person',
              name: 'Parmeshwar Rathod',
              },
              ],
              datePublished: '2022-05-05T09:00:00.000Z',
              })}}
            />
          <script
            src="https://platform.linkedin.com/badges/js/profile.js"
            async
            defer
            type="text/javascript"
          ></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" type="image/png" href={"/favicon.png"} />
          <link rel="canonical" href="http://www.parmeshwar.me/about" />
          <link rel="alternate" hreflang="en" href ="http://www.parmeshwar.me/" />

        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
