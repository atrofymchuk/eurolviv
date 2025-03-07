import { Link } from "react-router-dom";

import { restaurant, karaoke, terasseHome } from "../../store/exportsImg";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";
import ruffLogo from "../../assets/icons/ruffLogo.svg";
export const RoofService = () => {
  const { t } = useTranslation();

  const suggestion = [
    {
      img: restaurant,
      title: t("home.roofService.restaurant.title"),
      titleDesc: t("home.roofService.restaurant.titleDesc"),
      desc: t("home.roofService.restaurant.desc"),
      url: "/restaurant",
    },
    {
      img: karaoke,
      title: t("home.roofService.karaoke.title"),
      titleDesc: t("home.roofService.karaoke.titleDesc"),
      desc: t("home.roofService.karaoke.desc"),
      url: "/restaurant",
    },
    {
      img: terasseHome,
      title: t("home.roofService.terrace.title"),
      titleDesc: t("home.roofService.terrace.titleDesc"),
      desc: t("home.roofService.terrace.desc"),
      url: "/terrase",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <div className="grid w-full lg:grid-cols-2 grid-cols-1">
        {suggestion.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col bg-[#252526] ${
              index === 2
                ? "lg:col-span-2 md:h-[1600px] h-[873px]"
                : "md:h-[1173px] h-[873px]"
            }`}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252526] to-transparent"></div>
              <img
                src={item.img}
                alt={item.url}
                className="w-full h-full object-cover"
              />
            </div>

            {index === 2 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[91%] border-x border-[#AEAEAE3D] pointer-events-none"></div>
            )}

            <div
              className={`absolute inset-0 flex flex-col items-center text-center mt-[138px] text-white z-10 p-4 ${
                index === 2 ? "justify-center" : "justify-start"
              }`}
            >
              <div className="flex flex-col items-center space-y-[29px]">
                <div className="flex justify-center w-full">
                  <InViewWrapper>
                    <img src={ruffLogo} alt="" className="w-[135px] h-[18px]" />
                  </InViewWrapper>
                </div>
                <h1
                  className={`${
                    index === 2
                      ? "lg:text-[198px] max-w-[900px] text-[120px] md:text-[100px] sm:text-[80px] "
                      : "lg:text-[100px] max-w-[722px] text-[90px] md:text-[70px] sm:text-[50px] "
                  } 
  text-[32px] text-center uppercase leading-[104%] tracking-[-5%] 
      w-full lg:leading-[81%]`}
                >
                  {item.title}
                </h1>

                <p className="uppercase font-semibold lg:text-[20px] text-[14px] lg:leading-[21px] leading-[12px] lg:pt-[19px]">
                  {item.titleDesc}
                </p>
              </div>

              <div
                className={`flex flex-col items-center space-y-[20px] ${
                  index === 2 ? "mt-10" : "mt-auto pb-14"
                }`}
              >
                <p className="uppercase lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] lg:leading-[22px] max-w-[232px] lg:max-w-full leading-[14px] lg:pt-[38px] pt-[19px] lg:w-[380px]">
                  {item.desc}
                </p>
                <Link
                  to={item.url}
                  className="uppercase lg:py-[12px] lg:mt-[20px] lg:px-[20px] rounded-full font-semibold text-[#252526] bg-[#FFFFFF] hover:bg-[#252526] hover:text-[#FFFFFF] lg:leading-[20px] lg:text-[16px] text-[12px] leading-[15px] py-[12px] px-[17px]"
                >
                  {t("buttons.details")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
