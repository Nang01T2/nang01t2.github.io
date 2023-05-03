import "@/styles/globals.css";
import "@/styles/prose.css";
import "@/styles/navigation.scss";
import "@/styles/code-highlighting.scss";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import { Toaster } from "react-hot-toast";
import { MDXProvider } from "@mdx-js/react";
//import { MDXComponents3 } from "@/components/MDXComponents3";
import { mdxComponents } from "@/components/MdxComponents";
import { seoConfig } from "@/data/siteConfig";
import "dayjs/locale/en";

import dayjs from "dayjs";

dayjs.locale("en");

function App({ Component, pageProps }) {
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
    </ThemeProvider>
  );
}

export default appWithTranslation(App);