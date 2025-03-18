
import { Room } from "../../store/types";
import { Link } from "react-router-dom";
import { InViewWrapper } from "../utils/InViewWrapper";
import { useTranslation } from "react-i18next";
import { squareWhite, guestWhite } from "../../store/exportsIcons";

type RoomsListHeaderToProps = {
  room:Room
  index:number
}
export const RoomsListHeader = ({ room, index }: RoomsListHeaderToProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center justify-between border-[#FFFFFF33] ${index === 0 ? "border-x" : "border-e"} ${
        index === 2 ? "lg-border-e border-x" : ""
      } p-4 h-auto`}
    >
      <Link to={`/rooms/${room.type}`} className="w-full h-full flex flex-col justify-between">
        <div className="w-full flex justify-center flex-col items-center">
          <InViewWrapper>
            <img
              src={room.header.previewImage}
              alt="preview"
              className="lg:w-full object-cover"
            />
          </InViewWrapper>
        <div className="w-full flex justify-between items-center mt-3.5">
          <div className="flex items-center">
            <img src={squareWhite} alt="area icon" className="lg:w-5 lg:h-5 w-4 me-2" />
            <p className="text-[#FFFFFF] uppercase lg:text-[16px] text-[10px]">
              площа: {room.area}
            </p>
          </div>
          <div className="flex items-center">
            <img src={guestWhite} alt="guest icon" className="lg:w-5 lg:h-5 w-4 me-2" />
            <p className="text-[#FFFFFF] uppercase lg:text-[16px] text-[10px]">
              гостей: {room.guests}
            </p>
          </div>
        </div>
        </div>


        <h1 className="uppercase text-[#FFFFFF] xl:text-[36px] 2xl:mt-3 lg:text-[24px] text-[14px] tracking-[-6%] font-semibold text-center leading-[15px] lg:leading-[30px] min-h-[40px] flex items-center">
          {t(room.title)}
        </h1>
        <p className="uppercase text-[#FFFFFF] text-center lg:text-[18px] text-[10px] leading-[-2%] max-w-[310px] mx-auto lg:mt-[15px] min-h-[40px] flex items-center">
          {t(room.description)}
        </p>
      </Link>
    </div>
  );
};
