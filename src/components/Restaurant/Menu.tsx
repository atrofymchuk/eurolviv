import { MenuPC } from "./MenuPC";
import { MenuSmallWidth } from "./MenuSmallWidth";
import { useModalStore } from "../../store/useModalStore";
import { useTranslation } from "react-i18next";

export const Menu = () => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  return (
    <div className="flex flex-col items-center justify-center md:w-[93.16%] w-[89.067%] mx-auto border-x border-[#B3B3B3] border-t md:border-t-0">
      <div>
        <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] md:h-full h-[521px] grid-cols-1">
          <div className="lg:w-full md:flex  hidden lg:justify-end border-t border-[#B3B3B3]"></div>

          <div className="2xl:h-[375px] xl:h-[305px] lg:h-[265px] flex  md:border-x md:border-t  flex-col  border-[#B3B3B3] items-center lg:justify-end text-center lg:pb-[70px] md:pb-[50px] pb-[10px] pt-[55px] lg:pt-0 ">
            <span className="font-blessed xl:font-extrabold block text-center text-[16px] xl:text-[36px] lg:text-[32px] lg:leading-[25.2px] leading-[94%] xl:inline lg:pb-[19px]">
              {t("restaurant.menu.menu")}
            </span>
            <h1 className="uppercase 2xl:text-[64px] lg:text-[54px]  leading-[94%] text-[32px] mt-[9px]  tracking-[-7%] md:whitespace-nowrap ">
              {t("restaurant.menu.title.0")} <br />
              {t("restaurant.menu.title.1")}
            </h1>
          </div>
          <div className="md:flex hidden border-t  border-[#B3B3B3] "></div>

          <MenuPC className="md:flex hidden " />

          <MenuSmallWidth className="flex md:hidden" />

          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] md:flex hidden  lg:justify-end  lg:pe-2.25"></div>
          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] flex  md:border-x flex-col  border-[#B3B3B3] text-center  items-center">
            <p className="uppercase text-[#888888] px-5 lg:text-[16px] sm:text-[14px] text-[12px]  lg:leading-[120%] xl:w-[359px]  md:pt-[39px]">
              {t("restaurant.menu.desc")}
            </p>
            <button
              onClick={() => onOpenModal("menu")}
              className="font-cofo-medium uppercase text-[#8C331B] border-[#8C331B] border hover:cursor-pointer hover:bg-[#8C331B] hover:text-white rounded-full
               lg:text-[16px] mb-[30px] lg:mb-0 text-[13px] lg:mt-[19px] mt-[24px] lg:py-[13px] py-[9.25px] px-[14.25px]  lg:px-[17.5px]"
            >
              {t("buttons.viewMenu")}
            </button>
          </div>
          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] md:flex hidden   border-[#B3B3B3]  lg:ps-2.25 "></div>
        </div>
      </div>
    </div>
  );
};
