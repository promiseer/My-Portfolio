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
          <title>Parmeshwar - Backend and Full-Stack Developer Portfolio</title>
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Hello! I'm Parmeshwar, a skilled backend developer with expertise in JavaScript. I excel in crafting robust web app architectures for business growth."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Parmeshwar Rathod" />
          <meta name="keywords" content="portfolio, Backend/FullStack Developer, web development, Node JS Developer , Schbang, Backend Developer" />
          <meta property="og:title" content="Parmeshwar Rathod's Portfolio - Backend/Fullstack Developer"/>
          <meta property="og:description" content="Hi there! My name is Parmeshwar, and I'm a passionate backend developer experience in creating robust and efficient web applications. I specialize in Javascript, and I love working on complex backend architectures that help businesses grow and thrive"/>
          <meta property="og:image" content="https://cdn.buymeacoffee.com/uploads/profile_pictures/2023/09/KNADODeXA0V5GgWb.jpg@300w_0e.webp"/>
          <meta property="og:url" content="https://www.parmeshwar.me"/>
          <meta property="og:type" content="website"/>

          <meta name="twitter:card" content="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-19/308025560_794001192021682_1561889814514861597_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=vwKHtzr727gAX_ABpUN&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCWC4i0EaD7V34aiR81E4x4u0LP-xT78Ma201c43rkAGw&oe=651F75E9&_nc_sid=8b3546"/>
          <meta name="twitter:site" content="@promiseeer"/>
          <meta name="twitter:title" content="Parmeshwar Rathod's Portfolio - Backend/Fullstack Developer"/>
          <meta name="twitter:description" content="Explore the web development and design work of Parmeshwar Rathod, a passionate and experienced web developer. View projects, skills, and achievements in one place."/>
          <meta name="twitter:image" content="https://cdn.buymeacoffee.com/uploads/profile_pictures/2023/09/KNADODeXA0V5GgWb.jpg@300w_0e.webp"/>
          <script
              type="text/javascript"
              async
              dangerouslySetInnerHTML={{
                __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"GTM-MTLC5J2X")`,
              }}
            />
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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" type="image/png" href={"/favicon.png"} />
          <link rel="canonical" href="https://www.parmeshwar.me/#about" />
          <link rel="alternate" hreflang="en" href ="http://www.parmeshwar.me/#about" />

        </Head>

        <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-MTLC5J2X`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
