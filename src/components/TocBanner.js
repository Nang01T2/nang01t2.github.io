import { Fragment, useEffect, useState } from "react";

import { $ } from "@/libs/core";

import CopyLinkButton from "./common/CopyLinkButton";
import IconButton from "./common/IconButton";
import ChatIcon from "./icons/ChatIcon";
import UpIcon from "./icons/UpIcon";

const useScroll = (tableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState(undefined);

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings;
    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue("--scroll-mt").match(/[\d.]+/)?.[0] ?? "0"
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? "16");

    function onResize() {
      headings = Array.from(
        document.querySelectorAll(
          ".prose h2:not(#table-of-contents),h3:not(#table-of-contents)"
        )
      ).map((element) => ({ id: element.id, top: element.offsetTop }));
    }

    function onScroll() {
      if (!headings) return;

      const NAV_TOP = 120;
      const top = window.pageYOffset + scrollMt - NAV_TOP + 1;

      let current = undefined;
      for (let i = 0; i < headings.length; i++) {
        if (top >= headings[i].top) {
          current = headings[i].id;
        }
      }
      setCurrentSectionSlug(current);
    }

    onResize();
    onScroll();
    window.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", onResize, {
      capture: true,
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { tableOfContents, currentSectionSlug };
};

export default function TocBanner({
  tableOfContents,
  className,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = "",
}) {
  // if (tableOfContents?.length === 0) {
  //   return <></>;
  // }

  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = tableOfContents.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  const tocList = (
    <ul
      id="toc-content"
      className="mt-2 flex flex-col items-start justify-start text-sm"
    >
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={`${heading.depth >= indentDepth && "ml-6"}`}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={$(
        "overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800",
        className
      )}
    >
      {tableOfContents?.length !== 0 && (
        <div className="p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800">
          <p
            id="toc-header"
            className="text-primary text-sm font-extrabold leading-6"
          >
            Table of content
          </p>
          {tocList}
        </div>
      )}
      <div
        className={$(
          "flex items-center justify-end p-2",
          "bg-neutral-150 dark:bg-neutral-750"
        )}
      >
        <CopyLinkButton className="mr-auto hover:bg-mute" />
        <IconButton
          className="hover:bg-mute"
          aria-label="scroll-up"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <UpIcon width={20} />
        </IconButton>
        <IconButton
          className="hover:bg-mute"
          aria-label="scroll-down"
          onClick={() => document.querySelector(".giscus")?.scrollIntoView()}
        >
          <ChatIcon width={20} />
        </IconButton>
      </div>
    </div>
  );
}
