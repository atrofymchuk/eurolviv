import "./Advantages.css";

import { advantages } from "../../store/exportsImg";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { BookLink } from "../Buttons/BookLink";

export const Advantages = () => {
  const { t } = useTranslation();
  const {hotelInfo,services} = usePagesInfoStore()


  return (
    <section className="flex justify-center items-center bg-[#A47762]  *:font-cofo">
      <div className="container mx-auto border-x border-[#C29986] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 items-center xl:h-[684px] max-w-[89.58%] gap-0">
        <div className="h-full  flex lg:justify-start sm:justify-center">
          <div className="flex flex-col xl:ps-[21px] ps-[16px] sm:items-center  lg:items-start lg:text-start">
            <h1 className="uppercase text-[32px] xl:text-[48px] tracking-[-0.05em] leading-[100%] md:w-2/3 text-[#FFFFFF] pt-[34px] xl:pt-[86px]">
              {t("about.advantages.title")}
            </h1>
            <ul className="uppercase pt-[29px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] tracking-tighter xl:text-xl space-y-[2px] gap-[6px] lg:gap-[9px]">
              {hotelInfo.map(({ icon, text }, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 lg:self-end "
                >
                  <InViewWrapper>
                    <img className="xl:w-[38px] xl:h-[38px] w-[20px] h-[20px]" src={icon} alt={text} />
                  </InViewWrapper>
                  {t(text)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:hidden flex justify-center py-[32px_73px]  px-[16px] w-full">
          <InViewWrapper>
            <img
              src={advantages}
              alt="advantages"
              className=" h-[311px] w-full"
            />
          </InViewWrapper>
        </div>

        <div className="h-full  w-full lg:border-x  pb-[47px] lg:pb-0 border-[#C29986]">
          <div className="flex flex-col ps-[16px] xl:ps-[45px] sm:items-center lg:items-start">
            <h1 className="uppercase text-[32px]  xl:text-[48px] tracking-[-0.05em] leading-[100%] w-full md:w-2/3 text-[#FFFFFF] md:pt-[18px] xl:pt-[86px] xl:text-left">
              {t("about.advantages.title2")}
            </h1>
            <ul className="uppercase pt-[30px] xl:pt-[52px] text-[#FFFFFF] text-[14px] xl:text-[20px] space-y-[2px] ">
              {services.map(({ icon, text }, index) => (
                <li key={index} className="flex items-center  gap-[6px] lg:gap-[9px]">
                  <InViewWrapper>
                    <img className=" xl:w-[38px] xl:h-[38px] w-[20px] h-[20px] " src={icon} alt={text} />
                  </InViewWrapper>
                  {t(text)}
                </li>
              ))}
            </ul>
              <BookLink className="hidden lg:w-[204px] justify-center lg:flex uppercase bg-[#EDE8E5] text-[#A47762] hover:bg-[#A47762] hover:text-[#EDE8E5]  border border-[#EDE8E5] lg:mt-[25px]" to={"/booking"}>{t("buttons.bookRoom")}</BookLink>
          </div>
        </div>

        <div className="hidden lg:flex  h-full justify-center items-center p-4">
          <InViewWrapper>
            <img
              src={advantages}
              alt="advantages"
              className="w-[95%] h-auto max-w-[400px] xl:max-w-[496px] max-h-[400px] xl:max-h-[509px] object-contain"
            />
          </InViewWrapper>
        </div>
      </div>
    </section>
  );
};
