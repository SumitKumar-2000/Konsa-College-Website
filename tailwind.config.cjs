/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        
        'roboto': ['Roboto', 'sans-serif'],
      },
      background: ['active'],
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
    screens: {
      'xxs': '400px',
      'xs' : '500px',
      'mob': {'max': '1023px'},
      'desk': {'min': '1024px'},
      ...defaultTheme.screens,
    },
   
  },
  plugins: [ require('tailwind-scrollbar-hide')],
  
}
