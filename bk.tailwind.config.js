/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'false' or 'class'
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: { '9/16': '56.25%' },
      lineHeight: { 11: '2.75rem', 12: '3rem', 13: '3.25rem', 14: '3.5rem' },

      /* https://tailwindcss.com/docs/font-family */
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
        title: 'Turret Road',
        tags: 'IBM Plex Mono',
        poetry: 'Gentium Basic',
        poetryTitle: 'Square Peg',
      },

      /* https://tailwindcss.com/docs/customizing-colors */
      /*
				code: {
					green: '#b5f4a5',
					yellow: '#ffe484',
					purple: '#d9a9ff',
					red: '#ff8383',
					blue: '#93ddfd',
					white: '#fff',
				},
			*/
      colors: {
        primary: colors.sky,
        gray: colors.slate,
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#ededed',
          200: '#e5e5e5',
          250: '#dedede',
          300: '#d4d4d4',
          350: '#b5b5b5',
          400: '#a3a3a3',
          450: '#8a8a8a',
          470: '#808080',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          750: '#363636',
          800: '#262626',
          900: '#171717',
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': { color: `${theme('colors.primary.600')} !important` },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: { fontWeight: '600', color: theme('colors.gray.900') },
            'h4,h5,h6': { color: theme('colors.gray.900') },
            pre: { backgroundColor: theme('colors.gray.800') },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': { backgroundColor: theme('colors.gray.500') },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': { color: `${theme('colors.primary.400')} !important` },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: { fontWeight: '600', color: theme('colors.gray.100') },
            'h4,h5,h6': { color: theme('colors.gray.100') },
            pre: { backgroundColor: theme('colors.gray.800') },
            code: { backgroundColor: theme('colors.gray.800') },
            details: {
              backgroundColor: theme('colors.gray.800'),
            } /* This is New*/,
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': { backgroundColor: theme('colors.gray.400') },
            strong: { color: theme('colors.gray.100') },
            thead: { th: { color: theme('colors.gray.100') } },
            tbody: { tr: { borderBottomColor: theme('colors.gray.700') } },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addComponents, addUtilities }) => {
      addComponents({
        '.text-primary': {
          '@apply text-neutral-900 dark:text-neutral-200': '',
        },
        '.text-secondary': {
          '@apply text-neutral-700 dark:text-neutral-350': '',
        },
        '.text-tertiary': {
          '@apply text-neutral-600 dark:text-neutral-400': '',
        },
        '.text-mute': {
          '@apply text-neutral-500 dark:text-neutral-470': '',
        },
        '.bg-primary': {
          '@apply bg-neutral-50 dark:bg-neutral-900': '',
        },
        '.bg-secondary': {
          '@apply bg-neutral-150 dark:bg-neutral-800': '',
        },
        '.bg-tertiary': {
          '@apply bg-neutral-200 dark:bg-neutral-750': '',
        },
        '.bg-mute': {
          '@apply bg-neutral-250 dark:bg-neutral-800': '',
        },
      });
      addUtilities(
        {
          '.no-scrollbar': {
            /* IE and Edge */
            '-ms-overflow-style': 'none',
            /* Firefox */
            'scrollbar-width': 'none',
            /* Safari and Chrome */
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        },
        ['responsive']
      );
    },
  ],
};
