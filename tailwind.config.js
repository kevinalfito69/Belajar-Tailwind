/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  darkMode : 'class',
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",

      },
      transitionDuration: {
  '0': '0ms',
  '2000': '2000ms',
}
    },
  },
  plugins: [],
}
