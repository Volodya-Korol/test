/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#483FDD',
          green: '#5cd6c0',
        },
        gray: {
          main: '#6C96CE',
          light: '#eff1ff',
        },
      },
    },
  },
  plugins: [],
};
