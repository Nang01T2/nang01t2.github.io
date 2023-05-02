import Container from "@/components/layouts/Container";
import BouncingBall from "@/components/misc/BouncingBall";
import { PageSEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/legacy/image";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/Button";
import { ButtonType } from "@/libs/types";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO />
      <PageTransition>
        <div>
          <div>
            <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
              <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
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
            <div className="space-y-6 text-center md:text-left md:space-y-0 md:space-x-4">
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
          </div>
          {/* <BouncingBall /> */}
        </div>
      </PageTransition>
    </Container>
  );
}
