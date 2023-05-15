const siteUrl = "https://nangnguyen.vercel.app";

// Save crawling budget by not fetching SSG meta files
const NEXT_SSG_FILES = [
  "/*.json$",
  "/*_buildManifest.js$",
  "/*_middlewareManifest.js$",
  "/*_ssgManifest.js$",
  "/*.js$",
];

// add your private routes here
const exclude = [
  "/dashboard*",
  "/settings*",
  "/onboarding*",
  "/blog/tags*",
  "/auth*",
  "/about",
  "/archives*",
  "/vi/*",
];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  changefreq: "weekly",
  exclude,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: NEXT_SSG_FILES,
      },
    ],
  },
};
