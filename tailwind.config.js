/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      primary: '#1e2c4c',
      gray: '#57626E'
    },
    extend: {
      colors: {
        secondary: '#8698aa',
        red: '#FF5B5A',
        green: '#00b15d'
      },
      width: {
        '300px': '300px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
