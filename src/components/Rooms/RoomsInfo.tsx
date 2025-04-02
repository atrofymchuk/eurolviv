import { useRoomStore } from "../../store/useRoomsStore";
import { RoomInfoCard } from "./RoomInfoCard";
import { useTranslation } from "react-i18next";
import { BookLink } from "../Buttons/BookLink";
export const RoomsInfo = () => {
  const { rooms } = useRoomStore();
  const { t } = useTranslation();

  return (
    <div className="w-full flex-col flex items-center ">
      <div className=" border-x border-[#C7C7C7] mx-auto w-full max-w-[89.58%] box-border container-fluid  fluid-container">
        <div className="grid  grid-cols-1  ">
          <div className="space-y-[11px] px-5">
            <div className="lg:block hidden mt-[114px]">
              <h1 className="uppercase lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                <span className="text-[#8C331B]">
                  {t("rooms.about.heading.0")}
                </span>
                , {t("rooms.about.heading.1")}
              </h1>
              <div className="flex flex-col items-end ">
                <div className="w-fit space-y-[11px]">
                  <h1 className="uppercase lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                    {t("rooms.about.heading.2")}
                  </h1>
                  <h1 className="mb-[24px] xl:mb-[43px] uppercase font-cofo lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                    {t("rooms.about.heading.3")}
                  </h1>
                  <div className="flex  items-center lg:gap-[30px]">
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] leading-[20px] text-[#252526] uppercase  max-w-[412px]">
                      {t("rooms.about.desc")}
                    </p>
                    <BookLink
                      className="text-[#FFFFFF] bg-[#8C331B]"
                      to={"/booking"}
                    >
                      <span className="lg:px-[28px] lg:py-[13px] px-[19px] lg:mt-[43px] py-[11px] ">

                      {t("buttons.book")}
                      </span>
                    </BookLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden block">
              <h1 className="text-[32px] leading-[32px] tracking-[-0.07em] uppercase mt-[53px] text-center">
                <span className="text-[#8C331B]">
                  {t("rooms.about.heading.0")},
                </span>
                <span>
                  {t("rooms.about.heading.1")}
                  {t("rooms.about.heading.2")}
                  {t("rooms.about.heading.4")}
                </span>
              </h1>
              <div className="flex flex-col text-center  items-center px-6 mt-[24px] md:mt-[0px]">
                <p className="text-[12px] leading-[15px] text-[#252526] uppercase">
                  {t("rooms.about.desc")}
                </p>
                <BookLink
                  className="text-[#FFFFFF] bg-[#8C331B] mt-[24px] md:mt-[0px]"
                  to={"/booking"}
                >
                  <span className="lg:px-[8px] lg:py-[13px] px-[4.2px] lg:mt-[43px] py-[9.5px] ">

                  {t("buttons.book")}
                  </span>
                </BookLink>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-[20px] lg:pt-[33px] ">
            {rooms.map((room, index) => (
              <RoomInfoCard
                key={room.type}
                index={index}
                length={rooms.length}
                room={room}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
