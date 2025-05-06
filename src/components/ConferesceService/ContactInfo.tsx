import { useTranslation } from "react-i18next";
import { memo } from "react";

export const ContactInfo = memo(() => {
  const { t } = useTranslation();
  
  return (
    <div className="  xl:ps-0 2xl:pb-[49px] xl:pb-[30px] lg:pb-[20px] self-start flex flex-col lg:mt-auto mt-[34px] ">
      <h1 className="2xl:text-[1.05vw] tracking-[-0.05em] text-[14px] sm:text-[16px] lg:text-[14px] 2xl:leading-[20px] xl:text-[18px] text-[#8C331B] uppercase font-cofo-medium">
        {t("conferenceService.about.contact")}
      </h1>
      <ul className="xl:gap-y-[9px] gap-y-1 2xl:pt-[21px] pt-[11px]">
        <li className="uppercase text-[#252526] 2xl:text-[1.05vw] text-[3.2vw] sm:text-[14px] lg:text-[14px] xl:text-[18px]">
          <a href="tel:+380932423160" className="hover:underline">+ 38 (093) 242 31 60</a>
        </li>
        <li className="uppercase text-[#252526] 2xl:text-[1.05vw] xl:text-[18px] text-[3.2vw] sm:text-[14px] lg:text-[14px]">
          <a href="tel:+380933483112" className="hover:underline">+ 38 (093) 348 31 12</a>
        </li>
      </ul>
      <p className="font-cofo-medium uppercase text-[#252526] 2xl:text-[1.05vw] text-[3.2vw] sm:text-[14px] lg:text-[14px] xl:text-[18px] 2xl:pt-[21px] pt-[11px]">
        <a href="mailto:info@eurohotel.lviv.ua" className="hover:underline">info@eurohotel.lviv.ua</a>
      </p>
    </div>
  );
}); 