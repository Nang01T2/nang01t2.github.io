import React from 'react';

//import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXRemote } from 'next-mdx-remote';
import { mdxComponents } from '@/components/MdxComponents';

export default function MdxRenderer({ code }) {
  return <MDXRemote {...code} components={mdxComponents} />;

  // const MDXContent = useMDXComponent(code);
  // return <MDXContent components={mdxComponents} />;
}
