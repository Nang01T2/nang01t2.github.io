import '@/styles/tailwind.css';
import '@/styles/global.scss';
import '@/styles/code-highlighting.scss';

import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import AppLayout from '@/components/AppLayout';
import { ThemeProvider } from 'next-themes';
import siteMetadata from "@/data/siteMetadata";
import { MDXComponents } from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Analytics /> */}
      <AppLayout>
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </AppLayout>
    </ThemeProvider>
  );
}
