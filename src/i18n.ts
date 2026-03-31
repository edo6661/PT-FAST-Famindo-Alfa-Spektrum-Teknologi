import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  id: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  fallbackLng: "id",
  interpolation: { escapeValue: false },
});

export default i18n;
