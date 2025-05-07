import { useTranslation } from "react-i18next";
import ImageSlider from "@/components/About/Slider";
import { useCustomWidth } from "@/components/hooks/useCustomWidth";
import { useIsEnglish } from "@/components/hooks/useIsEnglish";
export const Mission = () => {
  const { t } = useTranslation();
  const isCustomWidth = useCustomWidth(1500, 1700);
  const isCustomMobile = useCustomWidth(380, 410);
  const isMobile = useCustomWidth(0, 700);
  const isCustomMobileSecondary = useCustomWidth(415, 450);
  const isEng = useIsEnglish();
  return (
    <section className="flex flex-col items-center justify-center bg-white font-cofo ">
      <div className="grid xl:grid-cols-3 items-center  w-full   sm:grid-cols-[1fr]     max-w-[89.58%]">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] pt-[52px] xl:pt-[109px] flex justify-center items-center">
          <div className="flex flex-col text-center items-center">
            <h1 className="uppercase text-[#8C331B] font-cofo-medium text-[12px] font-semibold lg:font-medium md:text-base lg:text-lg 2xl:text-[1.25vw]  px-2">
              {t("about.mission.title")}
            </h1>
            <h1
              className={`uppercase text-[32px] md:text-[48px] 2xl:pt-[11px] xl:pt-[9px] lg:text-[64px] 2xl:text-[5.208vw] pt-[6px]  leading-[91%] 
                md:font-cofo-medium
                tracking-[-0.04em] lg:tracking-[-0.07em] lg:leading-[81%]  px-2 ${
                  isCustomWidth ? "xl:text-[82px]" : "xl:text-[72px]"
                }`}
            >
              {t("about.mission.heading.0")}
            </h1>
            <h1
              className={` uppercase 2xl:pt-[1px] xl:pt-[1px] text-[32px] md:text-[48px] lg:text-[64px] 2xl:text-[5.208vw] leading-[91%]
             tracking-[-0.04em] lg:tracking-[-0.065em] lg:leading-[81%]  px-2 
             md:font-cofo-medium
           ${isCustomMobile ? "w-[96%]" : ""}
           ${isCustomWidth ? "xl:text-[82px]" : "xl:text-[72px]"}`}
            >
              {t("about.mission.heading.1")}
            </h1>
            <p
              className={`uppercase 2xl:w-[41.719vw] lg:w-[80%] mx-auto text-[3.2vw] tracking-[-0.01em]  leading-[126%] md:text-[14px] lg:text-[16px] 
              2xl:text-[0.938vw] lg:pt-[29px] pt-[47px] xl:px-0  ${isEng ? "w-[90%]" : "w-[95%]"}
               ${
                 isCustomWidth
                   ? "xl:text-[14px] xl:w-[621px]"
                   : "xl:text-[14px] xl:w-[620px]"
               }`}
            >
              {t("about.mission.desc.0")}
            </p>
            <p
              className={`uppercase 2xl:w-[40.719vw] mx-auto lg:w-[80%] text-[3.2vw] tracking-[-0.01em] leading-[126%] ${isEng ? "w-[86%]" : "w-[95%]"}
              md:text-[14px] lg:text-[16px] 2xl:text-[0.938vw] pt-5  xl:pb-[20px] lg:pb-3 pb-[37px] xl:px-0 
              ${
                isCustomWidth
                  ? "xl:text-[14px] xl:w-[601px]"
                  : "xl:text-[14px] xl:w-[640px]"
              }`}
            >
              {t("about.mission.desc.1")}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full 2xl:h-[30.208vw] h-fit flex items-center justify-center ">
        <div className="absolute border-[#C7C7C7] border-x h-full  w-[89.58%]"></div>
        <ImageSlider />
      </div>

      <div className="grid xl:grid-cols-3 items-center grid-cols-[1fr] w-full border-collapse max-w-[89.58%]  ">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] flex justify-center items-center py-6 2xl:pt-[2.26vw]">
          <p
            className={`text-[#8C331B] uppercase tracking-[-0.04em] md:w-[400px] lg:w-[500px]  
 text-[3.2vw] md:text-[16px] lg:text-[18px]  2xl:text-[1.042vw] font-cofo-medium leading-[126%] text-center 
          ${!isEng && isCustomMobile ? "w-[75%]" : " "}
          ${!isEng && !isCustomMobile && !isCustomMobileSecondary ? "w-[75%]" : " "}
          ${!isEng && isCustomMobileSecondary ? "w-[75%]" : ""}
          ${
            isCustomWidth
              ? "xl:text-[16.5px]  xl:w-[39%]  "
              : "xl:w-[40%] xl:text-[14px] "
          }
          ${isEng ? "w-[77%]" : "2xl:w-[37%] "}`}
          >
            {isMobile ? (
              t("about.mission.desc2.0")
            ) : (
              <span className="flex flex-col justify-center items-center">
                <br className="hidden lg:block" />
                {t("about.mission.desc2PC.0")}
                <br className="hidden lg:block" />
                <span
                  className={`2xl:px-[2.08vw] xl:px-[1.04vw] ${
                    isEng ? "" : "lg:hidden"
                  }`}
                >
                  {t("about.mission.desc2PC.1")}
                </span>
              </span>
            )}
            <div
              className={`mx-auto inline ${
                isEng ? "2xl:w-[20%] xl:w-[90%] " : ""
              }`}
            ></div>
          </p>
        </div>
      </div>
    </section>
  );
};
