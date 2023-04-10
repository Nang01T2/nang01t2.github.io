import "@/styles/tailwind.css";
import "@/styles/global.scss";
import "@/styles/code-highlighting.scss";

import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import MDXLayout from "@/components/MDXLayout";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  switch (pageProps.layout) {
    case "main": {
      console.log("Main Layout");
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Layout currentPage={pageProps.currentPage}>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      );
    }
    case "next-mdx-remote": {
      console.log("MDX Layout");
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Layout currentPage={pageProps.currentPage}>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      );
    }
    // for @next/mdx
    default: {
      console.log("Default Layout");
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="transition-colors duration-300 min-h-screen select-none">
            <MDXLayout currentPage={pageProps.currentPage}>
              <MDXProvider components={{}}>
                <Component {...pageProps} />
              </MDXProvider>
            </MDXLayout>
          </div>
        </ThemeProvider>
      );
    }
  }
}
