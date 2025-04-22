import { CiGlobe } from "react-icons/ci";
import i18n from "../../i18n";
import cn from "classnames";

type changeLanguageToProps = {
  changeLanguage: () => void
  isMobile: boolean
  scrolled: boolean
  pathname?: string
}

export const ChangeLangButton = ({ changeLanguage, isMobile, scrolled, pathname }: changeLanguageToProps) => {
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
      className={cn(`flex items-center  uppercase ${isMobile ? 'lg:hidden' : 'lg:flex 2xl:pe-[1.04vw] xl:pe-[0.78vw]'}`)}
      onClick={() => changeLanguage()}
    >
      <CiGlobe className={cn("w-4 h-4 lg:w-[1.47vw] lg:h-[1.47vw] xl:w-[1.09vw] xl:h-[1.09vw] 2xl:w-[0.94vw] 2xl:h-[0.94vw] 2xl:me-[0.21vw] xl:me-[0.16vw] lg:me-[0.16vw] me-[1vw]", getTextColor(currentLang))} />
      <div className="flex items-center">
        <span className={cn("hover:cursor-pointer text-[14px] 2xl:text-[0.83vw] xl:text-[0.94vw] lg:text-[1.17vw]", getTextColor(currentLang), {
          "font-cofo-medium": currentLang === 'uk'
        })}>UK</span>
        <span className={cn( {
          "text-[#252526]": isMobile, 
          "text-white": !isMobile && !scrolled && pathname !== "/contacts",
          "text-black": !isMobile && scrolled
        })}>/</span>
        <span className={cn("hover:cursor-pointer text-[14px] 2xl:text-[0.83vw] xl:text-[0.94vw] lg:text-[1.17vw]", getTextColor('en'), {
          "font-cofo-medium": currentLang === 'en'
        })}>ENG</span>
      </div>
    </button>
  );
}