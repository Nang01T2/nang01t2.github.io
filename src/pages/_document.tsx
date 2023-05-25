import { Html, Head, Main, NextScript } from 'next/document'
import { isDev } from "@/libs/core";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link
          href="/static/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          color="#4a9885"
          href="/static/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="transition-[background] prose-headings:font-headings">
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {!isDev && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
            }}
          />
        )}
      </body>
    </Html>
  );
}
