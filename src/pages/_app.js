//import '@/styles/tailwind.css';
import '@/styles/global.css';
import '@/styles/code-highlighting.scss';

import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import AppLayout from '@/components/AppLayout';
import { ThemeProvider } from 'next-themes';
import siteMetadata from '@/data/siteMetadata';
import { MDXComponents } from '@/components/MDXComponents';
import Layout from '@/components/layouts/Layout';
import useKBarAction from '@/libs/useKBarAction';
import { KBarProvider } from 'kbar';
import Fonts from '@/components/Fonts';
import { $, isDev } from '@/libs/core';

export default function App({ Component, pageProps }) {
  const actions = useKBarAction();
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Analytics /> */}
      {/* <Layout> */}
      <MDXProvider components={MDXComponents}>
        <KBarProvider actions={actions} options={{ enableHistory: true }}>
          <Fonts />
          <div className={$('font-sans')}>
            <Component {...pageProps} />
          </div>
        </KBarProvider>
      </MDXProvider>
      {/* </Layout> */}
    </ThemeProvider>
  );
}
