import createMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";
import mdxOptions from "./src/libs/mdxOptions.mjs";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    ...mdxOptions,
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
  experimental: {
    //mdxRs: true,
    largePageDataBytes: 128 * 100000,
  },
  images: {
    //  Configure `images.unoptimized = true` in `next.config.js` to disable the Image Optimization API.
    unoptimized: true,
    //loader: "imgix",
    //path: "https://images.unsplash.com/",
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"],
  },
  webpack: (config) => {
    // https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1279678289
    config.infrastructureLogging = {
      level: "error",
    };
    return config;
  },
};

//export default withMDX(nextConfig);
export default withMDX(withContentlayer(nextConfig));
