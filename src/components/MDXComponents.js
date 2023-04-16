/* 
This component is used to import MDX components to be used in other components
*/

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { MDXRemote } from 'next-mdx-remote';
import { lazy, Suspense } from 'react';
import Image from './Image';
import styles from '@/styles/Markdown.module.css';
import NextOptimizedImage from '@/components/NextOptimizedImage';
import CustomLink from './Link';
import ImageGallery from 'react-image-gallery';
import TOCInline from './TOCInline';
import PageTitle from './PageTitle';
import Pre from './Pre';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

//import MarkdownWrapper from './MarkdownWrapper';

export const MDXComponents = {
  ImageGallery,
  Image,
  TOCInline,
  PageTitle,
  a: CustomLink,
  pre: Pre,
  // wrapper: ({ components, toc, ...props }) => {
  //   console.log('MarkdownWrapper - toc', toc);
  //   return <MarkdownWrapper components={components} {...props} />;
  // },
  // wrapper: ({ components, layout, ...rest }) => {
  //   const Layout = lazy(() =>
  //     import(`../layouts/${layout ?? 'DefaultLayout'}`)
  //   );
  //   return <Layout {...rest} />;
  // },
  // img: (props) => <NextOptimizedImage img_props={props} />,
  // blockquote: (props) => (
  //   <blockquote {...props} className={styles.blockquote} />
  // ),
  //p: (props) => <p {...props} className={styles.p} />,
  //h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export const MDXLayoutRenderer = ({ layout, toc, mdxSource, ...rest }) => {
  //console.log('MDXLayoutRenderer - toc: ', toc);
  //console.log('MDXLayoutRenderer - mdxSource: ', mdxSource);
  //return 'TODO';
  // const MDXLayout = useMemo(() => {
  //   return <MDXRemote {...mdxSource} components={MDXComponents} />;
  // }, [mdxSource]);
  // console.log('MDXLayout', MDXLayout);
  //if (!mdxSource) return 'TODO';
  const Layout = lazy(() => import(`../layouts/${layout ?? 'DefaultLayout'}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout {...rest}>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Layout>
    </Suspense>
  );

  //return <MDXRemote {...mdxSource} components={MDXComponents} />;
  //const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  //return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
