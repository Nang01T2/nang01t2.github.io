/* 
This component is used to import MDX components to be used in other components
*/

import { MDXRemote } from "next-mdx-remote";
import { lazy, Suspense } from "react";
import Image from "./Image";
import CustomLink from "./Link";
import ImageGallery from "react-image-gallery";
import TOCInline from "./TOCInline";
import PageTitle from "./PageTitle";
import Pre from "./Pre";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

//import MarkdownWrapper from './MarkdownWrapper';

export const MDXComponents3 = {
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
  const Layout = lazy(() => import(`./layouts/${layout ?? "Layout"}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout {...rest} toc={toc}>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </Layout>
    </Suspense>
  );
};
