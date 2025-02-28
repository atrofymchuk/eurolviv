import eurohotel from "../../assets/Rooms/eurohotel.jpg";
import { useModalStore } from "../../store/useModalStore";

export const Guarantee = () => {
  const { openModalOrder } = useModalStore();

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 xl:px-6 2xl:px-0 ">
      <div className="max-w-[1720px] border-x border-[#C7C7C7] lg:w-full">

      <div className="grid 2xl:grid-cols-[1fr]  justify-center   xl:grid-cols-[1fr] lg:grid-cols-[1fr] md:grid-cols-[1fr] grid-cols-[1fr]   border-t lg:border-t-0 border-[#C7C7C7] ">
        <div className="md::border-x  lg:border-x-0 border-[#C7C7C7]">
          
        <div className=" flex flex-col 2xl:items-end xl:items-center  2xl:pt-[81px] xl:pt-[60px] lg:pt-[50px] pt-[49px] 2xl:pb-[48px] xl:pb-[40px] pb-[30px]">
          <h1 className="font-cofo hidden 2xl:block uppercase 2xl:text-[100px] 2xl:leading-[81px] 2xl:tracking-[-0.04em] 2xl:w-[1300px]">
            гарантія найкращої ціни
          </h1>
          <h1 className="font-cofo hidden 2xl:block uppercase 2xl:text-[100px] 2xl:leading-[81px] 2xl:tracking-[-0.04em] 2xl:text-center 2xl:w-[1000px] self-start">
            при бронюванні
          </h1>

          <h1 className="font-cofo hidden xl:block 2xl:hidden uppercase xl:text-[70px] xl:leading-[60px] xl:tracking-[-0.04em] xl:text-center xl:w-[600px]">
            гарантія найкращої ціни при бронюванні
          </h1>

          <h1 className="font-cofo xl:hidden block ps-[12px] uppercase text-[32px] leading-[26px] tracking-[-0.07em] ">
            гарантія найкращої ціни при бронюванні
          </h1>
        </div>
        </div>
      </div>

      <div className="grid 2xl:grid-cols-[1017px_803px] xl:grid-cols-[4fr_3fr] lg:grid-cols-[600px_400px] md:grid-cols-[1fr] grid-cols-[1fr] 2xl:justify-normal xl:justify-center justify-center w-full md:px-6">
        <div className="px-[14px] ps-0 pt-0 py-[16px] 2xl:p-0  border-[#C7C7C7] 2xl:border-0">
          <img
            src={eurohotel}
            alt="eurohotel"
            className="2xl:w-[1016px] 2xl:h-[650px] xl:w-[800px] xl:h-[500px] lg:w-[600px] lg:h-[400px] w-full object-cover"
            />
        </div>
        <div className="2xl:border-e 2xl:border-x-0 border-[#C7C7C7] 2xl:mb-[96px] xl:mb-[70px] mb-[40px] flex flex-col justify-center items-center h-full">
          <div className="flex flex-col 2xl:items-start xl:items-start items-start justify-between h-full">
            <h1 className="uppercase text-[#8C331B] font-semibold 2xl:text-[32px] xl:text-[24px] text-[16px] 2xl:leading-[35px] xl:leading-[28px] leading-[17px] 2xl:w-[608px] xl:w-[500px] w-full 2xl:p-0 xl:pt-[35px] pt-[45px] px-4 order-2 2xl:order-1">
              Бронюйте безпосередньо — отримуйте більше!
            </h1>

            <ol className="list-decimal uppercase 2xl:text-[20px] xl:text-[16px] text-[12px] 2xl:leading-[24px] xl:leading-[20px] leading-[14px] 2xl:w-[608px] xl:w-[500px] w-full space-y-2.5 2xl:p-0 px-7 pt-[24px] order-3 2xl:order-2">
              <li>
                Ми гарантуємо найвигідніший тариф при бронюванні безпосередньо у нас.
              </li>
              <li>
                Якщо ви знайдете кращу пропозицію протягом 24 годин після бронювання, ми зрівняємо ціну та запропонуємо вам ще вигідніші умови або ж приємні бонуси.
              </li>
              <li>
                Обирайте пряме бронювання — економте більше та насолоджуйтеся привілеями!
              </li>
            </ol>

            <button
              onClick={openModalOrder}
              className="uppercase bg-[#8C331B] text-[#FFFFFF] 2xl:w-fit self-start 2xl:px-5 xl:px-4 px-[23px] 2xl:py-3 xl:py-2.5 py-[12.5px] rounded-3xl font-semibold 2xl:text-base xl:text-sm text-sm 2xl:ms-[15px] ms-[12px] mt-[24px] 2xl:mt-0 hover:cursor-pointer order-3 2xl:order-3"
              >
              забронювати <span className="2xl:inline hidden">номер</span>
            </button>

            <div className="order-1 2xl:order-4 ps-[12px]">
              <h1 className="flex uppercase font-semibold 2xl:text-[100px] xl:text-[70px] text-[32px] 2xl:leading-[100px] xl:leading-[70px] leading-[25px] 2xl:tracking-[-0.04em] tracking-[-0.07] 2xl:w-[681px] xl:w-[500px]">
                на нашому сайті
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-[1718px] xl:grid-cols-[1200px] lg:grid-cols-[900px] grid-cols-[332px]  justify-center items-center 2xl:h-[196px] xl:h-[120px] h-[64px]"></div>
              </div>
    </div>
  );
};
