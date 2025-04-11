import { InViewWrapper } from "../utils/InViewWrapper";
import { hotel } from "../../store/exportsImg";
import { TFunction } from "i18next";
import { i18n } from "i18next";
import cn from "classnames";

export const PlacesNearbySection = ({
  t,
  places,
  infrastructure,
  i18n,
}: {
  t: TFunction;
  places: string[][];
  infrastructure: string[][];
  i18n: i18n;
}) => {
  const isEng = i18n.language === "en";

  return (
    <div className="p-4 xl:p-10 xl:pt-[44px] pt-[31px] border-b border-t lg:border-t-0 border-[#c7c7c7] flex flex-col min-h-full">
      <h2 className="text-[#8C331B] text-[24px] xl:text-[40px] tracking-[-0.04em] leading-[100%] text-center xl:text-left uppercase">
        {t("about.whereWeAre.whatIsClose")}
      </h2>
      <ul className="grid mt-6 text-left uppercase lg:mt-[42px] space-y-[6px] lg:space-y-[17px]">
        {infrastructure.map(([place, distance], index) => (
          <li
            key={index}
            className="flex justify-between text-[12px] xl:text-[20px]"
          >
            <span>{t(place)}</span>
            <span className="text-[#8C331B] font-cofo-medium whitespace-nowrap my-auto text-[12px] xl:text-[20px]">
              {t(distance)}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center lg:hidden mt-6  ">
          <InViewWrapper >
          <img loading="lazy" src={hotel} alt="hotel" className="w-full pb" />
        </InViewWrapper>
      </div>
      <div className="lg:mt-auto mt-[42px]">

      <h2
        className={cn(
          "text-[#8C331B] text-[24px] uppercase xl:text-[40px] 2xl:w-[347px] leading-[100%] text-center xl:text-left ",
          {
            "": isEng,
            "": !isEng
          }
        )}
        >
        {t("about.whereWeAre.places.heading")}
      </h2>
      <ul className="grid lg:mt-[42px] text-left uppercase lg:gap-y-[17px] mt-[26px] gap-y-[6px]">
        {places.map(([place, distance], index) => (
          <li
          key={index}
          className="flex justify-between text-sm xl:text-[20px] text-[12px]"
          >
            <span>{t(place)}</span>
            <span className="text-[#8C331B] font-cofo-medium whitespace-nowrap text-[12px] xl:text-[20px]">
              {t(distance)}
            </span>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
};
