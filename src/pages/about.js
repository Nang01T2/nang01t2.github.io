// import { MDXRenderer } from "@/components/MDXComponents"
import AuthorLayout from "@/components/layouts/AuthorLayout";
import { allAuthors } from "contentlayer/generated";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      author: {
        name: "AAA",
        avatar: "https://avatars.githubusercontent.com/u/8766071?s=400&v=4",
        occupation: "AA",
        company: "SS",
        email: "thaonguyen83@gmail.com",
        twitter: "",
        github: "https://github.com/nang01t2",
      },
    },
  };
  return {
    props: {
      author: allAuthors.find((author) => author.locale === locale),
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function About({ author }) {
  console.log("AAA", author);
  return (
    <AuthorLayout frontMatter={author}>
      {/* <MDXRenderer mdxSource={author.body.code} /> */}
      TODO
    </AuthorLayout>
  );
}
