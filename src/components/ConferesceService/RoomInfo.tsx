import square from "../../assets/icons/Rooms/squareBrown.svg";
import guestsIco from "../../assets/icons/Rooms/guestsBrown.svg";
import floor from "../../assets/icons/About/floor.svg";
import { useTranslation } from "react-i18next";
type RoomInfoToProps = {
  area: string;
  roomFloor: number;
  capacity: string;
};

export const RoomInfo = ({ area, roomFloor, capacity }: RoomInfoToProps) => {
  const { t } = useTranslation();
  return (
    <div className="2xl:ps-[71px] space-y-1 flex flex-col items-center md:items-start">
      <p className="flex flex-wrap uppercase text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1 text-[#8C331B]">
        <img
          src={floor}
          alt="houseicon"
          className="pe-2 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] 2xl:w-fit"
        />
        {t('conferenceService.about.area')}:
        <span className="font-semibold">&nbsp;{t(area)}</span>
      </p>
      <p className="flex flex-wrap text-[#8C331B] uppercase text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1">
        <img
          src={square}
          alt="houseicon"
          className="pe-2 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] 2xl:w-fit"
        />
        {t('conferenceService.about.roomFloor')}:
        <span className="font-semibold text-[#8C331B]">&nbsp;{roomFloor}</span>
      </p>
      <p className="flex flex-wrap text-[#8C331B] uppercase text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1">
        <img
          src={guestsIco}
          alt="houseicon"
          className="pe-2 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] lg:w-[22px] lg:h-[22px] 2xl:w-fit"
        />
        {t('conferenceService.about.capacity')}:
        <span className="font-semibold text-[#8C331B] whitespace-nowrap">
          &nbsp;{t(capacity)}
        </span>
      </p>
    </div>
  );
};
