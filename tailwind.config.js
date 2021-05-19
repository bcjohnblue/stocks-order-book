module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      primary: '#1e2c4c'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
