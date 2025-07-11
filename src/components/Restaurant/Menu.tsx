import { MenuPC } from "@/components/Restaurant/MenuPC";
import { MenuSmallWidth } from "@/components/Restaurant/MenuSmallWidth";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { useCustomWidth } from "@/hooks/useCustomWidth";
import { Link } from "react-router-dom";
import { links } from "@/Constants/Links";

export const Menu = () => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const isCustomWidth = useCustomWidth(1500, 1700);
  return (
    <div className="flex flex-col items-center justify-center md:w-[93.16%] w-[89.067%] mx-auto md:border-x border-[#B3B3B3] border-t ">
      <div>
         <div
          className={cn(
            `grid  md:h-full h-[521px] grid-cols-1`,
            isEng
              ? "md:grid-cols-[35.1%_30.1%_35.6%]"
              : "md:grid-cols-[35.7%_28.9%_35.6%]"
          )}
        >
          <div className="lg:w-full md:flex  hidden lg:justify-end   "></div>

          <div className="2xl:h-[375px] xl:h-[305px] lg:h-[265px] flex  border-x   flex-col  border-[#B3B3B3] items-center lg:justify-end text-center lg:pb-[70px] md:pb-[50px] pb-[10px] pt-[55px] lg:pt-0 ">
            <span className="font-blessed block text-center text-[16px] xl:text-[36px] lg:text-[32px] lg:leading-[25.2px] leading-[94%] xl:inline lg:pb-[19px]">
              {t("restaurant.menu.menu")}
            </span>
            <h1
              className={cn(
                `uppercase 2xl:text-[3.3373vw] lg:text-[44px]  leading-[94%] text-[8.53vw] mt-[9px]  tracking-[-0.075em] md:whitespace-nowrap`,
                {
                  "xl:text-[51px]": isCustomWidth,
                  "xl:text-[42px]": !isCustomWidth,
                  "2xl:pe-[3px]": isEng,
                }
              )}
            >
              {t("restaurant.menu.title.0")}
              <br className="hidden lg:block " />
              {t("restaurant.menu.title.1")}
            </h1>
          </div>
          <div className="md:flex hidden"></div>

          <MenuPC className="md:flex hidden " />

          <MenuSmallWidth className="flex md:hidden" />

          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] md:flex hidden  border-x md:border-x-0  border-[#B3B3B3]  lg:justify-end  "></div>
          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] flex  border-x   flex-col  border-[#B3B3B3] text-center  items-center">
            <p className="uppercase text-[#888888] px-5 lg:text-[16px] sm:text-[14px] text-[3.2vw]  lg:leading-[120%] xl:w-[359px] mt-[8px] md:pt-[39px]">
              {t("restaurant.menu.desc")}
            </p>
            <Link
              to={links.menu}
              target="_blank"
              className="font-cofo-medium uppercase 2xl:w-[10.9vw] 2xl:h-[2.4vw] text-[#8C331B] lg:w-[209px] border-[#8C331B]
               border hover:cursor-pointer hover:bg-[#8C331B] hover:text-white rounded-full flex items-center justify-center
               lg:text-[14px] mb-[30px] lg:mb-0 text-[13px] lg:mt-[19px] mt-[24px] lg:py-[10px] w-[171px] h-[40px]"
            >
              {isEng ? t("buttons.restaurantMenu") : t("buttons.viewMenu")}
            </Link>
          </div>
          <div className="2xl:h-[329px] xl:h-[259px] lg:h-[209px] md:flex hidden   border-[#B3B3B3]   "></div>
        </div>
      </div>
    </div>
  );
};
