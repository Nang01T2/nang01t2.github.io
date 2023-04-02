/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {},
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
  plugins: [require("@tailwindcss/typography")],
};
