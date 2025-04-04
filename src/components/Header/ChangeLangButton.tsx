import { CiGlobe } from "react-icons/ci";
import i18n from "../../i18n";
import cn from "classnames";

type changeLanguageToProps = {
  changeLanguage: () => void
  isMobile: boolean
  scrolled: boolean
}

export const ChangeLangButton = ({ changeLanguage, isMobile, scrolled }: changeLanguageToProps) => {
  const currentLang = i18n.language;
  
  const getTextColor = (lang: string) => {
    if (isMobile) {
      return currentLang === lang ? "text-[#252526]" : "text-[#ADADAD]";
    }
    if (scrolled) {
      return currentLang === lang ? "text-black" : "text-[#ADADAD]";
    }
    return currentLang === lang ? "text-white" : "text-[#ADADAD]";
  };

  return (
    <button
      className={cn(`flex items-center uppercase ${isMobile ? 'lg:hidden' : 'lg:flex'}`)}
      onClick={() => changeLanguage()}
    >
      <CiGlobe className={cn("w-4 h-4 lg:w-4.5 lg:h-4.5 me-1", getTextColor(currentLang))} />
      <div className="flex items-center">
        <span className={cn("hover:cursor-pointer text-[14px]", getTextColor(currentLang), {
          "font-cofo-medium": currentLang === 'uk'
        })}>UK</span>
        <span className={cn( {
          "text-[#252526]": isMobile,
          "text-white": !isMobile && !scrolled,
          "text-black": !isMobile && scrolled
        })}>/</span>
        <span className={cn("hover:cursor-pointer text-[14px]", getTextColor('en'), {
          "font-cofo-medium": currentLang === 'en'
        })}>ENG</span>
      </div>
    </button>
  );
}