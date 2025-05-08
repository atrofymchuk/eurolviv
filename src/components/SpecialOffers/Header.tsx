import { useTranslation } from "react-i18next";
import { useIsEnglish } from "@/hooks/useIsEnglish";
export const Header = () => {
  const { t } = useTranslation();
  const isEng = useIsEnglish();

  return (
    <div className="flex items-center justify-center bg-[#252526] 2xl:pt-[6.93vw] xl:pt-[7.97vw] lg:pt-[9.18vw]  pt-[25.33vw]    ">
      <div className="grid lg:grid-cols-[33.31%_33.43%_33.26%] grid-cols-1 text-[#EDE8E5] text-center lg:text-start w-[79.7%] lg:w-[89.58%] mx-auto ">
        
        <div className="   border-x lg:border-e-0 border-[#515151] flex flex-col
         items-center lg:items-start text-center lg:text-left md:py-20 py-[53px_49px] px-[5.33vw] 2xl:pt-[7.5vw] xl:pt-[7.5vw] lg:pt-[86px] 2xl:pl-[1vw] xl:pl-[1.5vw] lg:pl-[1.56vw] ">
          <h1
            className={`uppercase  text-white lg:leading-[91%] leading-[100%] tracking-[-0.1em]
               ${isEng ? "2xl:ps-[7px] xl:ps-[0.4vw]" : "ps-[1.6vw] xl:ps-[0.3vw]"}
            text-[12.8vw] md:text-[64px] lg:text-[10.36vw] xl:text-[10.1vw] 2xl:text-[10.3vw] z-1`}
          >
            {t("specialOffers.title")}
          </h1>
          <h1
            className={`uppercase  text-white lg:leading-[91%] leading-[82%] tracking-[-0.1em] lg:hidden flex 
            text-[12.8vw]  md:text-[64px]`}
          >
            {t("specialOffers.desc2")}
          </h1>
          <p className={`relative uppercase text-[#BDBDC0] 2xl:ps-2 xl:ps-1.5 text-[3.2vw] sm:text-[14px] md:text-[16px] 2xl:text-[0.94vw] w-[100%]
           lg:text-[12px] xl:text-[1.02vw] leading-[130%] 2xl:pt-[1.98vw] xl:pt-[2.33vw]  lg:pt-[1.32vw] pt-[20px]  md:w-[65%] 
           ${isEng ? "2xl:w-[100%] xl:w-[110%] w-[110%]" : "2xl:w-[93%] xl:w-[105%] "} lg:w-[115%]`}>
            {t("specialOffers.desc")} 
          </p>
        </div>

        <div className={`border-x border-[#515151]  2xl:pt-[16.02vw] 2xl:ps-[0.9vw]  
        lg:flex hidden flex-col lg:justify-center lg:pt-[17vw] 2xl:pb-[5.26vw] xl:pb-[101px] lg:pb-[90px]  xl:pt-[15.88vw] `}>
          <h1
            className={`uppercase  text-white leading-[91%] tracking-[-0.1em] lg:flex hidden ${isEng ? "2xl:ps-[0.6vw] xl:ps-[1.5vw]" : "2xl:ps-[2.8vw] xl:ps-[3.5vw]"}
            xl:text-[10.36vw] 2xl:text-[10.3vw]  lg:ps-[3.73vw] lg:text-[10.16vw] `}
          >
            {t("specialOffers.desc2")}
          </h1>
        </div>

        <div className="border-e border-[#515151]  items-center hidden lg:flex"></div>

        <div className=" border-[#515151] flex items-center lg:hidden"></div>
      </div>
    </div>
  );
};
