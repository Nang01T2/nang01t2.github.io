import SocialIcon from "@/components/SocialIcon";
// import { PageSEO } from "@/components/SEO";
import Layout from "@/components/layouts/Container";

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    description,
    facebook,
    email,
    twitter,
    linkedin,
    github,
  } = frontMatter;

  return (
    <Layout>
      {/* <PageSEO title={`About - ${name}`} description={`About me - ${name}`} /> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-0 xl:space-y-0">
          {/* <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={avatar} alt="avatar" className="w-48 h-48 rounded-full" />

            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="p-4 text-gray-500 dark:text-gray-400">
              {description}
            </div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="facebook" href={facebook} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div> */}
          <div className="xl:col-span-2">{children}</div>
          <div className="pt-8 pb-8 max-w-none xl:col-span-2"></div>
        </div>
      </div>
    </Layout>
  );
}