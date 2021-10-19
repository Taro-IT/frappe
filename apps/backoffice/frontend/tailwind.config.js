const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx,scss}'), ...createGlobPatternsForDependencies(__dirname)],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#2f2f2f"
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: []
};
