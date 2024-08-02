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
        'primary':'#182DEA',
        'secondary':'#818181',
        'tertiary':'rgb(24, 45, 234, .10)'
      },
      boxShadow:{
        'custom':'4px 6px 18px rgba(0, 0, 0, 0.15)',
        'modal':'5px 8px 20px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    require('@xpd/tailwind-3dtransforms'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}