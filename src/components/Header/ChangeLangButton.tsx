import { CiGlobe } from "react-icons/ci";
import i18n from "../../i18n";

type changeLanguageToProps ={
    changeLanguage:()=>void
    isMobile:boolean
}

export const ChangeLangButton = ({changeLanguage, isMobile}:changeLanguageToProps) => {
  return    <button
  className={`flex items-center  uppercase ${isMobile ? 'lg:hidden' : 'hidden lg:flex'}`}
  onClick={() => changeLanguage()}
>
  <CiGlobe className="w-4 h-4 me-1" />
  
  {["uk", "en"]
    .map((lang) => (
      <span
        key={lang}
        className={`hover:cursor-pointer text-[14px] ${
          i18n.language === lang ? "font-semibold " : ""
        }`}
      >
        { lang === 'en' ? 'ENG' : 'UK' }
      </span>
    ))
    .reduce<React.ReactNode[]>(
      (prev, curr) => (prev.length ? [...prev, "/", curr] : [curr]),
      []
    )}
</button>

};

