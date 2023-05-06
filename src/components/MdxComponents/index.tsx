import { type MDXComponents } from 'mdx/types';
import Image from 'next/image';

import A from '@/components/MdxComponents/A';
import Message from '@/components/Message';

export const mdxComponents: MDXComponents = {
  a: A,
  Image,
  Message,
} as const;
