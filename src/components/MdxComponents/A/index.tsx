import NextLink from "next/link";

export default function A({ href, ref, ...props }: JSX.IntrinsicElements["a"]) {
  return href ? <NextLink href={href} {...props} /> : null;
}
