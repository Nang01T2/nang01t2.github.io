import "@/styles/globals.css";
import "@/styles/code-highlighting.scss";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import MDXLayout from "@/components/MDXLayout";
import Layout from "@/components/Layout";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      );
    }
    case "next-mdx-remote": {
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      );
    }
    // for @next/mdx
    default: {
      return (
        <ThemeProvider enableSystem={true} attribute="class">
          <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <MDXLayout>
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
