import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    console.log("isInternalLink");
    return <Link href={href} {...rest} />;
  }

  const isAnchorLink = href && href.startsWith("#");

  if (isAnchorLink) {
    console.log("isAnchorLink");
    return <a href={href} {...rest} />;
  }

  console.log("isDefaultLink");
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
