import { useMemo } from "react";
import Hr from "../common/Hr";
import LinkExternal from "../common/LinkExternal";
import siteConfig from "@/data/siteMetadata";

export default function Footer() {
  const since = useMemo(() => {
    const year = new Date().getFullYear();
    if (siteConfig.since === year) {
      return year;
    }
    return `${siteConfig.since}-${year}`;
  }, []);

  return (
    <footer className="pb-8 text-sm text-neutral-800 dark:text-neutral-400">
      <Hr className="mb-8" />

      <div className="flex flex-col items-end space-y-1">
        {/* <AuthorContacts /> */}
        <p>
          <span>© {since} </span>
          <LinkExternal href={siteConfig?.author?.contacts?.github}>
            {siteConfig.title}
          </LinkExternal>
          <span> Powered by </span>
          <LinkExternal href="https://nextjs.org/">Next.js</LinkExternal>
          <span>, </span>
          <LinkExternal href="https://pages.github.com/">
            Github Pages
          </LinkExternal>
        </p>
      </div>
    </footer>
  );
}
