import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useCachedTranslation from "./useCachedTranslation";

const useLanguage = () => {
  const [language, setLanguage] = useState("uk");
  const loading = useCachedTranslation(language);
  const { i18n } = useTranslation();

  useEffect(() => {
    const i18nLang = i18n.language;
    if (i18nLang) setLanguage(i18nLang);
  }, [i18n]);

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "uk" : "en";
    i18n.changeLanguage(newLang);
};

  return { language, changeLanguage,  loading };
};

export default useLanguage;
