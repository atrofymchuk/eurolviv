import { useTranslation } from "react-i18next";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { useMemo } from "react";
import cn from "classnames";
import { useCustomWidth } from "@/hooks/useCustomWidth";
type CardToProps = {
  src: string;
  title: string;
  desc: string;
  classes: string;
  offer: string;
  url: string;
  handleCardClick: (url: string) => void;
  index: number;
};

export const Card = ({
  index,
  src,
  title,
  desc,
  classes,
  url,
  offer,
  handleCardClick,
}: CardToProps) => {
  const { t, i18n } = useTranslation();
  const isMobileWidth = useCustomWidth(350, 450);
  const isEng = i18n.language === "en";

  const translatedTexts = useMemo(
    () => ({
      offer: t(offer),
      title: t(title),
      desc: t(desc),
      details: t("buttons.details"),
    }),
    [t, offer, title, desc]
  );

  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full">
        <div className="p-3 pb-0 md:p-0">
          <InViewWrapper>
            <img
              src={src}
              alt={translatedTexts.title}
              className={cn(
                `w-full object-cover  ${classes} h-[264px] sm:h-[320px] md:h-[320px] lg:h-[28.27vw] xl:h-[27.34vw] 2xl:h-[26.56vw] `
              )}
            />
          </InViewWrapper>
        </div>
        <p
          className={`absolute top-[23px] lg:top-[1.17vw] lg:left-[1.17vw]  left-[21px] 2xl:top-[1.04vw] 
            2xl:left-[1.04vw] xl:top-[1.41vw] xl:left-[1.41vw] uppercase border bg-white text-[#A47762] font-cofo-medium rounded-full 
        px-[12px] font-cofo-medium py-1.25 text-[2.67vw]  sm:text-[12px] xl:text-[0.74vw]  md:text-[12px] lg:text-[0.98vw] 2xl:px-[0.83vw]
          2xl:text-[0.83vw] xl:px-[16px] xl:py-[10px]  lg:px-[14px] lg:py-[9px]  2xl:py-[.54vw]
        shrink-0  
        ${isEng && index == 0 ? "me-[26.67vw] xl:me-[0vw] 2xl:me-0" : ""}

        `}
        >
          {translatedTexts.offer}
        </p>
      </div>

      <h4
        className="uppercase text-[#252526] font-cofo-medium tracking-[-0.05em] flex items-center  px-[13px_11px] md:px-0
        text-[24px] leading-[106%]   md:text-[1.55vw] lg:text-[1.95vw] xl:text-[1.88vw] 2xl:text-[1.67vw] 2xl:pt-[1.04vw] pt-[20px] "
      >
        {translatedTexts.title}
      </h4>

      <p
        className={`uppercase text-[#8F8F8F] mt-3.25 lg:mt-auto px-[12px_12px] md:px-0
          ${isEng && index == 0 ? "2xl:w-[90%] xl:w-[90%]" : ""}
          ${isEng && index == 2 ? "2xl:w-[85%] xl:w-[85%]" : ""}
          ${isEng && index == 3 ? "2xl:w-[95%] xl:w-[95%] w-[99%]" : ""}
          
          ${!isEng && index == 0 ? "xl:w-[105%]" : ""}
                  text-[3.2vw] leading-[120%] sm:leading-[120%] lg:text-[10px] md:text-[14px] xl:text-[0.94vw] 2xl:text-[0.93vw] ${
                    !isEng && index === 2 ? "w-[105%] lg:w-auto " : ""
                  } ${
          !isEng && index == 3 ? "2xl:w-[95%] xl:w-[90%] w-[100%] " : ""
        }  ${!isEng && index == 4 ? "2xl:w-[90%] w-[97%] " : ""} `}
      >
        {(index === 0 || (index === 3 && !isEng)) && isMobileWidth ? (
          index === 0 ? (
            t("specialOffersState.tarifForMilitary.cardDescMobile")
          ) : (
            <>
              {t("specialOffersState.photoSession.cardDescMobile.0")} <br />{" "}
              {t("specialOffersState.photoSession.cardDescMobile.1")}
            </>
          )
        ) : (
          translatedTexts.desc
        )}
      </p>

      <div className="md:mt-auto pt-[23px] flex lg:hidden ps-3.25 pb-5">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleCardClick(url);
          }}
          className="font-cofo-medium border border-[#8C331B] text-[#8C331B] px-7.75 py-2.5 rounded-full uppercase 
              text-[2.67vw] sm:text-[12px] md:text-[14px]  inline-block w-[34.67vw] h-[9.87vw] lg:w-auto lg:h-auto
              hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition duration-300 ease-in-out"
        >
          {translatedTexts.details}
        </button>
      </div>
    </div>
  );
};
