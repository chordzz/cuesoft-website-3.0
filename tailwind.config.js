/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: 'true',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: '#DB4437',
        brightRedLight: '#EE8888',
        brightBlue: '#00BEC0',
        brightPurple: '#7B51E9',
        brightPurpleLight: '#6C7FD8',
        brightBrown: '#935B50',
      }
    },
  },
  plugins: [],
};

