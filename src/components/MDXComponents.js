/* 
This component is used to import MDX components to be used in other components
*/

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from './Image';
import styles from '@/styles/Markdown.module.css';
import NextOptimizedImage from '@/components/NextOptimizedImage';
import CustomLink from './Link';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

export const MDXComponents = {
  ImageGallery,
  Image,
  a: CustomLink,
  wrapper: ({ components, layout, ...rest }) => {
    console.log('Wrapper - layout', layout);
    const Layout = require(`../layouts/${layout ?? 'DefaultLayout'}`).default;
    return <Layout {...rest} />;
  },
  // img: (props) => <NextOptimizedImage img_props={props} />,
  // blockquote: (props) => (
  //   <blockquote {...props} className={styles.blockquote} />
  // ),
  //p: (props) => <p {...props} className={styles.p} />,
  //h1: (props) => <h1 {...props} className={styles.postTitle} />,
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  console.log('MDXLayoutRenderer - layout: ', layout);
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};
