import { FaInstagram } from "react-icons/fa";
import MapImg from "./MapImg";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";

export const OurContactsWithMap = () => {
  const { t } = useTranslation();
  return (
    <div className="xl:w-full border-[#C7C7C7] md:border-b  text-center md:text-start  md:px-5">
      <div className="grid md:grid-cols-2    lg:pt-[68px]   2xl:w-full md:space-y-5">
        <div className="xl:ms-[38px] lg:ms-[20px] md:block pt-4.5 lg:pt-0 items-center flex flex-col md:border-b-0 md:border-e-0 border-b border-e border-[#C7C7C7]  ">
          <h4 className="text-[12px] md:text-[14px] lg:text-[18px] font-semibold text-[#6B6B6B] font-cofo uppercase">
            {t("contacts.info.reception")}
          </h4>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#999999] font-cofo uppercase lg:mb-[21px] lg:mt-[7px] lg:leading-[22px]">
            {t("contacts.info.receptionPhone")}
          </p>
          <div className="lg:space-y-4 space-y-2">
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo leading-[15px] lg:leading-[22px]">
              +38 (073) 242-40-02
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo leading-[15px] lg:leading-[22px]">
              +38 (093) 242-40-02
            </p>
          </div>
          <p className="text-[12px] md:text-[12px] lg:text-[14px] md:pt-[10px] pt-[15px] pb-[25px] lg:pb-0 font-cofo uppercase font-semibold lg:pt-[21px] md:leading-[25px] leading-[-1.4]">
            reception@eurohotel.lviv.ua
          </p>
        </div>

        <div className="xl:ms-[38px] lg:ms-[20px] lg:pt-0 pt-4.5 md:block items-center flex flex-col md:border-b-0 md:border-e-0 border-b border-e border-[#C7C7C7] md:order-2 order-3 ">
          <h4 className="font-cofo font-semibold text-[12px] md:text-[16px] lg:text-[18px] uppercase text-[#6B6B6B] w-[216px] lg:w-full">
            {t("contacts.info.booking")}
          </h4>
          <p className="uppercase text-[#999999] text-cofo text-[12px] md:text-[14px] lg:text-[16px] mt-2 mb-[21px]">
            {t("contacts.info.bookingDesc")}
          </p>
          <div className="lg:space-y-4 space-y-2">
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo   leading-[15px] lg:leading-[22px]">
              +38 (073) 242-40-02
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-cofo  leading-[15px] lg:leading-[22px]">
              +38 (093) 242-40-02
            </p>
          </div>
          <p className="text-[12px] lg:text-[14px] pt-[15px] font-cofo uppercase pb-[25px] lg:pb-0 font-semibold lg:pt-[21px] lg:leading-[25px] leading-[12px]">
            info@eurohotel.lviv.ua
          </p>
        </div>

        <div className="xl:ms-[37px] lg:ms-[20px] pt-4.5 lg:pt-0 md:block items-center flex flex-col  md:border-b-0 md:border-e-0 border-b border-e border-[#C7C7C7] md:order-3 order-2 lg:w-fit ">
          <p className="text-[12px] md:text-[14px] lg:text-[18px] uppercase font-semibold  text-[#6B6B6B] font-cofo">
            {t("contacts.info.restaurand/terrase")}
          </p>
          <div className="lg:space-y-4 space-y-2">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-cofo   leading-[15px] lg:leading-[22px]">
              +38 (073) 242-40-02
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-cofo  leading-[15px] lg:leading-[22px]">
              +38 (093) 348-31-14
            </p>
          </div>
          <p className="text-[12px] lg:text-[14px] pt-[15px] font-cofo uppercase font-semibold lg:pt-[21px] lg:leading-[25px] leading-[12px]">
            restaurant@eurohotel.lviv.ua
          </p>
          <div className="hover:cursor-pointer bg-[#8C331B] w-fit rounded-full p-1.5 mt-4 mb-[25px] lg:mb-0">
            <FaInstagram color="white" className="w-[26px] h-[26px]" />
          </div>
        </div>
        <InViewWrapper>
          <MapImg />
        </InViewWrapper>
      </div>
    </div>
  );
};
