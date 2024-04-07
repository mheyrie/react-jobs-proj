/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      },
      colors:{
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        lightAlabaster: '#BCBABC',
        deepVoodoo: '#533C61',
        lightOysterPink: '#ECD0D0',
        deepMongoose: '#B7A283'
      }
    },
  },
  plugins: [],
}