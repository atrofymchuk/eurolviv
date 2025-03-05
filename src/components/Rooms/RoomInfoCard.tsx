import { Room } from "../../store/types";
import square from "../../assets/icons/Rooms/square.svg";
import guests from "../../assets/icons/Rooms/guests.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type RoomInfoCard = {
  room: Room;
  length: number;
  index: number;
};

export const RoomInfoCard = ({ room, length, index }: RoomInfoCard) => {
  const isFirstInRow = index % 3 === 0;
  const isLastInRow = (index + 1) % 3 === 0;
  const {t} = useTranslation()

  return (
    <div
      key={room.type}
      className={`lg:border lg:border-s-0 border-[#C7C7C7]  
        ${isFirstInRow ? "lg:ps-[20px] p-4" : "p-4"}  
        ${isLastInRow ? "lg:pe-[20px] lg:border-e-0 border-t" : "border-t"} 
        ${index < length - 3 ? "lg:border-b-0 border-t" : ""} 
        ${index % 2 === 0 ? "чд:border-e-0 border-e" : ""}
        ${index === length - 1 ? "md:col-span-2 border-e-0 lg:col-span-1 " : ""}
        lg:p-[15px]`}
    >
      <div className="">
        <div className="items-center flex justify-center">
          <img
            src={room.header.previewImage}
            alt={room.title}
            className="2xl:w-[530px] 2xl:h-[416px] xl:w-[480px] xl:h-[380px] lg:w-[420px] lg:h-[340px] md:w-[360px] md:h-[280px] w-[301px] h-[230px] object-cover"
          />
        </div>

        <div className="2xl:h-[297px] xl:h-[280px] lg:h-[260px] md:h-[220px] h-[191px]">
          <div className="flex justify-between mx-auto 2xl:pt-[19px] xl:pt-[17px] lg:pt-[15px] md:pt-[12px] pt-[10.5px] 2xl:w-[530px] xl:w-[420px] lg:w-[340px] md:w-[300px] sm:w-[301px] w-[301px] items-center">
            <div className="flex items-center">
              <img src={square} alt="square" className="2xl:w-6 w-5" />
              <p className="font-cofo uppercase 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[12px] 2xl:ps-[11.62px] ps-[11.12px] text-[#252526]">
                {t("rooms.about.area")}: {room.area}
              </p>
            </div>
            <div className="flex items-center">
              <img src={guests} alt="square" className="2xl:w-6 w-5" />
              <p className="font-cofo uppercase 2xl:text-[16px] xl:text-[15px] sm:ps-[11.62px] lg:text-[14px] md:text-[13px] text-[12px] 2xl:ps-[11.62px] ps-[11.12px] text-[#252526]">
                {t("rooms.about.guests")}: {room.guests}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col text-center items-center justify-between h-full 2xl:max-h-[200px] xl:max-h-[180px] lg:max-h-[160px] md:max-h-[140px] max-h-[125px] w-full 2xl:max-w-[472px] xl:max-w-[440px] lg:max-w-[400px] md:max-w-[340px]">
              <div className="flex-1 flex flex-col justify-start w-full">
                <h1 className="font-cofo uppercase 2xl:text-[40px] xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] 2xl:leading-[36px] xl:leading-[32px] lg:leading-[28px] md:leading-[24px] leading-[22px] tracking-[-0.06em] font-semibold">
                  {t(room.title)}
                </h1>
                <p className="uppercase 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[13px] text-[12px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[17px] md:leading-[15px] leading-[14px] mt-[15px] tracking-[-0.04em] text-[#6B6B6B]">
                  {t(room.description)}
                </p>
              </div>

              <Link
                to={`/rooms/${room.type}`}
                className="uppercase 2xl:py-[10px] xl:py-[9px] lg:py-[8px] py-[8px] 2xl:px-[20px] xl:px-[18px] lg:px-[16px] px-[9px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] border rounded-full text-[#A47762] hover:bg-[#A47762] hover:text-white font-cofo font-semibold transition-colors"
              >
                {t("buttons.viewRoom")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
