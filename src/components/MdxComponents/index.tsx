import { type MDXComponents } from "mdx/types";
import Image from "next/image";

import A from "@/components/MdxComponents/A";

export const mdxComponents: MDXComponents = {
  a: A,
  Image,
} as const;
