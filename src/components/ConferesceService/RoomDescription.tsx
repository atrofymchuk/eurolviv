import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ContactInfo } from "@/components/ConferesceService/ContactInfo";
import { useCustomWidth } from "@/hooks/useCustomWidth";
import { useIsEnglish } from "@/hooks/useIsEnglish";
import { ViewMenuButton } from "@/components/Buttons/ViewMenu";

type RoomDescriptionProps = {
  pOne: string;
  pTwo: string;
  isOnTop: boolean;
  pMobile: string;
  index: number;
};

export const RoomDescription = memo(
  ({ pOne, pTwo, pMobile, isOnTop, index }: RoomDescriptionProps) => {
    const { t } = useTranslation();
    const isEng = useIsEnglish();
    const isMobile = useCustomWidth(330, 600);
    const isMobileWider = useCustomWidth(400, 600);
    return (
      <div className="2xl:pt-[42px] xl:pt-[30px] lg:pt-[30px]   pt-[52px] flex flex-col h-full justify-between">
        <div className="flex flex-col gap-[24px]">
          <p
            className={`2xl:text-[1.05vw] text-[3.2vw] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[1.05vw] leading-[120.1%] 2xl:tracking-[-0.04em]  h-fit lg:text-[#8C331B] \
              ${isEng ? "" : " 2xl:w-auto"}
              ${!isEng&&isMobile && index===1 ? "w-[94%]" :""}
              ${!isEng&&isMobile && index===2 ? "w-[105%]" :""}
              ${!isEng && isOnTop ? "2xl:w-[95%]! xl:w-[90%]!" : ""}
              ${!isEng && !isOnTop ? "xl:w-[95%] 2xl:w-[100%]" : ""}
              ${isEng && isOnTop ? "2xl:w-[90%]! xl:w-[88%]!" : ""}
              ${isEng && !isOnTop ? "2xl:w-[101%]! xl:w-[96%]!" : ""}
                ${isEng && isMobile && index===1 ? "w-[95.5%]" :""}
                ${isEng && isMobileWider && index===1 ? "w-[94.5%]!" :""}
                ${isEng && isMobile && index===2 ? "w-[102%]" :""}
          text-[#252526]  uppercase 
            `}
          >
            {isMobile ? t(pMobile) : t(pOne)}
          </p>

          <p
            className={`2xl:text-[1.05vw] text-[3.2vw] sm:text-[12px]  md:text-[12px] lg:text-[12px] xl:text-[1.05vw] leading-[120.1%] 2xl:pb-3 
          tracking-[-0.04em]  text-[#444444] h-fit uppercase lg:flex hidden
          ${isEng ? "" : " 2xl:w-auto"}
          ${isOnTop && !isEng ? "xl:w-[85%] 2xl:w-auto" : ""}
          ${!isOnTop && isEng ? "2xl:w-[100%] xl:w-[88%]" : ""}
          ${isOnTop && isEng ? "2xl:w-[100%] xl:w-[88%]" : ""}
            `}
          >
            {t(pTwo)}
          </p>
        </div>

        <div className="flex-1 flex items-center">
          <ViewMenuButton
            onClick={() => {
              const menuElement = document.getElementById("menu");
              if (menuElement) {
                const width = window.innerWidth;
                let headerHeight = 100;
                
                if (width >= 1536) { 
                  headerHeight = width * 0.0693; 
                } else if (width >= 1024) { 
                  headerHeight = width * 0.0908; 
                } else {
                  headerHeight = width * 0.2533; 
                }
                
                const offset = 20;
                const elementPosition = menuElement.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({
                  top: elementPosition - headerHeight - offset,
                  behavior: "smooth"
                });
              }
            }}
            className={`text-[14px] 2xl:text-[0.74vw] hidden lg:flex 2xl:w-[10.6vw] 2xl:h-[2.3vw] xl:h-[3vw] lg:h-[3.5vw] items-center justify-center`}
          >
            {t("buttons.conferenceMenu")}
          </ViewMenuButton>
        </div>

        <div className="lg:mt-2">
          <ContactInfo />
        </div>
      </div>
    );
  }
);
