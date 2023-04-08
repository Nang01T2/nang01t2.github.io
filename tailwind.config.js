/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {},
      typography: {
        DEFAULT: {
          css: {
            /* for highlight.js
            "pre code": {
              padding: 0,
            },
            */
            //Remove `` around inline code block
            "code::before": {
              content: "",
            },
            "code::after": {
              content: "",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
