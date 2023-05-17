import Container from "@/components/layouts/Container";
import BouncingBall from "@/components/misc/BouncingBall";
import { PageSEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/legacy/image";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/Button";
import { ButtonType } from "@/libs/types";
import { useRouter } from "next/router";
import { allSeries, reducedAllBlogPosts } from "@/data/dataset";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const MAX_POSTS = 5;

export const getStaticProps = async ({ locale }) => {
  const blogs = reducedAllBlogPosts.filter((x) => x.locale === locale);
  
  return {
    props: {
      blogs: blogs.slice(0, MAX_POSTS),
      blogTotalCount: blogs.length,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default function Home({ blogs, blogTotalCount }) {
  console.log("blogList", blogs);
  console.log("blogTotalCount", blogTotalCount);
  const { push } = useRouter();
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO />
      <PageTransition>
        <div>
          {/* <div>
            <div className="mt-12 grid grid-cols-1 items-center text-center md:mt-24 md:grid-cols-6 md:text-left">
              <h1 className="order-2 col-span-5 text-4xl leading-tight sm:text-5xl md:order-1 md:leading-normal">
                I&apos;m{" "}
                <span className="text-teal-500 dark:text-teal-400">
                  {siteConfig.author.name}
                </span>
                . I&apos;m a software engineer, blogger working at Evizi.
              </h1>
              <div className="order-1 md:order-2">
                <Image
                  alt="Braydon Coyer"
                  height={160}
                  width={160}
                  src={siteConfig?.author?.photo}
                  placeholder="blur"
                  blurDataURL={siteConfig?.author?.photo}
                  className="col-span-1 rounded-full"
                  layout="fixed"
                />
              </div>
            </div>
            <div className="space-y-6 text-center md:space-x-4 md:space-y-0 md:text-left">
              <Button
                buttonType={ButtonType.PRIMARY}
                onButtonClick={() => push("/blog")}
              >
                Read the blog
              </Button>
              <Button
                buttonType={ButtonType.SECONDARY}
                onButtonClick={() => push("/about")}
              >
                More about me
              </Button>
            </div>
          </div> */}
          {/* <BouncingBall /> */}
        </div>
      </PageTransition>
    </Container>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="mb-2 border-b pb-1 text-2xl font-bold">{title}</h2>
      {children}
    </div>
  )
}
