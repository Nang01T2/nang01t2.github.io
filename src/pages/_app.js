import '@/styles/tailwind.css';
import '@/styles/global.scss';
import '@/styles/code-highlighting.scss';

import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import MDXLayout from '@/components/MDXLayout';
import AppLayout from '@/layouts/AppLayout';
import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/lib/siteMetadata';
import { MDXComponents } from "@/components/MDXComponents";

export default function App({ Component, pageProps }) {
  console.log("pageProps", pageProps);
  console.log("Component", Component);
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Analytics /> */}
      <AppLayout>
        <MDXProvider components={{}}>
          <Component {...pageProps} />
        </MDXProvider>
      </AppLayout>
    </ThemeProvider>
  );

  switch (pageProps.layout) {
    case "main": {
      console.log("Main Layout");
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
          <MDXLayout>
            <MDXProvider components={{}}>
              <Component {...pageProps} />
            </MDXProvider>
          </MDXLayout>
        </ThemeProvider>
      );
    }
  }
}
