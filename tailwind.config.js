/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange1':'#FD5F0E',
        'orangebg':'#FFFAE9',
        'black1':'#191623',
      },
      fontFamily: {
        poppins: ['"poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
}