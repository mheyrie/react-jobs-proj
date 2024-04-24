/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '976px',
        lg: '1100px',
        xl: '1440px'
      },
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
        deepMongoose: '#B7A283',
        moroo: '#0A253F'
      }
    },
  },
  plugins: [],
}