import Link from '@/components/Link';
import PageTitle from '@/components/PageTitle';
//import { BlogSEO } from "@/components/SEO";
//import siteMetadata from "@/lib/siteMetadata";
//import Comments from "@/components/comments";
import ScrollTopAndComment from '@/components/ScrollTopAndComment';
import Tag from '@/components/Tag';

export default function BlogLayout({ frontMatter, next, prev, children }) {
  const { title, tags, images } = frontMatter;

  return (
    <div>
      <ScrollTopAndComment />
      <div className="border-b border-gray-200 dark:border-gray-700 text-center">
        <div>
          <PageTitle tagsKey={tags}>{title}</PageTitle>
        </div>
        <div>
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
