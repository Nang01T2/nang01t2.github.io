import "@/styles/globals.css";
import "@/styles/prose.css";
import "@/styles/navigation.scss";
import "@/styles/code-highlighting.scss";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
//import Fonts from "@/components/Fonts";
//import { $, isDev } from "@/libs/core";
import { Toaster } from "react-hot-toast";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/components/MDXComponents";
import { seoConfig } from "@/data/siteConfig";
import "dayjs/locale/en";

import dayjs from "dayjs";

dayjs.locale("en");

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...seoConfig} />
      <MDXProvider components={MDXComponents}>
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
