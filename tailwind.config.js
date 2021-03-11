module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Merriweather']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
