import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import useCachedTranslation from "./useCachedTranslation";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "uk");
  // const loading = useCachedTranslation(language);

  useEffect(() => {
    const i18nLang = i18n.language;
    if (i18nLang) setLanguage(i18nLang);
  }, [i18n]);

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  return { language, changeLanguage };
};

export default useLanguage;
