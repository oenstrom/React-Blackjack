/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const myClasses = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  })
})

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [myClasses],
}
