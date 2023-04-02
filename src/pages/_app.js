import "@/styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import MDXLayout from "@/components/MDXLayout";

export default function App({ Component, pageProps }) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    case "next-mdx-remote": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    // for @next/mdx
    default: {
      return (
        <MDXLayout>
          <MDXProvider components={{}}>
            <Component {...pageProps} />
          </MDXProvider>
        </MDXLayout>
      );
    }
  }
}
