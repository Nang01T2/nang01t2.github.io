import { Fragment, useEffect, useState } from 'react';

import { $ } from '@/libs/core';

const useScroll = (tableOfContents) => {
  const [currentSectionSlug, setCurrentSectionSlug] = useState(undefined);

  useEffect(() => {
    if (tableOfContents.length === 0) return;

    let headings;
    const style = window.getComputedStyle(document.documentElement);
    const scrollMt =
      parseFloat(
        style.getPropertyValue('--scroll-mt').match(/[\d.]+/)?.[0] ?? '0'
      ) * parseFloat(style.fontSize.match(/[\d.]+/)?.[0] ?? '16');

    function onResize() {
      headings = Array.from(
        document.querySelectorAll(
          '.prose h2:not(#table-of-contents),h3:not(#table-of-contents)'
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
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });
    window.addEventListener('resize', onResize, {
      capture: true,
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true });
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [tableOfContents]);

  return { tableOfContents, currentSectionSlug };
};

export default function TocBanner({ tableOfContents, className }) {
  const { currentSectionSlug } = useScroll(tableOfContents);

  const isSubSectionActive = (subSection) => {
    return subSection.href === currentSectionSlug;
  };

  const isSectionActive = (section) => {
    return (
      section.href === currentSectionSlug ||
      section.subSections?.some((v) => v.href === currentSectionSlug)
    );
  };

  return (
    <div
      className={$(
        'overflow-hidden rounded-xl border border-neutral-200 transition-all dark:border-neutral-800',
        className
      )}
    >
      {tableOfContents.length !== 0 && (
        <div className="p-4 pr-2 dark:border-neutral-700 dark:bg-neutral-800">
          <p
            id="toc-header"
            className="text-primary text-sm font-extrabold leading-6"
          >
            On this page
          </p>
          <ul
            id="toc-content"
            className="mt-2 flex flex-col items-start justify-start text-sm"
          >
            {tableOfContents?.map((section) => (
              <Fragment key={section.href}>
                <li>
                  <a
                    href={`${section.href}`}
                    className={$(
                      'group block py-1',
                      section.subSections && '',
                      isSectionActive(section)
                        ? 'bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600'
                        : 'text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base'
                    )}
                  >
                    {section.value}
                  </a>
                </li>
                {section.subSections?.map((subSection) => (
                  <li key={subsection.href} className="ml-4">
                    <a
                      href={`#${subsection.href}`}
                      className={$(
                        'group flex items-start py-1',
                        isSubSectionActive(subSection)
                          ? 'bg-gradient-to-r from-neutral-700 to-yellow-900 bg-clip-text font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600'
                          : 'text-secondary hover:text-primary hover:drop-shadow-base-bold dark:hover:drop-shadow-base'
                      )}
                    >
                      <svg
                        width="3"
                        height="24"
                        viewBox="0 -9 3 24"
                        className={$(
                          'mr-2 overflow-visible',
                          'text-tertiary group-hover:text-secondary'
                        )}
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      {subsection.value}
                    </a>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
