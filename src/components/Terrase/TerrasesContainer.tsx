import { useRoomStore } from "../../store/useRoomsStore";
import { Terrase } from "./Terase";

export const TerrasesContainer = () => {

  const {terases} =useRoomStore()

  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="grid grid-cols-[872px_873px] border-[#B3B3B3AD] border-x relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2  px-8 py-4 text-center z-10">
          <p className="font-blessed text-[36px] leading-[70%] text-[#252526]">
            Про терасу
          </p>
          <h1 className="uppercase text-[64px] leading-[104%] text-[#252526] tracking-[-7%] w-[1557px]">
            На терасі панує особлива атмосфера: вдень тут можна годинами
            спостерігати за містом, ввечері — насолоджуватися спілкуванням під
            зоряним небом.
          </h1>
          <p className="uppercase w-[432px] text-[#888888] mx-auto mt-[41px] ">
            Тут подають вишукані страви та авторські коктейлі, грає жива музика
            — не дивно, що сюди так хочеться повертатись!
          </p>
          <button className="uppercase border px-4 py-2 lg:text-[16px] border-[#8C331B] rounded-full lg:mt-[37px] font-medium text-[#8C331B] hover:bg-[#8C331B] hover:text-white ">
            переглянути меню
          </button>
        </div>

        <div className="border-e border-[#B3B3B3AD] h-[772px]"></div>

        <div className="h-[772px]"></div>
      </div>
      {terases.map((el, index)=> 
      <Terrase terase={el} index={index}/>
      )
}
    </div>
  );
};
