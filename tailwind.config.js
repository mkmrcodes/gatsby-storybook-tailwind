module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#542C85',
          light: '#703BB1',
          dark: '#381D59',
        },
        secondary: {
          DEFAULT: '#852C5D',
          light: '#C95D99',
          dark: '#4A1834',
        },
        success: {
          DEFAULT: '#22bb33',
          light: '#4ec85b',
          dark: '#1ea82d',
        },
        danger: {
          DEFAULT: '#bb2124',
          light: '#c84d4f',
          dark: '#a81d20',
        },
        info: {
          DEFAULT: '#bbbbbb',
          light: '#cccccc',
          dark: '#aaaaaa',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
