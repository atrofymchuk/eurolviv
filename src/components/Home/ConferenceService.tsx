import { Link } from "react-router-dom";
import { useRoomStore } from "../../store/useRoomsStore";
import { HallList } from "./HallList";
import { useTranslation } from "react-i18next";
import { ConferenceServiceSlider } from "./ConferenceServiceSlider";
import cn from "classnames";
export const ConferenceService = () => {
  const { t, i18n } = useTranslation();
  const { halls } = useRoomStore();

  const isEng = i18n.language === "en";

  return (
    <div className="flex flex-col items-center relative  bg-[#EDE8E5]  w-full overflow-y-hidden overflow-x-hidden ">
      <div className="absolute grid grid-cols-[89.07%] h-full w-full justify-center md:grid-cols-[29.69%_30.16%_30.4%] z-0 overflow-y-hidden  ">
        <div className=" border-s border-[#B3B3B3]   2xl:h-[1102px] xl:h-[820px] lg:h-[750px] md:h-[600px]"></div>
        <div className=" border-s md:border-x border-[#B3B3B3]  h-[1500px]"></div>
        <div className=" border-e border-[#B3B3B3]  2xl:h-[1102px] xl:h-[850px] lg:h-[750px] md:h-[600px]"></div>
      </div>

      
      <div className="w-[89.7%]">
        <div className="grid grid-cols-1 md:grid-cols-[29.69%_30.16%_29.74%]   w-full justify-center">
          <div className=" "></div>
          <div className="text-center flex flex-col  items-center justify-center  2xl:mt-33 mt-[76px]">
            <p
              className="mt-[10px] md:mt-0 uppercase text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
            2xl:text-[24px] text-[#252526] tracking-[-0.05em] font-cofo-medium"
            >
              {t("home.conferenceService.heading")}
            </p>
            <h1
              className={cn(
                `uppercase text-[12.8vw] md:text-[8.23vw] lg:text-[8.96vw] xl:text-[9.21vw] text-center 
             text-[#252526] leading-[81%] tracking-[-0.07em] md:whitespace-nowrap md:mb-0 mt-[13px]   mb-[23px] z-1`,
                {
                  "2xl:text-[8.85vw]": isEng,
                  "2xl:text-[9.6vw]": !isEng,
                }
              )}
            >
              {t("home.conferenceService.title")}
            </h1>
            <p
              className="uppercase mb-[30px] xl:mb-6 text-[14px] md:text-[16px] lg:text-[18px] xl:mt-[33px] lg:mt-[20px] xl:text-[1.2vw]  2xl:text-[1.1vw] text-[#252526] leading-[120%]
             2xl:w-[640px] xl:w-[540px] lg:w-[440px] md:w-[380px] w-[300px] z-2 2xl:mt-[62px]"
            >
              {t("home.conferenceService.desc.0")}
              <br className="hidden md:block" />
              {t("home.conferenceService.desc.1")}
            </p>
            <div className=" text-center flex items-center justify-center xl:mb-[48px] lg:mb-[32px] md:mb-[24px]">
              <Link
                to="/conference-service"
                className={`w-fit md:py-[10px] md:px-[16.5px] bg-[#8c331b] block px-4.25 py-2.5 text-[12px]  xl:text-[16px] hover:bg-[white] text-white hover:text-[#8C331B] border-[#8C331B] border rounded-full uppercase z-1 font-cofo-medium ${
                  isEng ? "lg:w-[165px]" : ""
                }`}
              >
                {t("buttons.viewHalls")}
              </Link>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-full hidden md:block">
          <HallList halls={halls} isEng={isEng} />
        </div>
      </div>
      <div className="h-full block md:hidden max-w-screen mt-[46px] mb-[75px]">
        <ConferenceServiceSlider halls={halls} />
      </div>
    </div>
  );
};
