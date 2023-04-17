/* 
Site Metadata used as Variables and selection of Providers
For providers remember to add them to next.config.js Security Policy section
*/

const siteMetadata = {
  theme: "system", // System, dark or light
  language: "en-us",
  title: "🔥",
  author: "Nang Nguyen",
  email: "thaonguyen83.dn@gmail.com",
  headerTitle: "👨‍💻",
  description: "Nang Nguyen blog.",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  siteUrl: "",
  siteRepo: "",
  github: "",
  twitter: "",
  facebook: "",
  youtube: "",
  linkedin: "",

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

  analytics: {
    simpleAnalytics: false,
    plausibleDataDomain: "",
    umamiWebsiteId: "",
    googleAnalyticsId: "",
  },
};

module.exports = siteMetadata;
