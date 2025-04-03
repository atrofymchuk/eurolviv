import { useTranslation } from "react-i18next";
import { HeaderRoomInfoProps } from "../../../types/headerTypes";

export const HeaderRoomInfo: React.FC<HeaderRoomInfoProps> = ({ roomInfo }) => {
  const { t } = useTranslation();
  
  return (
    <div className="absolute bottom-10 w-full lg:justify-center">
      <div className="flex flex-col lg:flex-row text-center flex-wrap lg:justify-between w-full lg:px-[74px]">
        {roomInfo.count && (
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-cofo-medium text-[10px]">
            {t("room.header.count")}: <span className="text-[#FFFFFF]">{roomInfo.count}</span>
          </p>
        )}
        {roomInfo.view && (
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-cofo-medium text-[10px]">
            {t("room.header.view")}: <span className="text-[#FFFFFF]">{t(roomInfo.view)}</span>
          </p>
        )}
        {roomInfo.arriveTime && (
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-cofo-medium text-[10px]">
            {t("room.header.arriveTime")}: <span className="text-[#FFFFFF]">{roomInfo.arriveTime}</span>
          </p>
        )}
        {roomInfo.leaveTime && (
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-cofo-medium text-[10px]">
            {t("room.header.leaveTime")}: <span className="text-[#FFFFFF]">{roomInfo.leaveTime}</span>
          </p>
        )}
      </div>
    </div>
  );
}; 