/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    screens: {
      lg: '376px',
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      softBlue: 'hsl(215, 51%, 70%)',
      cyan: 'hsl(178, 100%, 50%)',
      mainBg: 'hsl(217, 54%, 11%)',
      cardBg: 'hsl(216, 50%, 16%)',
      line: 'hsl(215, 32%, 27%)',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    fontSize: {
      sm: ['15px', '19px'],
      base: ['18px', '26px'],
      lg: ['22px', '28px'],
    },
    extend: {},
  },
  plugins: [],
};
