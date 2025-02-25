import { useRoomStore } from "../../store/useRoomsStore";

import area from "../../assets/icons/Rooms/square.svg";
import guest from "../../assets/icons/Rooms/guests.svg";
import { Link } from "react-router-dom";

export const ConferenceService = () => {
  const { halls } = useRoomStore();
  return (
    <div className="flex flex-col items-center justify-center bg-[#EDE8E5] h-[1274px]">
      <div className="grid grid-cols-[570px_579px_571px] relative">
        <div className=" absolute  grid grid-cols-[570px_579px_571px z-1">
          <div className="border-s  absolute left-0 border-[#B3B3B3] h-[950px] w-[570px] "></div>
          <div className="border-x absolute left-[570px] border-[#B3B3B3] h-[1200px] w-[579px]"></div>
          <div className="border-e absolute left-[1149px] border-[#B3B3B3] h-[950px] w-[571px]"></div>
        </div>
        <div className="border-[#B3B3B3] "></div>
        <div className="text-center flex flex-col border-[#B3B3B3] border-e items-center justify-center h-[400px]">
          <p className="uppercase text-[24px] text-[#252526] leading-[26px] tracking-[-5%] font-medium">
            місце успішних зустрічей -
          </p>
          <h1 className="uppercase  text-[198px] text-[#252526] leading-[160px] tracking-[-7%] whitespace-nowrap mt-[10px] mb-[52px] z-1">
            конференс-сервіс
          </h1>
          <p className="uppercase text-[24px] text-[#252526] leading-[26px] tracking-[-5%] w-[644px]">
            Від бізнес-сніданку до конференції. бездоганний сервіс для
            будь-якого ділового заходу.
          </p>
        </div>
        <div></div>
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-[50px]">
          <div>
            <img
              src={halls[1].previewImage}
              alt={halls[1].title}
              className="w-[381px] h-[256px]"
            />
            <h4 className="uppercase  text-[24px] leading-[28px] tracking-[-5%] text-center mt-[25px] mb-[16px]">
              {halls[1].title} {halls[1].size}
            </h4>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-1">
                <img src={area} alt="areaico" className="w-4 h-4" />
                <p className="uppercase text-[16px] text-[#252526]">
                  площа: {halls[1].area}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <img src={guest} alt="guestico" className="w-4 h-4" />
                <p className="uppercase text-[16px] text-[#252526]">
                  вмістимість: {halls[1].capacity.slice(0, -2) + "."}
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={halls[0].previewImage}
              alt={halls[0].title}
              className="w-[667px] h-[445px]"
            />
            <h4 className="uppercase  text-[24px] leading-[28px] tracking-[-5%] text-center mt-[25px] mb-[16px]">
              {halls[0].title} {halls[0].size}
            </h4>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-1">
                <img src={area} alt="areaico" className="w-4 h-4" />
                <p className="uppercase text-[16px] text-[#252526]">
                  площа: {halls[0].area}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <img src={guest} alt="guestico" className="w-4 h-4" />
                <p className="uppercase text-[16px] text-[#252526]">
                  вмістимість: {halls[0].capacity.slice(0, -2) + "."}
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={halls[2].previewImage}
              alt={halls[2].title}
              className="w-[381px] h-[256px]"
            />
            <h4 className="uppercase  text-[24px] leading-[28px] tracking-[-5%] text-center mt-[25px] mb-[16px]">
              {halls[2].title} {halls[2].size}
            </h4>
            <div className="flex items-center justify-center space-x-1">
              <img src={area} alt="areaico" className="w-4 h-4" />
              <p className="uppercase text-[16px] text-[#252526]">
                площа: {halls[2].area}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-1">
              <img src={guest} alt="guestico" className="w-4 h-4" />
              <p className="uppercase text-[16px] text-[#252526]">
                вмістимість: {halls[2].capacity.slice(0, -2) + "."}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center flex items-center justify-center pt-[37px]">
          <Link
            to="/conference-service"
            className="w-fit py-[13px] px-[16.5px] text-[#FFFFFF] block bg-[#8C331B] rounded-full uppercase "
          >
            переглянути зали
          </Link>
        </div>
      </div>
    </div>
  );
};
