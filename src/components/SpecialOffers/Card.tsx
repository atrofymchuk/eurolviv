import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { useMemo } from "react";
import cn from "classnames";
type CardToProps = {
  src: string;
  title: string;
  desc: string;
  classes: string;
  offer: string;
  url: string;
  handleCardClick: (url: string) => void;
};

export const Card = ({ src, title, desc, classes, offer, url, handleCardClick }: CardToProps) => {
  const { t } = useTranslation();

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

        <InViewWrapper >
          <img
            src={src}
            alt={translatedTexts.title}
            className={cn(
              `w-full object-cover ${classes} h-[264px] sm:h-[320px] md:h-[320px] lg:h-[310px] xl:h-[450px] 2xl:h-[510px] `
            )}
            />
        </InViewWrapper>

        </div>
        <p
          className="absolute top-[23px]   left-[21px] xl:top-[20px] xl:left-[20px] uppercase border bg-white text-[#A47762] font-cofo-medium rounded-full 
        px-[12px] font-cofo-medium py-1.25 text-[10px]  sm:text-[12px]  md:text-[12px] lg:text-[12px]  2xl:text-[16px] xl:px-[16px] xl:py-[10px]  lg:px-[14px] lg:py-[9px]  2xl:py-[10px]
        shrink-0  "
        >
          {translatedTexts.offer}
        </p>
      </div>

      <h4
        className="uppercase text-[#252526] font-cofo-medium tracking-[-0.05em] flex items-center  px-[13px_11px] md:px-0
        text-[24px] leading-[106%]  sm:leading-[20px] md:text-[26px] md:leading-[22px] lg:text-[32px] lg:leading-[36px] pt-[20px] "
      >
        {translatedTexts.title}
      </h4>

      <p
        className="uppercase text-[#8F8F8F] mt-3.25 lg:mt-auto px-[12px_12px] md:px-0
                text-[12px] leading-[120%] sm:leading-[120%] md:text-[14px] xl:text-[18px]"
      >
        {translatedTexts.desc}
      </p>

        <div className="md:mt-auto pt-[23px] flex lg:hidden ps-3.25 pb-5">
          <button
            onClick={() => handleCardClick(url)}
            className="font-cofo-medium border border-[#8C331B] text-[#8C331B] px-7.75 py-2.5 rounded-full uppercase 
              text-[10px] sm:text-[12px] md:text-[14px]  inline-block
              hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition duration-300 ease-in-out"
          >
            {translatedTexts.details}
          </button>
        </div>
    </div>
  );
};
