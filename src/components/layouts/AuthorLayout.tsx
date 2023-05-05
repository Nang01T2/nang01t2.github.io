import SocialIcon from "@/components/social-icons";
import Image from "@/components/Image";
import { PageSEO } from "@/components/SEO";
import { ReactNode } from "react";
import { AuthorFrontMatter } from "@/libs/types";
import Container from "@/components/layouts/Container";
import ContactsIcon from "../common/ContactsIcon";

interface Props {
  children: ReactNode;
  frontMatter: AuthorFrontMatter;
}

export default function AuthorLayout({ children, frontMatter }: Props) {
  const { name, avatar, occupation, company, email, twitter, github } =
    frontMatter;

  return (
    <Container>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={120}
              height={120}
              className="h-[120px] w-[120px] rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-5 pt-6">
              {/* <ContactsIcon contact="email" /> */}
              <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
              <SocialIcon kind="github" href={github} size={6} />
              <SocialIcon kind="twitter" href={twitter} size={6} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </Container>
  );
}
