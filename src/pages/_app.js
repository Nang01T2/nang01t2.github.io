import "@/styles/globals.css";
import "@/styles/prose.css";
import "@/styles/navigation.scss";
import "@/styles/code-highlighting.scss";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
//import Fonts from "@/components/Fonts";
//import { $, isDev } from "@/libs/core";
import { Toaster } from "react-hot-toast";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "@/components/MDXComponents";
import siteMetadata from "@/data/siteMetadata";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
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
