import Link from "@/components/Link";

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="relative space-y-2 md:space-y-5">
      <nav className="flex items-center justify-between">
        {!prevPage && (
          <button
            className="cursor-auto text-2xl disabled:opacity-30"
            disabled={!prevPage}
          >
            &larr;
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }
          >
            <button className="text-2xl">&larr;</button>
          </Link>
        )}
        <span className="absolute left-1/2 -translate-x-1/2 text-gray-500">
          Page {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto text-2xl disabled:opacity-30"
            disabled={!nextPage}
          >
            &rarr;
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button className="text-2xl">&rarr;</button>
          </Link>
        )}
      </nav>
    </div>
  );
}
