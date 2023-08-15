/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        "VeryDarkGray": "hsl(0, 0%, 17%)",
        "DarkGray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

