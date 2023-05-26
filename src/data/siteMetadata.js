/* 
Site Metadata used as Variables and selection of Providers
For providers remember to add them to next.config.js Security Policy section
*/

const siteMetadata = {
  theme: "system", // System, dark or light
  language: "en-us",
  title: "🔥 Personal blog",
  author: "Nang Nguyen",
  email: "thaonguyen83.dn@gmail.com",
  headerTitle: "👨‍💻",
  description: "Nang Nguyen blog.",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  siteUrl: "https://nangnguyen.vercel.app",
  siteRepo: "",
  github: "",
  twitter: "",
  facebook: "",
  youtube: "",
  linkedin: "",
  codepen: "",

  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "light",
      inputPosition: "bottom",
      lang: "en",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  },
  since: 2023,
  author: {
    name: "Nang Nguyen",
    photo: "",
    bio: "Software Engineer",
    contacts: {
      email: "",
      github: "",
      twiter: "",
      velog: "",
      linkedin: "",
      youtube: "",
      instagram: "",
    },
  },

  analytics: {
    simpleAnalytics: false,
    plausibleDataDomain: "",
    umamiWebsiteId: "",
    googleAnalyticsId: "G-QN72X3X4CW",
  },
};

module.exports = siteMetadata;
