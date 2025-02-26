import wedFst from "../../assets/Restaurant/Celebrate/WED1.jpg";
import wedScd from "../../assets/Restaurant/Celebrate/WED2.jpg";
import wedTrd from "../../assets/Restaurant/Celebrate/WED3.jpg";

export const Celebration = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid lg:grid-cols-[639px_513px_637px] grid-cols-[334px]">
        <div className="lg:h-[616px]  hidden lg:flex justify-end border-x  border-[#B3B3B3] "></div>

        <div className="lg:h-[616px] h-[454px] flex border-[#B3B3B3] border-s lg:border-s-0  border-e  flex-col items-center lg:justify-end justify-center text-center lg:pb-[70px]">
          <span className="font-blessed  block text-center leading-[70%] text-[16px] xl:text-[36px] lg:leading-[25.2px] ml-2 xl:inline lg:pb-[19px]">
            Ruff
          </span>
          <h1 className="uppercase lg:w-fit w-[217px] lg:text-[64px] lg:leading-[67px] leading-[94%]  text-[32px] tracking-[-7%] lg:whitespace-nowrap   ">
            святкування та події
          </h1>
          <div className="lg:space-y-4 space-y-4 lg:mt-[37px] mt-[24px]">
            <p className="text-[#252526] lg:w-[722px] w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              У RUFF кожне святкування набуває особливого шарму. Весілля,
              ювілей, корпоратив чи хрестини — простір ресторану легко
              трансформується під ваш формат, зберігаючи свою родзинку —
              панораму старого Львова за вікнами.
            </p>
            <p className="text-[#252526] lg:w-[722px] w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              Основна бенкетна зала на 8-му поверсі вміщує до 80 гостей, а
              стильний лаунж з караоке — до 40. Ми подбаємо про кожну деталь,
              щоб ваше свято було бездоганним
            </p>
          </div>
          <button className="uppercase lg:text-[14px] text-[12px] font-semibold bg-[#8C331B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B] lg:px-[22px] py-[12.5px] px-[23px]  lg:py-[13px] rounded-full lg:mt-[45px] mt-[26px]">
            бенкетне меню
          </button>
        </div>
        <div className="lg:flex hidden  border-[#B3B3B3] border-e "></div>
      </div>
      <div className="grid lg:grid-cols-[639px_513px_637px] grid-cols-[334px] lg:h-[669px] ">
        <div className="flex items-center justify-center border-[#B3B3B3] border py-5 lg:py-0">
          <img src={wedFst} alt="" className="lg:w-[599px] lg:h-[620px] w-[300px] h-[310px] object-cover" />
        </div>
        <div className="flex items-center justify-center border-[#B3B3B3] border border-t-0 lg:border-t lg:border-s-0 py-5 lg:py-0">
          <img src={wedScd} alt="" className="lg:w-[474px] lg:h-[620px] w-[300px] h-[392px] object-cover" />
        </div>
        <div className="flex items-center justify-center border-[#B3B3B3] border lg:border-s-0 border-t-0 lg:border-t py-5 lg:py-0">
          <img src={wedTrd} alt="" className="lg:w-[593px] lg:h-[620px] w-[300px] h-[316px] object-cover" />
        </div>
      </div>
    </div>
  );
};
