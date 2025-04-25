import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { sectionAbout } from "../../store/exportsImg";
import { useCustomWidth } from "../Hooks/useCustomWidth";
import cn from "classnames";
import "./story-section-custom.css";
import { useIsEnglish } from "../Hooks/useIsEnglish";
export const StorySection = () => {
  const { t } = useTranslation();

  const isEng = useIsEnglish();
  const isCustomWidth = useCustomWidth(1500, 1700);
  const isCustomMobile = useCustomWidth(390, 414);
  const isCustomSecondaryMobile = useCustomWidth(415, 440);
  const isCustomUltraHD = useCustomWidth(1950, 3000);
  const wrd = t("about.about.title.0").split("-");
  return (
    <section className="flex justify-center items-center flex-col w-full ">
      <div className="fluid-container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 lg:grid-cols-[74.32%_25.68%] items-center justify-center w-full max-w-[89.58%]">
        <div
          className={`border-b  border-[#C7C7C7] justify-end flex flex-col
         pt-[50px] sm:pt-[60px] md:pt-[100px] 2xl:pt-[130px]  2xl:h-[20vw] p-4 lg:pb-0 
         ${isCustomUltraHD ? "2xl:pe-[1.5vw]" : "2xl:pe-[1.2vw]"}
          text-center lg:text-left ${
            isCustomWidth ? "xl:h-[300px]" : "xl:h-[280px]"
          }`}
        >
          <h1
            className={cn(
              `text-[8.53vw]  md:text-[48px] lg:text-[60px]  2xl:text-[5.208vw] font-normal
                    leading-[81%]   tracking-[-0.07em] uppercase text-[#242425] `,
              {
                "hidden lg:block": isEng,
                "xl:text-[80px]": isCustomWidth,
                "xl:text-[70px]": !isCustomWidth,
              }
            )}
          >
            {t("about.about.title.0")}
          </h1>
          <div className="flex flex-col lg:items-end  items-center">
            <div
              className={cn(
                "flex flex-col items-center lg:items-start text-xs uppercase  mb-5 ",
                isEng
                  ? "2xl:translate-x-[8vw] xl:translate-x-[8.1vw] lg:translate-x-1/8"
                  : ""
              )}
            >
              <h1
                className={cn(
                  "text-[8.53vw] w-[110%] md:text-[48px] lg:text-[60px] leading-[81%] tracking-[-0.07em] 2xl:text-[5.208vw] ",
                  {
                    "xl:text-[79.5px]": isCustomWidth,
                    "block whitespace-nowrap": !isEng,
                    "xl:text-[65.4px] 2xl:self-auto xl:self-end":
                      !isCustomWidth,
                  }
                )}
              >
                <span
                  className={`tracking-[-0.07em] lg:hidden ${
                    isEng ? "inline" : "block"
                  }`}
                >
                  <span className={`${isEng ? "inline" : "hidden"}`}>

                  {wrd[0] + " "}
                  </span>

                  {t("about.about.title.1")
                    .split(" ")
                    .map((line, index) => (
                      <span key={index}>
                        {line + " "}
                        <br className={`${isEng ? "hidden" : "block"}`} />
                      </span>
                    ))}
                </span>
                <span className={`hidden lg:block `}>
                  {t("about.about.title.1")}
                </span>
              </h1>

              <p
                className={`w-[90%] block 2xl:text-[1.042vw] lg:text-[18px] md:pt-4 pt-6 tracking-[-0.01em]  lg:pt-5  text-[3.2vw] leading-[120%] ${
                  isCustomWidth ? "xl:text-[1.25vw]" : "xl:text-[1.13vw]"
                }`}
              >
                {t("about.about.desc.0")}
                <span className={`${isEng ? "lg:hidden" : "hidden"}`}>
                  {t("about.about.desc.1")}
                </span>
              </p>
              <p
                className={`w-full block 2xl:text-[1.042vw]  lg:text-[18px] text-[3.2vw] tracking-[-0.01em]  leading-[120%] 
                  ${isEng ? "hidden lg:block" : ""}
                  ${isCustomWidth ? "xl:text-[1.25vw]" : "xl:text-[1.13vw]"}`}
              >
                {t("about.about.desc.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-s border-b border-[#C7C7C7] h-full"></div>

        <div className=" flex justify-center items-center w-full border-[#C7C7C7] border-b md:p-4 p-3">
          <InViewWrapper>
            <img
              loading="lazy"
              src={sectionAbout}
              alt="Reception"
              className={`w-full 2xl:max-h-[28.281vw]  max-h-[36.27vw] object-cover object-[0%_35%] ${
                isCustomWidth ? "xl:max-h-[450px]" : "xl:max-h-[380px]"
              }`}
            />
          </InViewWrapper>
        </div>

        <div
          className="lg:border-s  border-[#C7C7C7] flex flex-col h-full text-xs sm:text-sm 
        md:text-base  2xl:text-2xl font-normal tracking-[-0.01em] text-center lg:text-left"
        >
          <p
            className={`text-[3.2vw] sm:text-sm md:text-[14px] xl:px-[8px_4px] xl:text-[1.09vw]
            2xl:text-[1.042vw] text-[#252526] p-[15px] pb-[20px] pt-[26px] lg:pt-[18px] 2xl:px-[22px_17px] 
            md:px-3 uppercase font-normal leading-[120%]
            ${isEng ? "xl:w-[102%] w-[99%]" : ""}
            `}
          >
            {t("about.about.photoDesc.0")}
            <span className="font-cofo-medium text-[#8C331B]">
              {t("about.about.year")}
            </span>
            {t("about.about.photoDesc.1")}
          </p>
          <div className="flex border-y border-[#C7C7C7] flex-col mt-auto">
            <p
              className={` custom-md-font p-[15px] pb-[20px]  2xl:px-[24px_14px] xl:pt-[20px]  xl:px-[8px_0px]  xl:text-[1.09vw]
              ${isCustomMobile ? "px-[18px]" : ""}
              ${isEng ? "2xl:w-[95%] w-[90%] mx-auto" : ""}
              ${isCustomSecondaryMobile ? "px-[18px] " : ""}
               text-[3.2vw] sm:text-sm md:text-[14px]  pt-[26px]   2xl:text-[1.042vw] mt-auto leading-[120%] tracking-[-0.01em] uppercase text-[#8C331B] `}
            >
              {t("about.about.photoDesc.2")}
            </p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2  border-[#C7C7C7] w-full h-[43px] sm:h-[40px] md:h-[60px] lg:h-[80px] 2xl:h-[100px]"></div>
      </div>
    </section>
  );
};
