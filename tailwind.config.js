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
        textNormal: '#555555',
        textNormalLight: '#505050',
        textNormalSupLight: '#5D5D5D',
        textBold: '#474646',
        textDarkBlue: '#091638',
    
        brightRed: '#DB4437',
        brightRedLight: '#EE8888',
        brightBlue: '#00BEC0',
        brightPurple: '#7B51E9',
        brightPurpleLight: '#6C7FD8',
        brightBrown: '#935B50',

        bgLight: '#FFF8F8',
        bgLight2: '#FCFAF6',
        bgLightCard: '#FFF9F9',
        cardHover: '#FFF1F1'
      }
    },
    fontFamily: {
      'poppins': 'Poppins',
    }
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
};

