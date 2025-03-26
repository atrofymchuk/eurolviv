import { useTranslation } from "react-i18next";
import { floor, squareBrown, guestBrown } from "../../store/exportsIcons";
import { memo } from "react";

type RoomInfoToProps = {
  area: string;
  roomFloor: number;
  capacity: string;
};

export const RoomInfo = memo(({ area, roomFloor, capacity }: RoomInfoToProps) => {
  const { t } = useTranslation();
  return (
    <div className="pe-8 space-y-1 flex flex-col ">
      <div className="flex items-center gap-1">
        <img
          src={floor}
          alt="houseicon"
          className=" w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] "
        />
        <p className="uppercase text-[12px] sm:text-[14px] md:text-[16px]  2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1 text-[#8C331B]">
          {t("conferenceService.about.area")}:
          <span className="font-cofo-medium">&nbsp;{t(area)}</span>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <img
          src={squareBrown}
          alt="houseicon"
          className=" w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] "
        />
        <p className="text-[#8C331B] uppercase text-[12px] sm:text-[14px] md:text-[16px]  2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1">
          {t("conferenceService.about.roomFloor")}:
          <span className="font-cofo-medium text-[#8C331B]">&nbsp;{roomFloor}</span>
        </p>
      </div>
      <div className="flex gap-1 items-center md:items-start">
        <img
          src={guestBrown}
          alt="houseicon"
          className=" w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px] xl:w-[20px] xl:h-[20px] "
        />
        <p className="text-[#8C331B] uppercase text-[12px] sm:text-[14px] md:text-[16px]  2xl:text-[20px] leading-[15px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] 2xl:leading-[25.2px] items-center gap-x-1">
          {t("conferenceService.about.capacity")}:
          <br className="lg:inline hidden"/>
          <span className="font-cofo-medium text-[#8C331B] ">
            &nbsp;{t(capacity)}
          </span>
        </p>
      </div>
    </div>
  );
});
