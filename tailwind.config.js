/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
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
      backgroundImage: {
        "aboutPageHeroImgVision": "url('./assets/imgs/about-hero-vision.jpg')",
        "aboutPageHeroImgMission": "url('./assets/imgs/about-hero-mission.jpg')",
        "aboutPage-peopleGroupImg": "url('./assets/imgs/people-group.svg')",
        "careersPage-heroImg": "url('./assets/imgs/career-page-hero-img.jpg')",
        "investorsPage-heroImg": "url('./assets/imgs/investors-page-hero.png')",
        "partnersPage-heroImg": "url('./assets/imgs/partners-page-hero.svg')"
      },
      colors: {
        textNormal: "#555555",
        textNormalLight: "#505050",
        textNormalSupLight: "#5D5D5D",
        textBold: "#474646",
        textDarkBlue: "#091638",
        textReview: "#9C9C9C",
        ratingStar: "#FBC400",

        brightRed: "#DB4437",
        brightRedLight: "#EE8888",

        darkModeRed: "#DF594D",
        darkModeBg: "#100E0E",
        darkModeBgLight: "#151111",
        darkModeHowCard: "#0D0D0D",

        darkModeTextLight: "#C7D4F6",
        darkModeReviewCardBg: "#101010",

        boxBlue: "#00BEC0",
        boxBlueBorder: "#A4EBEC",
        darkBoxBlue: "#00D6DA",
        darkBoxBlueBorder: "#A4EAEC",

        boxPurple: "#7B51E9",
        boxPurpleBorder: "#D7C7FF",
        darkBoxPurple: "#8D67EC",
        darkBoxPurpleBorder: "#170051",

        boxPurpleLight: "#6C7FD8",
        boxPurpleLightBorder: "#D3DBFF",
        darkBoxPurpleLight: "#8091DD",
        darkBoxPurpleLightBorder: "#000D46",

        boxBrown: "#935B50",
        boxBrownBorder: "#FFDFD6",
        darkBoxBrownBorder: "#430E00",

        bgLight: "#FFF8F8",

        bgLight2: "#FCFAF6",

        bgLightCard: "#FFF9F9",
        cardHover: "#FFF1F1",

        toggleBg: "#F5F7FA",
        toggleBtn: "#D3DAE6",

        toggleBtnDark: "#343741",
        toggleBgDark: "#212121"
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
