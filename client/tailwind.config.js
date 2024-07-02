/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        adjective:'#FDFC41',
        adverb:'#9BFF63',
        conjunction:'#D933FF',
        interjection:'#FF54B0',
        noun:'#FF5252',
        preposition:'#59E1FF',
        pronoun:'#FF8C5A',
        verb:'#FFCD4C',
        primary:'rgb(24, 45, 234)',
        secondary:'#818181',
        tertiary:'rgb(24, 45, 234, 10%)'
      }
    },
  },
  plugins: [],
}

