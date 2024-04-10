const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Noto Serif', ...defaultTheme.fontFamily.serif]
    },
    extend: {
      textColor: {
        main: 'rgb(var(--color-text-main) / <alpha-value>)'
      },
      backgroundColor: {
        main: 'rgb(var(--color-bg-main) / <alpha-value>)',
        muted: 'rgb(var(--color-bg-muted) / <alpha-value>)'
      },
      borderColor: {
        main: 'rgb(var(--color-border-main) / <alpha-value>)'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: 'normal',
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              textDecorationThickness: '1px',
              textUnderlineOffset: '2px',
              '&:hover': {
                textDecorationStyle: 'solid'
              }
            },
            'h1,h2,h3,h4,h5,h6': {
              fontFamily: theme('fontFamily.serif'),
              fontWeight: 500
            },
            blockquote: {
              border: 0,
              fontFamily: theme('fontFamily.serif'),
              fontSize: '1.3125em',
              fontStyle: 'italic',
              fontWeight: 'normal',
              lineHeight: 1.4,
              paddingLeft: 0,
              '@media (min-width: theme("screens.sm"))': {
                fontSize: '1.66667em',
                lineHeight: 1.3
              }
            }
          }
        },
        lg: {
          css: {
            blockquote: {
              paddingLeft: 0
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
