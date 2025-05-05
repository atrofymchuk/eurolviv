import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import uk from "./locales/uk.json";

const savedLanguage = localStorage.getItem("i18nextLng");
const initialLanguage = savedLanguage === "en" ? "en" : "uk";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk }
    },
    lng: initialLanguage,
    fallbackLng: "uk",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
