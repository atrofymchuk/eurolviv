import { Link } from "react-router-dom";
import { useRoomStore } from "../../store/useRoomsStore";

import { HallList } from "./HallList";
import { t } from "i18next";

export const ConferenceService = () => {
  const { halls } = useRoomStore();
  return (
    <div className="flex flex-col items-center relative  bg-[#EDE8E5]  w-full overflow-y-hidden ">
      <div className="w-[89.58%] border-x" >
        <div className="grid grid-cols-1 md:grid-cols-[29.69%_30.16%_29.74%]   w-full justify-center">
          <div className=" "></div>
          <div className="text-center flex flex-col  items-center justify-center  2xl:mt-33 mt-[76px]" >
            <p className="mt-[10px] md:mt-0 uppercase text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] 
            2xl:text-[24px] text-[#252526] tracking-[-5%] font-cofo-medium">
              {t("home.conferenceService.heading")}
            </p>
            <h1
              className="uppercase text-[48px] md:text-[62px] lg:text-[76px] xl:text-[100px]
            2xl:text-[185px] text-[#252526] leading-[81%] tracking-[-7%] md:whitespace-nowrap mt-[13px] xl:mb-[32px] mb-[23px] z-1"
            >
              {t("home.conferenceService.title")}
            </h1>
            <p className="uppercase mb-[30px] xl:mb-6 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#252526] leading-[120%]
             2xl:w-[644px] xl:w-[540px] lg:w-[440px] md:w-[380px] w-[300px] z-2 2xl:mt-[62px]">
              {t("home.conferenceService.desc")}
            </p>
            <div className=" text-center flex items-center justify-center xl:mb-[48px] lg:mb-[32px] md:mb-[24px]">
              <Link
                to="/conference-service"
                className="w-fit md:py-[10px] md:px-[16.5px] bg-[#8c331b] block px-5 py-2   hover:bg-[white] text-white hover:text-[#8C331B] border-[#8C331B] border rounded-full uppercase z-1 font-cofo-medium"
              >
                {t("buttons.viewHalls")}
              </Link>
            </div>
          </div>
          <div className=""></div>
        </div>
        <div className="h-full">
        <HallList halls={halls} />
        </div>
          
      </div>
    </div>
  );
};
