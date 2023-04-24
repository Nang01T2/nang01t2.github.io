import Hr from './common/Hr';

export default function TocTop({ tableOfContents, className }) {
  console.log('tableOfContents', tableOfContents);
  if (tableOfContents.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <h2 id="table-of-contents">Table of contents</h2>
      <ul>
        {tableOfContents?.map((section) => (
          <li key={section.url}>
            <a href={section.url}>{section.value}</a>
            <ul>
              {section.subSections?.map((subSection) => (
                <li key={subSection.url}>
                  <a href={subSection.slug}>{subSection.value}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Hr />
    </div>
  );
}
