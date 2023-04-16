/* 
This component allows for the creation of table of contents
*/

const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i');

  const tmpToc = [
    { value: 'Title 1', url: '#title-1', depth: 1 },
    { value: 'Title 2', url: '#title-2', depth: 2 },
    { value: 'Title 3', url: '#title-3', depth: 3 },
    { value: 'Title 4', url: '#title-4', depth: 4 },
    { value: 'Title 5', url: '#title-5', depth: 5 },
    { value: 'GitHub flavor', url: '#github-flavor', depth: 2 },
    { value: 'Images', url: '#images', depth: 2 },
    { value: 'Math', url: '#math', depth: 2 },
    { value: 'Template', url: '#template', depth: 2 },
    { value: 'Quick start', url: '#quick-start', depth: 3 },
  ];

  const filteredToc = toc?.filter(
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
          className={`${heading.depth >= indentDepth && 'ml-6'}`}
        >
          <a href={heading.url}>{heading.value}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {asDisclosure ? (
        <details open>
          <summary className="ml-6 pt-4 pb-4 text-xl font-sans">
            Table of Contents
          </summary>
          <div className="ml-6">{tocList}</div>
        </details>
      ) : (
        tocList
      )}
    </>
  );
};

export default TOCInline;
