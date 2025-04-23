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
    <div className="p-4 ps-[17px] xl:p-7 2xl:pt-[2.292vw] pt-[31px] border-b border-t lg:border-t-0 border-[#c7c7c7] flex flex-col min-h-full justify-between">
      <h2 className="text-[#8C331B] text-[6.4vw] xl:text-[2vw] 2xl:text-[2.083vw] tracking-[-0.04em] leading-[100%] text-center xl:text-left uppercase">
        {t("about.whereWeAre.whatIsClose")}
      </h2>
      <ul className="grid mt-6 text-left uppercase 2xl:mt-[2.188vw] gap-y-[6px] xl:gap-y-[0.8vw] 2xl:gap-y-[0.885vw]">
        {infrastructure.map(([place, distance], index) => (
          <li
            key={index}
            className="flex justify-between text-[3.2vw]  xl:text-[1vw] 2xl:text-[1.042vw]"
          >
            <span className={`${isEng ? "2xl:w-[68%] xl:w-[67%] w-[85%] lg:w-auto" : ""}`}>
              {t(place)}
            </span>
            <div className="text-[#8C331B] font-cofo-medium xl:text-[1vw] my-auto whitespace-nowrap   text-[3.2vw] 2xl:text-[1.042vw]  ">
              {t(distance)}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center lg:hidden mt-6  ">
        <InViewWrapper>
          <img loading="lazy" src={hotel} alt="hotel" className="w-full pb" />
        </InViewWrapper>
      </div>
      <div className="lg:mt-auto mt-[42px]">
        <h2
          className={cn(
            "text-[#8C331B] text-[6.4vw]  uppercase xl:text-[2vw] xl:w-[45%] 2xl:text-[2.083vw] 2xl:w-[18.068vw] leading-[100%] text-center xl:text-left ",
            {
              "w-[60%] mx-auto lg:mx-0 lg:w-auto": isEng,
              "": !isEng,
            }
          )}
        >
          {t("about.whereWeAre.places.heading")}
        </h2>
        <ul className="grid 2xl:mt-[2.188vw] text-left uppercase 2xl:gap-y-[0.885vw] mt-[26px] xl:gap-y-[0.8vw] gap-y-[6px]">
          {places.map(([place, distance], index) => (
            <li
              key={index}
              className="flex justify-between text-[3.2vw] 2xl:text-[1.042vw] xl:text-[1vw]  "
            >
              <span className={`${index === 1 ? "w-[60%]" : ""} ${isEng && index==0? "w-[60%] lg:w-auto" : ""}`}>
                {t(place)}
              </span>
              <span className="text-[#8C331B] font-cofo-medium whitespace-nowrap  xl:text-[1vw] text-[3.2vw] 2xl:text-[1.042vw] my-auto">
                {t(distance)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
