module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif', 'Merriweather']
      },
      colors: {
        body: '#1D1F21',
        sidebar: '#1D1F21',
        main: '#111316',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
