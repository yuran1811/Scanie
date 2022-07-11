const c = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ...c,
      ct: {
        bg: {
          ...c.slate,
        },
        color: '#f1f5f9',
        gold: {
          light: '#fde68a',
          dard: '#ca8a04',
          bgLight: '#ca8a04',
          bgDark: '#fde68a',
        },
        link: {
          color: '#38bdf8',
          bg: '#075985',
        },
      },
      vintage1: { 1: '#f8d195', 2: '#f67280', 3: '#c06cb4', 4: '#6c5b7b', 5: '#355c7d' },
      vintage2: { 1: '#addcc8', 2: '#dcebc2', 3: '#fdd2b5', 4: '#f8a6a8', 5: '#f48a94' },
      vintage3: { 1: '#aba7a7', 2: '#cc527a', 3: '#e8175d', 4: '#474747', 5: '#363636' },
    },
    extend: {
      keyframes: {
        flatLoadingFlip: {
          '50%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(180deg) rotateX(180deg)' },
        },
        threeDotsFade: { from: { opacity: 1 }, to: { opacity: 0 } },
      },
      animation: {
        flatLoading: 'flatLoadingFlip 0.8s infinite',
        threeDots: 'threeDotsFade 0.8s ease-in-out alternate infinite;',
      },
    },
  },
  plugins: [],
};