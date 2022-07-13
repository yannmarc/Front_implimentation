/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      fontFamily: {
         primary: ['Raleway', 'sans-serif'],
         secondary: ['Swansea', 'sans-serif']   
      },
      colors: {
        'orange': '#FD4F32',
        'gray': '#8B8B8B'
      }
    },
  },
  plugins: [],
}
