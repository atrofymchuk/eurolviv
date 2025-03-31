import { CiGlobe } from "react-icons/ci";
import i18n from "../../i18n";
import { useEffect } from "react";
import cn from "classnames";

type changeLanguageToProps = {
  changeLanguage: () => void
  isMobile: boolean
  scrolled: boolean
}

export const ChangeLangButton = ({ changeLanguage, isMobile, scrolled }: changeLanguageToProps) => {
  const currentLang = i18n.language;
  
  useEffect(() => {
    console.log("ChangeLangButton scrolled:", scrolled, "currentLang:", currentLang);
  }, [scrolled, currentLang]);

  return (
    <button
      className={cn(`flex items-center uppercase ${isMobile ? 'lg:hidden' : 'hidden lg:flex'}`)}
      onClick={() => changeLanguage()}
    >
      <CiGlobe className="w-4 h-4 lg:w-4.5 lg:h-4.5 me-1" />
      <div className="flex items-center">
        <span className={cn("hover:cursor-pointer text-[14px]", {
          "text-black": scrolled && currentLang === 'uk',
          "text-white": !scrolled && currentLang === 'uk',
          "text-[#ADADAD]": !scrolled && currentLang !== 'uk',
          "font-cofo-medium ": currentLang === 'uk',
        })}>UK</span>
        <span >/</span>
        <span className={cn("hover:cursor-pointer text-[14px]", {
          "text-white": !scrolled && currentLang === 'en',
          "text-[#ADADAD]": !scrolled && currentLang !== 'en',
          "text-black": scrolled && currentLang === 'en',
          "font-cofo-medium": currentLang === 'en',
        })}>ENG</span>
      </div>
    </button>
  );
}