/* eslint-disable jsx-a11y/anchor-has-content */
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import Link from "@/components/Link";

const localeRegex = /\?__locale=[a-z][a-z]/;

export default function LinkOrEmbed({ href, children, ...rest }) {
  if (children !== href) {
    const locale = href.match(localeRegex)?.[0]?.slice(-2);
    return (
      <Link href={href.replace(localeRegex, "")} locale={locale} {...rest}>
        {children}
      </Link>
    );
  }

  if (isYoutubeUrl(href)) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${extractYoutubeVideoID(href)}`}
        title="YouTube video player"
        frameBorder="0"
        width="100%"
        className="youtube-embed"
      />
    );
  }

  // return (
  //   <a target="_blank" rel="noopener noreferrer" href={href}>
  //     {children}
  //   </a>
  // );

  return (
    <>
      <iframe
        src={`/embed/${encodeURIComponent(href)}`}
        title={`Embedded link to ${href}`}
        loading="lazy"
        className="h-32 w-full"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="hidden"
      >
        {children}
      </a>
    </>
  );
}

function isYoutubeUrl(url) {
  return url.startsWith("https://www.youtube.com/watch?");
}

export function extractYoutubeVideoID(url) {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return arr[2] !== undefined ? arr[2].split(/[^\w-]/i)[0] : arr[0];
}
