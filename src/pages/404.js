import Link from "@/components/Link";
import Container from "@/components/layouts/Container";
import { PageSEO } from "@/components/SEO";
import { siteConfig } from "@/data/siteConfig";
import { PageTransition } from "@/components/PageTransition";

export default function FourZeroFour() {
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO title={`Page Not Found - ${siteConfig.title}`} />
      <PageTransition>
        <div className="mb-16">
          <div className="flex flex-col m-auto items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pt-20 pb-8 md:space-y-5">
              <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                404
              </h1>
            </div>

            <div className="max-w-md">
              <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                Sorry we could not find this page.
              </p>
              <p className="mb-8">
                But dont worry, you can find plenty of other things on our
                homepage.
              </p>
              <Link href="/">
                <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-teal-700 focus:outline-none dark:hover:bg-teal-500">
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageTransition>
    </Container>
  );
}
