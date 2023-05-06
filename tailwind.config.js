const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        headings: ['Manrope', ...defaultTheme.fontFamily.sans],
        fancy: ['Sriracha'],
      },
      colors: {
        orange: colors.orange,
        blueGray: colors.slate,
        coolGray: colors.gray,
        teal: colors.teal,
        dark: '#111827',
        darker: '#0d131f',
        midnight: '#1e293b',
        'midnight-hover': '#334155',
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        sky: colors.sky,
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
            table: false,
            tbody: false,
            thead: false,
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.slate.900'),
              '&:hover': {},
              textDecorationColor: theme('colors.teal.500'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.blue.400') },
            },
            h2: {
              fontWeight: '600',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
              borderBottomWidth: '1px',
              borderColor: theme('colors.gray.300'),
              paddingBottom: '0.3rem',
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              backgroundColor: theme('colors.slate.100'),
              color: theme('colors.gray.700'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.900'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            strong: { color: theme('colors.gray.700') },
            hr: {
              color: theme('colors.gray.200'),
              '&before': { content: '∿∿∿' },
            },
            code: { color: theme('colors.indigo.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            pre: {
              backgroundColor: theme('colors.gray.100'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            a: {
              color: theme('colors.slate.50'),
              '&:hover': {
                color: theme('colors.teal.500'),
              },
              textDecorationColor: theme('colors.teal.400'),
              textUnderlineOffset: '3px',
              textDecorationStyle: 'decoration-solid',
              code: { color: theme('colors.blue.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
              backgroundColor: theme('colors.slate.800'),
              color: theme('colors.gray.400'),
            },
            'h1,h2,h3,h4': {
              color: theme('colors.white'),
            },
            hr: { borderColor: theme('colors.gray.600') },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            code: { color: theme('colors.indigo.200') },
            pre: {
              backgroundColor: theme('colors.midnight'),
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
