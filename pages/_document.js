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
          <title>Parmeshwar's Portfolio: Backend/FullStack Developer</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Hi there! My name is Parmeshwar, and I'm a passionate backend developer experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Parmeshwar Rathod" />
          <meta name="keywords" content="portfolio, Backend/FullStack Developer, web development, Node JS Developer , Schbang, Backend Developer" />
          <meta property="og:title" content="Parmeshwar Rathod's Portfolio - Backend/Fullstack Developer"/>
          <meta property="og:description" content="Hi there! My name is Parmeshwar, and I'm a passionate backend developer experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive"/>
          <meta property="og:image" content="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/308025560_794001192021682_1561889814514861597_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vwKHtzr727gAX_ABpUN&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCWC4i0EaD7V34aiR81E4x4u0LP-xT78Ma201c43rkAGw&oe=651F75E9&_nc_sid=8b3546"/>
          <meta property="og:url" content="https://www.parmeshwar.me"/>
          <meta property="og:type" content="website"/>

          <meta name="twitter:card" content="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/308025560_794001192021682_1561889814514861597_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vwKHtzr727gAX_ABpUN&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCWC4i0EaD7V34aiR81E4x4u0LP-xT78Ma201c43rkAGw&oe=651F75E9&_nc_sid=8b3546"/>
          <meta name="twitter:site" content="@promiseeer"/>
          <meta name="twitter:title" content="Parmeshwar Rathod's Portfolio - Backend/Fullstack Developer"/>
          <meta name="twitter:description" content="Explore the web development and design work of John Smith, a passionate and experienced web developer. View projects, skills, and achievements in one place."/>
          <meta name="twitter:image" content="https://ca.slack-edge.com/T02JA1CCQBH-U041B3AFJ72-0a738499f624-512"/>
         
          <script
            key="structured-1"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Portfolio',
              headline: 'Hello world this is parmeshwar, a passionate backend developer',
              description: "Hi there! My name is Parmeshwar, and I'm a passionate backend developer experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive",
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
          <link rel="canonical" href="https://www.parmeshwar.me/#about" />
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
