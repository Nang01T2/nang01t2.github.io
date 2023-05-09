import Image from "next/image";

import LinkOrEmbed from "@/components/LinkOrEmbed";
import Message from "@/components/MdxComponents/Message";
import Pre from "@/components/MdxComponents/Pre";
//import ZoomImage from "@/components/MdxComponents/ZoomImage";

export const mdxComponents = {
  a: LinkOrEmbed,
  Image,
  //img: ZoomImage,
  Message,
  pre: Pre,
} as const;
