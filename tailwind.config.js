/* eslint-disable */

function withOpacity(varName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) return `rgba(var(${varName}),${opacityValue})`;
    return `rgb(var(${varName}))`;
  };
}

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx,css}', './source-data/**/*.{json,md}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        'screen/4': '25vh',
        'screen/2': '50vh',
        'screen-3/4': '75vh',
      },
      colors: {
        base: withOpacity('--color-base'),
        onBase: withOpacity('--color-on-base'),
        surface: withOpacity('--color-surface'),
        onSurface: withOpacity('--color-on-surface'),
        primary: withOpacity('--color-primary'),
        onPrimary: withOpacity('--color-on-primary'),
        secondary: withOpacity('--color-secondary'),
        onSecondary: withOpacity('--color-on-secondary'),
      },
      spacing: {
        18: '4.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.onBase'),
            h1: { color: theme('colors.onBase') },
            h2: { color: theme('colors.onBase') },
            h3: { color: theme('colors.onBase') },
            h4: { color: theme('colors.onBase') },
            h5: { color: theme('colors.onBase') },
            h6: { color: theme('colors.onBase') },
            p: { color: theme('colors.onBase') },
            a: {
              color: theme('colors.onBase'),
              '&:hover': {
                color: theme('colors.primary'),
              },
            },
            'ul > li::before': {
              'background-color': theme('colors.onBase'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
/* eslint-enable */
