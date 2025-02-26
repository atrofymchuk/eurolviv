import { useModalStore } from "../../store/useModalStore";
import { useRoomStore } from "../../store/useRoomsStore";
import { RoomInfoCard } from "./RoomInfoCard";

export const RoomsInfo = () => {
  const { rooms } = useRoomStore();

  const { openModalOrder } = useModalStore();

  return (
    <div className="w-full flex-col flex items-center">
      <div className="grid lg:grid-cols-[1720px]  grid-cols-[334px] ">
        <div className="border-x border-[#C7C7C7]  ">
          <div className="lg:space-y-[11px]">
            <div className="lg:block hidden mt-[114px] ">
              <h1 className="uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                <span className="text-[#8C331B]">100 номерів</span>, кожен з
                яких
              </h1>
              <div className="flex flex-col items-end ">
                <div className="w-fit lg:space-y-[11px] ">
                  <h1 className=" uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                    продуманий до найменших
                  </h1>
                  <h1 className="mb-[24px] uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em]">
                    деталей
                  </h1>
                  <div className="flex  lg:mt-[43px] items-center ">
                    <p className="text-[16px] leading-[20px] text-[#252526]  uppercase pt-10 ">
                      Забронюйте номер безпосередньо на сайті <br /> та
                      гарантовано отримайте найкращу ціну <br />
                      прямо зараз.
                    </p>
                    <button
                      onClick={openModalOrder}
                      className=" font-cofo font-extrabold uppercase lg:self-end ms-[30px] z-20 bg-[#8C331B] text-white hover:cursor-pointer px-[38px]  h-fit py-[13px] rounded-full text-[14px]"
                    >
                      забронювати
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:hidden inline  ">
              <h1 className="text-[32px] leading-[32px] tracking-[-0.07em] uppercase mt-[53px]  text-center">
                <span className="text-[#8C331B]">100 номерів,</span>
                <span>
                  кожен <br /> з яких продуманий до найменших дрібниць
                </span>
              </h1>
              <div className="flex flex-col text-center lg:mt-[43px] mt-[24px]  items-center">
                <p className="text-[12px] leading-[15px] text-[#252526] uppercase ">
                  Забронюйте номер безпосередньо на сайті <br /> та гарантовано
                  отримайте найкращу ціну <br />
                  прямо зараз.
                </p>
                <button
                  onClick={openModalOrder}
                  className=" font-cofo font-extrabold  uppercase mt-[24px] mb-[20px] z-20 bg-[#8C331B] text-white hover:cursor-pointer px-[23px]  h-fit py-[12px] rounded-full text-[12px] "
                >
                  забронювати
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pt-[43px]">
            {rooms.map((room, index) => {
              return (
                <RoomInfoCard index={index} length={rooms.length} room={room} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
