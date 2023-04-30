import Hr from './common/Hr';

export default function TocTop({
  tableOfContents,
  className,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = "",
}) {
  if (tableOfContents?.length === 0) {
    return <></>;
  }

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
    <ul>
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
    <div>
      <div className={className}>
        <h2 id="table-of-contents">Table of contents</h2>
        {tocList}
        <Hr />
      </div>
    </div>
  );
}
