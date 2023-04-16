/* 
This component is used to import MDX components to be used in other components
*/

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { MDXRemote } from 'next-mdx-remote';

import Image from './Image';
import styles from '@/styles/Markdown.module.css';
import NextOptimizedImage from '@/components/NextOptimizedImage';
import CustomLink from './Link';
import ImageGallery from 'react-image-gallery';
import TOCInline from './TOCInline';
import PageTitle from './PageTitle';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

import { serialize } from 'next-mdx-remote/serialize';
import MarkdownWrapper from './MarkdownWrapper';

export const MDXComponents = {
  ImageGallery,
  Image,
  TOCInline,
  PageTitle,
  a: CustomLink,
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
  if (!mdxSource) return 'TODO';
  return (
    <MDXRemote {...mdxSource} toc={toc} components={MDXComponents} {...rest} />
  );
  //const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  //return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
