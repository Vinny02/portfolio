/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'opensans': ['Open Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

