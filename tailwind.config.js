/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,tx,tsx}'],
  theme: {
    colors: {
      red: 'hsl(7, 99%, 70%)',
      yellow: 'hsl(51, 100%, 49%)',
      'primary-100': 'hsl(167, 40%, 24%)',
      'primary-200': 'hsl(198, 62%, 26%)',
      'primary-300': 'hsl(168 34% 41% / .75)',
      'neutral-500': 'hsl(212, 27%, 19%)',
      'neutral-400': 'hsl(213, 9%, 39%)',
      'neutral-300': 'hsl(232, 10%, 55%)',
      'neutral-200': 'hsl(210, 4%, 67%)',
      'neutral-100': 'hsl(0, 0%, 100%)',
      'blue-400': 'rgb(147 197 253);',
    },
    fontFamily: {
      sans: ['Barlow'],
      serif: ['Fraunces'],
    },
    extend: {
      backgroundImage: {
        'desktop-header': "url('../images/desktop/image-header.jpg')",
        'mobile-header': "url('../images/mobile/image-header.jpg')",
        photography: "url('../images/desktop/image-photography.jpg')",
        'graphic-design': "url('../images/desktop/image-graphic-design.jpg')",
      },
    },
  },
  plugins: [],
};
