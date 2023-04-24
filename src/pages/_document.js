import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="[--scroll-mt:2rem]">
      <Head>
        <meta
          name="theme-color"
          content="#fafafa"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#131313"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className="text-primary bg-primary transition-[background]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
