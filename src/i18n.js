import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "./assets/locales/en/translation.json";
import translationFr from "./assets/locales/fr/translation.json";

const resources = {
  en: {
    translation: translationEn
  },
  fr: {
    translation: translationFr
  }
};

i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",

    // lng: 'gb',
    // keySeparator: false,

    resources
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   }
    // },

    // Options for language detector
    // detection: {
    //   order: ['queryString', 'path', 'cookie', 'htmlTag'],
    //   caches: ['cookie'],
    // },
    // react: { useSuspense: false },
    // backend: {
    //   loadPath: '/assets/locales/{{lng}}/translation.json',
    // },
  });

export default i18n;
