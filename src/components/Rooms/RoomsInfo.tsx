import { useRoomStore } from "../../store/useRoomsStore";
import { RoomInfoCard } from "./RoomInfoCard";
import { useTranslation } from "react-i18next";
import { BookLink } from "../Buttons/BookLink";
import cn from "classnames";
export const RoomsInfo = () => {
  const { rooms } = useRoomStore();
  const { t, i18n } = useTranslation();

  const isEng = i18n.language === "en";

  return (
    <div className="w-full flex-col flex items-center ">
      <div className=" lg:border-x border-[#C7C7C7] mx-auto w-full max-w-[89.58%] box-border container-fluid  fluid-container">
        <div className="grid  grid-cols-1  ">
          <div className="space-y-[11px] px-2 border-x border-[#C7C7C7] ">
            <div className="lg:block hidden mt-[114px]">
              <h1 className="uppercase lg:text-[100px] md:text-[80px] sm:text-[60px] leading-[81%] lg:leading-none tracking-[-0.04em]">
                <span className="text-[#8C331B]">
                  {t("rooms.about.heading.0")},
                </span>
                <span className="text-[#252526]">
                  {t("rooms.about.heading.1")}
                </span>
              </h1>
              <div className={cn("flex flex-col  ", {
                "items-center": isEng,
              },
              {
                "items-end": !isEng,
              })}>
                <div className="w-fit">
                  <h1 className="uppercase lg:text-[100px] md:text-[80px] sm:text-[60px] leading-[81%] tracking-[-0.04em] lg:leading-none text-[#252526]">
                    {t("rooms.about.heading.2")}
                  </h1>
                  <h1 className="mb-[24px] xl:mb-[43px] uppercase font-cofo lg:text-[100px] md:text-[80px] sm:text-[60px] leading-[81%] lg:leading-none tracking-[-0.04em] text-[#252526]">
                    {t("rooms.about.heading.3")}
                  </h1>
                  <div className="flex  items-center lg:gap-x-[30px]">
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] leading-[20px] text-[#252526] uppercase  max-w-[412px]">
                      {t("rooms.about.desc")}
                    </p>
                    <BookLink
                      className="text-[#FFFFFF] bg-[#8C331B] lg:px-[28px] lg:py-[13px] px-[19px]  py-[11px] lg:w-[204px] flex justify-center lg:h-[44px] h-[40px]"
                      to={"/booking"}
                    >

                      {t("buttons.book")}
                    </BookLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden block pb-[20px] ">
              <h1 className="text-[32px] leading-[32px] tracking-[-0.07em] uppercase mt-[53px] text-center">
                <span className="text-[#8C331B]">
                  {t("rooms.about.heading.0")},
                </span>
                <span>
                  {t("rooms.about.heading.1")}
                  {t("rooms.about.heading.2")}
                  {!isEng && t("rooms.about.heading.4")}
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
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  lg:pt-[33px] ">
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
