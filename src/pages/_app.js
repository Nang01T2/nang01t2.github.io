import "@/styles/globals.css";
import "@/styles/prose.css";
import "@/styles/navigation.scss";
import "@/styles/code-highlighting.scss";

import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { Toaster } from "react-hot-toast";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "@/components/MdxComponents";
import { seoConfig } from "@/data/siteConfig";
import * as gtag from "@/libs/gtag";
import { isDev } from "@/libs/core";
import "dayjs/locale/en";

import dayjs from "dayjs";

dayjs.locale("en");

function App({ Component, pageProps }) {
  gtag.useGtag();

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
        <Toaster
          toastOptions={{
            className: "text-primary bg-secondary",
            position: "bottom-center",
          }}
        />
      </MDXProvider>
      {!isDev && (
        <>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(App);