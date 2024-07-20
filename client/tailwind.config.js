/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'adjective':'#FF5252',
        'adverb':'#FF8C5A',
        'conjunction':'#FFCD4C',
        'interjection':'#FDFC41',
        'noun':'#9BFF63',
        'preposition':'#59E1FF',
        'pronoun':'#D933FF',
        'verb':'#FF54B0',
        'primary':'rgb(24, 45, 234)',
        'secondary':'#818181',
        'tertiary':'rgb(24, 45, 234, .10)'
      },
      boxShadow:{
        'search-bar':'4px 6px 18px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [
    require('@xpd/tailwind-3dtransforms')
  ],
}