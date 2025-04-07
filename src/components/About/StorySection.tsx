import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { sectionAbout } from "../../store/exportsImg";

import cn from "classnames";
export const StorySection = () => {
  const { t,i18n } = useTranslation();

  const isEng = i18n.language === "en";

  return (
    <section className="flex justify-center items-center flex-col w-full ">
      <div className="fluid-container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 lg:grid-cols-[74.42%_25.58%] items-center justify-center w-full max-w-[89.58%]">
        <div
          className="border-b  border-[#C7C7C7]
         pt-[50px] sm:pt-[60px] md:pt-[100px] lg:pt-[130px] lg:h-[384px] p-4 lg:pb-0 
          text-center lg:text-left"
        >
          <h1
            className="text-[32px]  md:text-[48px] lg:text-[60px]  2xl:text-[100px] font-normal
           leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[72px] 2xl:leading-[81px] tracking-[-0.07em] uppercase text-[#242425]"
          >
            {t("about.about.title.0")}
          </h1>
          <div className="flex flex-col lg:items-end  items-center">
            <div
              className={cn(
                "flex flex-col items-center lg:items-start text-xs uppercase  mb-5 ",
                isEng ? "lg:translate-x-1/8" : ""
              )}
            >
              <h1
                className={cn(
                  "text-[32px]  md:text-[48px] lg:text-[60px] leading-[81%] tracking-[-0.07em] 2xl:text-[100px] whitespace-nowrap",
                 
                )}
              >
                {t("about.about.title.1")}
              </h1>

              <p className="w-full block xl:text-[20px] lg:text-[18px] md:pt-4 pt-6 lg:pt-5 text-[12px] leading-[120%]">
                {t("about.about.desc.0")}
              </p>
              <p className="w-full block xl:text-[20px] lg:text-[18px] text-[12px] leading-[120%]">
                {t("about.about.desc.1")}
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-s border-b border-[#C7C7C7] h-full"></div>

        <div className=" flex justify-center items-center w-full border-[#C7C7C7] border-b md:p-4 p-3">
          <InViewWrapper>
            <img
              src={sectionAbout}
              alt="Reception"
              className="w-full md:max-h-[543px] max-h-[133px] object-cover object-[0%_35%] "
            />
          </InViewWrapper>
        </div>

        <div className="lg:border-s  border-[#C7C7C7] flex flex-col h-full text-xs sm:text-sm md:text-base  2xl:text-2xl font-normal tracking-[-0.01em] text-center lg:text-left">
          <p className="text-xs sm:text-sm md:text-[14px] tracking-[-0.01]  xl:text-[18px] 2xl:text-[20px] text-[#252526] p-[15px] pt-[26px]  md:px-3 uppercase font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px]">
            {t("about.about.photoDesc.0")}
            <span className="font-cofo-medium text-[#8C331B]">
              {t("about.about.year")}
            </span>
            {t("about.about.photoDesc.1")}
          </p>

          <p className="border-t md:font-cofo-medium md:font-[600] p-[15px] sm:p-6  md:px-3 lg:p-3 border-[#C7C7C7] text-xs sm:text-sm md:text-[14px]  pt-[26px]  xl:text-[18px] 2xl:text-[20px] mt-auto  leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px] tracking-[-0.001em] uppercase text-[#8C331B] border-b">
            {t("about.about.photoDesc.2")}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2  border-[#C7C7C7] w-full h-[43px] sm:h-[40px] md:h-[60px] lg:h-[80px] 2xl:h-[100px]"></div>
      </div>
    </section>
  );
};
