import { Link } from "react-router-dom";
import { useRoomStore } from "../../store/useRoomsStore";

import { HallList } from "./HallList";
import { t } from "i18next";

export const ConferenceService = () => {
  const { halls } = useRoomStore();
  return (
    <div className="flex flex-col items-center relative justify-center bg-[#EDE8E5]  w-full overflow-y-hidden 2xl:h-[1278px] xl:h-[1000px] lg:h-[900px] md:h-[750px]">
        <div className="absolute grid grid-cols-[89.07%] h-full w-full justify-center md:grid-cols-[29.69%_30.16%_29.74%] z-0 overflow-y-hidden">
          <div className=" border-s border-[#B3B3B3]   2xl:h-[925px] xl:h-[750px] lg:h-[750px] md:h-[600px]"></div>
          <div className=" border-x border-[#B3B3B3]  h-[1500px]"></div>
          <div className=" border-e border-[#B3B3B3]  2xl:h-[925px] xl:h-[750px] lg:h-[750px] md:h-[600px]"></div>
        </div >
      <div className="grid grid-cols-[334px] md:grid-cols-[29.69%_30.16%_29.74%]   w-full justify-center">
        <div className=" "></div>
        <div className="text-center flex flex-col  items-center justify-center 2xl:h-[400px]">
          <p className="mt-[10px] md:mt-0 uppercase text-sm sm:text-xs md:text-[18px] lg:text-lg xl:text-xl 2xl:text-2xl 2xl:text-[24px] text-[#252526] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] 2xl:leading-[26px] tracking-[-5%] font-medium">
            {t("home.conferenceService.heading")} 
          </p>  
          <h1
            className="uppercase text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px]
           2xl:text-[198px] text-[#252526] leading-[81%] md:leading-[94%] lg:leading-[120px]
            xl:leading-[140px] 2xl:leading-[160px] tracking-[-7%] whitespace-nowrap mt-[10px] xl:mb-[32px] mb-[20px] z-1"
          >
            {t("home.conferenceService.title")}
          </h1>
          <p className="uppercase mb-[20px] xl:mb-6 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#252526] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] 2xl:leading-[26px] tracking-[-5%] 2xl:w-[644px] xl:w-[540px] lg:w-[440px] md:w-[380px] w-[300px] z-2">
            {t("home.conferenceService.desc")}
          </p>
          <div className=" text-center flex items-center justify-center mb-4">
          <Link
            to="/conference-service"
            className="w-fit md:py-[13px] md:px-[16.5px] bg-[#8c331b] block px-5 py-2   hover:bg-[white] text-white hover:text-[#8C331B] border-[#8C331B] border rounded-full uppercase z-1"
          >
            {t("buttons.viewHalls")}
          </Link>
        </div>
        </div>
        <div className=""></div>
      </div>
      <HallList halls={halls} />  
    </div>
  );
};
