/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#2C3333',
      pri: "#A5C9CA",
      secondary: '#395B64',
      sec: '#E7F6F2'

    }
  },
  plugins: [require('flowbite/plugin')],
}