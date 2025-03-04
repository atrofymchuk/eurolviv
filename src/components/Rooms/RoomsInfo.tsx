import { useModalStore } from "../../store/useModalStore";
import { useRoomStore } from "../../store/useRoomsStore";
import { RoomInfoCard } from "./RoomInfoCard";
import { useTranslation } from "react-i18next";

export const RoomsInfo = () => {
  const { rooms } = useRoomStore();
  const { onOpenModal } = useModalStore();
  const {t} = useTranslation()
  return (
    <div className="w-full flex-col flex items-center px-4 md:px-6 sm:px-6 xl:px-6 2xl:px-0">
      <div className=" border-x border-[#C7C7C7] mx-auto w-full max-w-[1720px] box-border container-fluid  fluid-container">
        <div className="grid lg:grid-cols-1 md:grid-cols-1    max-w-[1720px]  sm:grid-cols-1 grid-cols-1  ">
          <div className="space-y-[11px] xl:px-5">
            <div className="lg:block hidden mt-[114px]">
              <h1 className="uppercase font-cofo lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                <span className="text-[#8C331B]">{t("rooms.about.heading.0")}</span>, {t("rooms.about.heading.1")}
              </h1>
              <div className="flex flex-col items-end">
                <div className="w-fit space-y-[11px]">
                  <h1 className="uppercase font-cofo lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                    {t("rooms.about.heading.2")}
                  </h1>
                  <h1 className="mb-[24px] uppercase font-cofo lg:text-[100px] md:text-[80px] sm:text-[60px] lg:leading-[81px] md:leading-[65px] sm:leading-[50px] tracking-[-0.04em]">
                    {t("rooms.about.heading.3")}
                  </h1>
                  <div className="flex mt-[43px] items-center">
                    <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] leading-[20px] text-[#252526] uppercase pt-10 max-w-[412px]">
                        {t("rooms.about.desc")}
                    </p>
                    <button
                        onClick={()=>onOpenModal('order')}
                      className="font-cofo font-extrabold uppercase ms-[30px] z-20 bg-[#8C331B] text-white hover:cursor-pointer lg:px-[38px] md:px-[30px] sm:px-[25px] h-fit lg:py-[13px] md:py-[11px] sm:py-[10px] rounded-full lg:text-[14px] md:text-[13px] sm:text-[12px]"
                    >
                      {t("buttons.bookRoom")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden block">
              <h1 className="text-[32px] leading-[32px] tracking-[-0.07em] uppercase mt-[53px] text-center">
                <span className="text-[#8C331B]">{t("rooms.about.heading.0")},</span>
                <span>
                  {t("rooms.about.heading.1")}{t("rooms.about.heading.2")}{t('rooms.about.heading.4')}
                </span>
              </h1>
              <div className="flex flex-col text-center mt-[24px] items-center px-6">
                <p className="text-[12px] leading-[15px] text-[#252526] uppercase">
                  {t("rooms.about.desc")}
                </p>
                <button
                  onClick={()=>onOpenModal('order')}
                  className="font-cofo font-extrabold uppercase mt-[24px] mb-[20px] z-20 bg-[#8C331B] text-white hover:cursor-pointer px-[23px] h-fit py-[12px] rounded-full text-[12px]"
                >
                  забронювати
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 pt-[43px] ">
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
