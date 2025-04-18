import { InViewWrapper } from "../utils/InViewWrapper";
import { headerHome, headerHomeMobile } from "../../store/exportsImg";
import { HeaderBookingForm } from "../common/Form/HeaderBookingForm";
import { RoofServiceMobile } from "./RoofServiceMobile";
import { useTranslation } from "react-i18next";
export const HeaderHome = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="w-full relative 2xl:max-h-[60.99vw] overflow-hidden">
        <InViewWrapper>
          <img loading="lazy"
            src={headerHome}
            alt="preview"
            className="object-cover object-[46%_0%] w-full 2xl:h-[62.5vw] lg:h-[900px]  md:h-[650px] h-[125.07vw] hidden md:block"
          />
          <img loading="lazy"
            src={headerHomeMobile}
            alt="preview"
            className="object-cover object-[46%_0%] w-full 2xl:h-[62.5vw] lg:h-[900px]  md:h-[650px] h-[125.07vw] md:hidden"
          />
        </InViewWrapper>
        

        <div className="absolute inset-0 flex flex-col  items-center lg:justify-center justify-end text-center text-white z-0 mb-[32px] 2xl:mt-[5vw] xl:mt-[13vw] lg:mb-0">
          <h4 className=" uppercase  font-cofo-medium underline text-[2.67vw] decoration-transparent 2xl:text-[0.94vw] xl:text-[1.41vw] ">
            {t("global.createdFor")}
            <span className="normal-case font-blessed  block text-center text-[3.47vw] xl:text-[2.02vw] xl:inline">
              {t("global.whereTo")}
            </span>
          </h4>
          <h1 className=" xl:text-[17vw] uppercase text-[12.8vw] font-normal z-0  2xl:text-[15.05vw]  leading-[81%] tracking-[-0.1em] text-center underline decoration-transparent ">
            {t("global.eurohotel")}
            
          </h1>
          <p className="font-cofo uppercase 2xl:text-[0.94vw] lg:leading-[22px]  2xl:pt-[1.09vw] xl:mt-[0.47vw] pt-[30px]   text-[14px] leading-[17.5px] hidden md:block ">
            {t("home.header.description.0")}
            <br />
            {t("home.header.description.1")}
          </p>
          <HeaderBookingForm />
        </div>
      </div>
      <RoofServiceMobile />
    </div>
  );
};
