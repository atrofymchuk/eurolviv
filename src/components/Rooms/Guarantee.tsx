import eurohotel from "../../assets/Rooms/eurohotel.jpg";
import { useModalStore } from "../../store/useModalStore";

export const Guarantee = () => {

  const {openModal} = useModalStore()

  return (
    <div className=" w-full flex flex-col items-center ">
      <div className=" grid  lg:grid-cols-[1720px] grid-cols-[334px] ">
        <div className="border-x border-t lg:border-t-0  border-[#C7C7C7] lg:items-end flex flex-col lg:pt-[81px] pt-[49px] lg:pb-[48px]  ">
          <h1 className="font-cofo lg:block hidden uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em] lg:w-[1300px]">
            гарантія найкращої ціни
          </h1>

          <h1 className="font-cofo lg:block hidden uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em] lg:text-center lg:w-[1000px] self-start">
            при бронюванні
          </h1>
          <h1 className="font-cofo lg:hidden block ps-[12px] uppercase font-cofo lg:text-[100px] lg:leading-[81px] lg:tracking-[-0.04em] text-[32px] leading-[26px] tracking-[-0.07em] lg:text-center lg:w-[1000px] self-start">
            гарантія найкращої ціни при бронюванні
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1017px_803px] grid-cols-[334px] lg:justify-normal  justify-center w-full ">
        <div className=" px-[14px] py-[16px] lg:p-0 border-x border-[#C7C7C7]  lg:border-0">
          <img
            src={eurohotel}
            alt="eurohotel"
            className="lg:w-[1016px] lg:h-[650px] w-full object-cover"
          />
        </div>
        <div className=" lg:border-e border-x lg:border-x-0 border-[#C7C7C7] lg:mb-[96px] flex flex-col justify-center items-center h-full">
          <div className="flex flex-col lg:items-center justify-between h-full">
            <h1 className="uppercase text-[#8C331B] font-semibold lg:text-[32px] text-[16px] lg:leading-[35px] tracking-[-0.04] leading-[17px] lg:w-[608px] lg:p-0 pt-[45px]  px-4 order-2 lg:order-1">
              Бронюйте безпосередньо — отримуйте більше!
            </h1>

            <ol className=" list-decimal uppercase lg:text-[20px] space-y-2.5 text-[12px] lg:leading-[24px] tracking-[-0.04] leading-[14px] lg:w-[608px]  lg:p-0 px-7 pt-[24px] order-3 lg:order-2">
              <li>
                Ми гарантуємо найвигідніший тариф при бронюванні безпосередньо у
                нас.
              </li>
              <li>
                Якщо ви знайдете кращу пропозицію протягом 24 годин після
                бронювання, ми зрівняємо ціну та запропонуємо вам ще вигіднішіf
                умови або ж приємні бонуси.
              </li>
              <li>
                Обирайте пряме бронювання — економте більше та насолоджуйтеся
                привілеями!
              </li>
            </ol>
            <button 
            onClick={openModal}
            className="uppercase bg-[#8C331B] text-[#FFFFFF]  lg:w-fit self-start lg:px-5 lg:py-3 px-[23px] py-[12.5px] rounded-3xl font-semibold text-sm lg:ms-[15px] ms-[12px] mt-[24px] lg:mt-0 hover:cursor-pointer order-3 lg:order-3">
              забронювати <span className="lg:inline hidden">номер</span>
            </button>

            <div className="order-1 lg:order-4 ps-[12px]">
              <h1 className="flex uppercase font-semibold  lg:text-[100px] lg:leading-[100px] lg:tracking-[-0.04em] tracking-[-0.07] lg:w-[681px]  text-[32px] leading-[25px]">
                на нашому сайті
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  lg:grid-cols-[1718px] grid-cols-[332px] border-x border-[#C7C7C7]   justify-center items-center lg:h-[196px] h-[64px]"></div>
    </div>
  );
};
