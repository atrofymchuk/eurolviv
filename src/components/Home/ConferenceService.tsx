import { useRoomStore } from "../../store/useRoomsStore";

import area from "../../assets/icons/Rooms/square.svg";
import guest from "../../assets/icons/Rooms/guests.svg";
import { Link } from "react-router-dom";

export const ConferenceService = () => {
  const { halls } = useRoomStore();
  return (
    <div className="flex flex-col items-center justify-center bg-[#EDE8E5] xl:pb-[109px] overflow-x-hidden">
      <div className="grid grid-cols-[334px] md:grid-cols-[668px] lg:grid-cols-3 2xl:grid-cols-[570px_579px_571px] xl:grid-cols-[470px_449px_471px] relative">
        <div className="absolute grid grid-cols-[334px] md:grid-cols-[668px] xl:grid-cols-[470px_449px_471px] lg:grid-cols-3 z-1">
          <div
            className="border-s absolute lg:hidden xl:block border-[#B3B3B3] 
            h-[950px] w-[334px]
            md:h-[950px] md:w-[334px]
            lg:h-[950px] lg:w-[400px]
            xl:h-[950px] xl:w-[470px] 
            2xl:h-[950px] 2xl:w-[570px]
              left-[334px] 
  md:left-[334px]
  lg:left-[400px]
  xl:left-[74px]
  2xl:left-[0px]
            "
          ></div>
          <div
            className="border-x  absolute border-[#B3B3B3] 
            left-[334px] h-[1200px] w-[334px]
            md:left-[334px] md:h-[1200px] md:w-[334px]
            lg:left-[250px] lg:h-[1600px] lg:w-[538px]
            xl:left-[470px] xl:h-[1200px] xl:w-[449px] 
            2xl:left-[570px] 2xl:h-[1200px] 2xl:w-[579px]"
          ></div>
          <div
            className="border-e lg:hidden xl:block absolute border-[#B3B3B3] 
            left-[668px] h-[950px] w-[334px]
            md:left-[668px] md:h-[950px] md:w-[334px]
            lg:left-[800px] lg:h-[950px] lg:w-[400px]
            xl:left-[845px] xl:h-[950px] xl:w-[471px] 
            2xl:left-[1149px] 2xl:h-[950px] 2xl:w-[571px]"
          ></div>
        </div>
        <div className=""></div>
        <div className="text-center flex flex-col border-e-0  border-[#B3B3B3] md:mt-[10px] lg:border-e border-x  items-center justify-center 2xl:h-[400px]">
          <p className="mt-[10px] xl:mt-0 uppercase text-sm sm:text-xs md:text-[18px] lg:text-lg xl:text-xl 2xl:text-2xl 2xl:text-[24px] text-[#252526] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] 2xl:leading-[26px] tracking-[-5%] font-medium">
            місце успішних зустрічей -
          </p>
          <h1
            className="uppercase text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px]
           2xl:text-[198px] text-[#252526] leading-[81%] md:leading-[94%] lg:leading-[120px]
            xl:leading-[140px] 2xl:leading-[160px] tracking-[-7%] whitespace-nowrap mt-[10px] xl:mb-[32px] mb-[20px] z-1"
          >
            конференс-сервіс
          </h1>
          <p className="uppercase mb-[20px] xl:mb-10 text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] text-[#252526] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] 2xl:leading-[26px] tracking-[-5%] 2xl:w-[644px] xl:w-[540px] lg:w-[440px] md:w-[380px] w-[300px] z-2">
            Від бізнес-сніданку до конференції. бездоганний сервіс для
            будь-якого ділового заходу.
          </p>
        </div>
        <div></div>
      </div>
      <div className="relative z-10 sm:grid xl:flex grid-cols-[334px] md:grid-cols-[668px] border-x lg:border-x-0 border-e-0 border-[#B3B3B3] pb-[20px] xl:pb-[0px]">
        <div className="grid grid-cols-1 xl:grid-cols-3  items-center justify-center w-full px-4 sm:px-8 md:px-12 lg:px-16 ">
          <div className="flex flex-col items-center justify-center w-full ">
            <img
              src={halls[1].previewImage}
              alt={halls[1].title}
              className="w-[300px] h-[200px] sm:w-[381px] sm:h-[256px] object-cover xl:w-[352xp] xl:h-[256px]"
            />
            <h4 className="uppercase text-sm sm:text-xs md:text-[22px] lg:text-lg 2xl:text-[24px] leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] 2xl:leading-[28px] tracking-[-5%] text-center xl:mt-[25px] xl:mb-[16px] mt-[10px] mb-[5px]">
              {halls[1].title} {halls[1].size}
            </h4>

            <div className="flex flex-col items-center justify-center mb-2">
              <div className="flex items-center justify-center space-x-1">
                <img src={area} alt="areaico" className="w-4 h-4" />
                <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] 2xl:leading-[20px]">
                  площа: {halls[1].area}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1 ">
                <img src={guest} alt="guestico" className="w-4 h-4" />
                <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526] leading-[12px] sm:leading-[14px] md:leading-[16px] lg:leading-[18px] 2xl:leading-[20px]">
                  вмістимість: {halls[1].capacity.slice(0, -2) + "."}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <img
              src={halls[0].previewImage}
              alt={halls[0].title}
              className="w-[300px] h-[200px] sm:w-[675px] lg:w-[381px] lg:h-[256px] sm:h-[445px] object-cover"
            />
            <h4 className="uppercase text-sm sm:text-xs  md:text-[22px] lg:text-lg 2xl:text-[24px] leading-[28px] tracking-[-5%] text-center xl:mt-[25px] xl:mb-[16px] mt-[10px] ">
              {halls[0].title} {halls[0].size}
            </h4>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-1">
                <img src={area} alt="areaico" className="w-4 h-4" />
                <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526]">
                  площа: {halls[0].area}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <img src={guest} alt="guestico" className="w-4 h-4" />
                <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526]">
                  вмістимість: {halls[0].capacity.slice(0, -2) + "."}
                </p>
              </div>
              <div className="text-center flex items-center justify-center pt-[37px]">
                <Link
                  to="/conference-service"
                  className="hidden  w-fit py-[13px] px-[16.5px] text-[#FFFFFF] xl:block bg-[#8C331B] hover:text-[#8C331B] hover:bg-[#FFFFFF] border-[#8C331B] border rounded-full uppercase "
                >
                  переглянути зали
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <img
              src={halls[2].previewImage}
              alt={halls[2].title}
              className="w-[300px] h-[200px] sm:w-[381px] sm:h-[256px] object-cover xl:w-[382xp] xl:h-[256px]"
            />
            <h4 className="uppercase text-sm sm:text-xs  md:text-[22px] lg:text-lg 2xl:text-[24px] leading-[28px] tracking-[-5%] text-center xl:mt-[25px] xl:mb-[16px] mt-[10px] ">
              {halls[2].title} {halls[2].size}
            </h4>
            <div className="flex items-center justify-center space-x-1">
              <img src={area} alt="areaico" className="w-4 h-4" />
              <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526]">
                площа: {halls[2].area}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <img src={guest} alt="guestico" className="w-4 h-4" />
              <p className="uppercase text-sm sm:text-xs md:text-base lg:text-lg 2xl:text-[16px] text-[#252526]">
                вмістимість: {halls[2].capacity.slice(0, -2) + "."}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden text-center flex items-center justify-center pt-[37px]">
          <Link
            to="/conference-service"
            className="w-fit py-[13px] px-[16.5px] text-[#FFFFFF] block bg-[#8C331B] hover:text-[#8C331B] hover:bg-[#FFFFFF] border-[#8C331B] border rounded-full uppercase "
          >
            переглянути зали
          </Link>
        </div>
      </div>
    </div>
  );
};
