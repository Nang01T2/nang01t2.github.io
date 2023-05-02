import { DefaultSeoProps } from "next-seo";

export const siteConfig = {
  url: "https://nang01t2.github.io",
  title: "Nang Nguyen",
  description: "Github Blog Testing",
  copyright: "Nang Nguyen © All rights reserved.",
  since: 2023,
  googleAnalyticsId: "",
  author: {
    name: "Nang Nguyen",
    photo: "https://avatars.githubusercontent.com/u/8766071?s=400&v=4",
    bio: "Software Engineer",
    contacts: {
      email: "mailto:thaonguyen83.dn@gmail.com",
      github: "Nang01T2",
      twiter: "",
      velog: "",
      linkedin: "",
      youtube: "",
      instagram: "",
    },
  },
  menus: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Snippets",
      path: "/snippets",
    },
    {
      label: "Archives",
      path: "/archives",
    },
  ],
};

export const seoConfig: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en-US",
    url: siteConfig.url,
    siteName: siteConfig.title,
  },
  additionalMetaTags: [
    {
      name: "author",
      content: siteConfig.author.name,
    },
  ],
};
