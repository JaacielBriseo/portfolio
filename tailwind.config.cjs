const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.my-rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },
    '.perspective': {
      perspective: '1000px',
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden',
    },
  });
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      amber: colors.amber,
      custom: '#D0AE6C',
      '20if': '#201F1F',
      ffa: '#FFFAF6',
      cartext: '#D0D0CF',
      bluecntc:'#29b6f6',
      purplecntc:'#ba68c8',
      greencntc:'#9ccc65',
      redcntc: '#ef5350'
    },
    backgroundImage: {
      contactimg: "url('./src/images/moonimg.jpg')",
    },
  },
  plugins: [Myclass],
};
