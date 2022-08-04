/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: "true"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
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

        darkModeRed: '#DF594D',
        darkModeBg: '#100E0E',
        darkModeBgLight: '#151111',
        darkModeHowCard: '#0D0D0D',

        boxBlue: '#00BEC0',
        boxBlueBorder: '#A4EBEC',
        darkBoxBlue: '#00D6DA',
        darkBoxBlueBorder: '#A4EAEC',

        boxPurple: '#7B51E9',
        boxPurpleBorder: '#D7C7FF',
        darkBoxPurple: '#8D67EC',
        darkBoxPurpleBorder: '#170051',
        
        boxPurpleLight: '#6C7FD8',
        boxPurpleLightBorder: '#D3DBFF',
        darkBoxPurpleLight: '#8091DD',
        darkBoxPurpleLightBorder: '#000D46',
        
        boxBrown: '#935B50',
        boxBrownBorder: '#FFDFD6',
        darkBoxBrownBorder: '#430E00',

        bgLight: '#FFF8F8',
        
        bgLight2: '#FCFAF6',


        bgLightCard: '#FFF9F9',
        cardHover: '#FFF1F1'
      }
    },
    fontFamily: {
      poppins: "Poppins"
    }
  },
  variants: {
    fill: ["hover", "focus"] // this line does the trick
  },
  plugins: []
};
