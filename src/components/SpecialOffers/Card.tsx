import { Link } from "react-router-dom";
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
};

export const Card = ({ src, title, desc, classes, offer }: CardToProps) => {
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
        <InViewWrapper>
          <img
            src={src}
            alt={translatedTexts.title}
            className={cn(`w-full object-cover ${classes} h-[200px] sm:h-[250px] md:h-[320px] lg:h-[510px]`)}
          />
        </InViewWrapper>

        <p className="absolute top-[10px] left-[10px] lg:top-[20px] lg:left-[20px] uppercase border bg-white text-[#A47762] font-medium rounded-full 
          px-3 py-1 text-[10px] leading-[12px] sm:text-[12px] sm:px-4 sm:py-2 md:text-[14px] lg:text-[16px] lg:px-[22px] lg:py-[13px]">
          {translatedTexts.offer}
        </p>
      </div>

      <h4 className="uppercase text-[#252526] font-semibold tracking-[-0.05em] flex items-center min-h-[60px] 
        text-[18px] leading-[18px] sm:text-[22px] sm:leading-[20px] md:text-[26px] md:leading-[22px] lg:text-[32px] lg:leading-[26px] pt-[15px] lg:pt-[20px]">
        {translatedTexts.title}
      </h4>

      <p className="uppercase text-[#8F8F8F] mt-2 lg:mt-3 
        text-[10px] leading-[11px] sm:text-[12px] sm:leading-[13px] md:text-[14px] md:leading-[15px] lg:text-[18px] lg:leading-[17px]">
        {translatedTexts.desc}
      </p>

      <div className="text-start w-full lg:hidden mt-auto mb-[20px]">
        <Link
          to="/special-offers"
          className="font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase 
            text-[10px] sm:text-[12px] md:text-[14px] xl:text-base 
            hover:cursor-pointer hover:bg-[#8C331B] hover:text-white transition duration-300 ease-in-out"
        >
          {translatedTexts.details}
        </Link>
      </div>
    </div>
  );
};
