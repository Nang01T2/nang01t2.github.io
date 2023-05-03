import clsx from "clsx";
import React from "react";
import Hr from "../common/Hr";

import { type Toc } from "@/libs/types";

import styles from "./styles.module.scss";

type Props = {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  className?: string;
  extraLinks?: React.ReactNode;
  anchorsContainerSelector: string;
};

export default function TableOfContents({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 3,
  asDisclosure = true,
  exclude = "",
  anchorsContainerSelector,
  extraLinks,
  className,
}: Props) {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  const tocList = (
    <ul>
      {filteredToc?.map((heading) => (
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
    <div className={className}>
      {asDisclosure ? (
        <details open>
          <summary className="ml-1 text-xl font-sans">
            Table of Contents
          </summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
      {/* <Hr className="mt-0" /> */}
    </div>
  );

  // return (
  //   <nav id="toc" className={clsx(styles.Block, "scrollbar", className)}>
  //     {toc.length > 0 && (
  //       <>
  //         <div className={styles.title}>Contents</div>
  //         <ul className={styles.list}>
  //           {filteredToc.map((heading) => (
  //             <li key={heading.value}>
  //               <a
  //                 href={heading.url}
  //                 className={clsx(
  //                   styles.item,
  //                   heading.depth >= indentDepth && styles.indent
  //                 )}
  //                 data-depth={heading.depth}
  //               >
  //                 {heading.value}
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </>
  //     )}
  //     <div className={styles.extra}>
  //       <hr />
  //       {extraLinks}
  //     </div>
  //   </nav>
  // );
}
