import { useTranslation } from "react-i18next";
import { memo } from "react";

export const ContactInfo = memo(() => {
  const { t } = useTranslation();
  
  return (
    <div className=" lg:ps-[20px] xl:ps-0 lg:pb-[49px] self-start flex flex-col mt-auto">
      <h1 className="2xl:text-[20px] tracking-[-0.05em] text-[14px] sm:text-[16px] lg:text-[14px] 2xl:leading-[20px] xl:text-[18px] text-[#8C331B] uppercase font-cofo-medium">
        {t("conferenceService.about.contact")}
      </h1>
      <ul className="xl:gap-y-[9px] gap-y-1 2xl:pt-[21px] pt-[11px]">
        <li className="uppercase text-[#252526] 2xl:text-[20px] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[18px] ">
          +38 (073) 242 40 02
        </li>
        <li className="uppercase text-[#252526] 2xl:text-[20px] xl:text-[18px] text-[12px] sm:text-[14px] lg:text-[14px] ">
          +38 (093) 242 40 02
        </li>
      </ul>
      <p className="font-cofo-medium uppercase text-[#252526] 2xl:text-[20px] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[18px]  2xl:pt-[21px] pt-[11px]">
        info@eurohotel.lviv.ua
      </p>
    </div>
  );
}); 