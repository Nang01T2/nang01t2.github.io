import Image from "next/image";

import LinkOrEmbed from "@/components/LinkOrEmbed";
import Message from "@/components/MdxComponents/Message";
import Pre from "@/components/MdxComponents/Pre";

export const mdxComponents = {
  a: LinkOrEmbed,
  Image,
  Message,
  pre: Pre,
} as const;
