import AuthorLayout from '@/components/layouts/AuthorLayout';
import { allAuthors } from 'contentlayer/generated';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getFileBySlug } from '@/libs/mdx';
import MdxRenderer from '../components/MdxRenderer';

export async function getStaticProps({ locale }) {
  const detail = await getFileBySlug('authors', '', locale);
  return {
    props: {
      author: allAuthors.find((author) => author.locale === locale),
      content: detail.content,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function About({ author, content }) {
  return (
    <AuthorLayout frontMatter={author}>
      <MdxRenderer code={content} />
    </AuthorLayout>
  );
}
