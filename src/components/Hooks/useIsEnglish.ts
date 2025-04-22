import { useTranslation } from "react-i18next";

export const useIsEnglish = () => {
  const { i18n } = useTranslation();
  return i18n.language === "en";
}; 