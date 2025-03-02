import { useRoomStore } from "../../store/useRoomsStore";
import { Terrase } from "./Terase";

export const TerrasesContainer = () => {
  const { terases } = useRoomStore();

  return (
    <>
      <div className="flex flex-col  items-center justify-center relative 0">
        <div className="grid grid-cols-[49.97%_50.03%] border-[#B3B3B3AD] max-w-[90.31%] w-full mx-auto border-x relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-8 py-4 text-center z-10">
            <p className="font-blessed 2xl:text-[36px] xl:text-[24px] lg:text-[20px] md:text-[16px] text-[12px] leading-[70%] text-[#252526]">
              Про терасу
            </p>
            <h1 className="uppercase 2xl:text-[64px] xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] leading-[104%] text-[#252526] tracking-[-7%] 2xl:w-[1557px] xl:w-[1000px] lg:w-[800px] md:w-[600px] text-center">
              На терасі панує особлива атмосфера: вдень тут можна годинами
              спостерігати за містом, ввечері — насолоджуватися спілкуванням під
              зоряним небом.
            </h1>
            <p className="uppercase 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px] text-[8px] w-[432px] text-[#888888] mx-auto mt-[41px]">
              Тут подають вишукані страви та авторські коктейлі, грає жива
              музика — не дивно, що сюди так хочеться повертатись!
            </p>
            <button className="uppercase border px-4 py-2 lg:text-[16px] border-[#8C331B] rounded-full lg:mt-[37px] font-medium text-[#8C331B] hover:bg-[#8C331B] hover:text-white">
              переглянути меню
            </button>
          </div>

          <div className="border-e border-[#B3B3B3AD] 2xl:h-[772px] xl:h-[700px] lg:h-[600px] md:h-[500px] h-[400px]"></div>
          <div className="2xl:h-[772px]"></div>
        </div>
      </div>
<div className="flex flex-col items-center justify-center relative ">

      {terases.map((el, index) => (
        <Terrase key={index} terase={el} index={index} />
      ))}
      </div>
    </>
  );
};
