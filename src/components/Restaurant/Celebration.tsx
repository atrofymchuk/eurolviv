import wedFst from "../../assets/Restaurant/Celebrate/WED1.jpg";
import wedScd from "../../assets/Restaurant/Celebrate/WED2.jpg";
import wedTrd from "../../assets/Restaurant/Celebrate/WED3.jpg";
import { useModalStore } from "../../store/useModalStore";

    export const Celebration = () => {
  const { onOpenModal } = useModalStore();
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[93.16%] border-[#B3B3B3] md:border-b">
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 w-full md:border-x border-[#B3B3B3] md:border-t ">
        <div className="lg:h-[616px]  hidden md:flex justify-end  "></div>

        <div className="lg:h-[616px] h-[454px] flex border-[#B3B3B3] border-x  flex-col items-center lg:justify-end justify-center text-center lg:pb-[70px]">
          <span className="font-blessed  block text-center leading-[70%] text-[16px] xl:text-[36px] lg:leading-[25.2px] ml-2 xl:inline lg:pb-[19px]">
            Ruff
          </span>
          <h1 className="uppercase lg:w-fit w-[217px] md:w-[317px] xl:text-[64px] lg:text-[54px] md:text-[44px]  lg:leading-[67px] leading-[94%]   text-[32px] tracking-[-7%] lg:whitespace-nowrap   ">
            святкування та події
          </h1>
          <div className="lg:space-y-4 space-y-4 lg:mt-[37px] mt-[24px]">
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px] md:text-[14px]  w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              У RUFF кожне святкування набуває особливого шарму. Весілля,
              ювілей, корпоратив чи хрестини — простір ресторану легко
              трансформується під ваш формат, зберігаючи свою родзинку —
              панораму старого Львова за вікнами.
            </p>
            <p className="text-[#252526] 2xl:w-[722px] lg:w-[520px] xl:w-[620px] md:w-[420px]  md:text-[14px]  w-[319px] uppercase lg:text-[18px]  lg:leading-[120%] text-[12px] ">
              Основна бенкетна зала на 8-му поверсі вміщує до 80 гостей, а
              стильний лаунж з караоке — до 40. Ми подбаємо про кожну деталь,
              щоб ваше свято було бездоганним
            </p>
          </div>
          <button onClick={()=>onOpenModal('menu')} className="uppercase lg:text-[14px] text-[12px] font-semibold bg-[#8C331B] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B] lg:px-[22px] py-[12.5px] px-[23px]  lg:py-[13px] rounded-full lg:mt-[45px] mt-[26px]">
            бенкетне меню
          </button>
        </div>
        <div className="md:flex hidden  border-[#B3B3B3]  "></div>
      </div>
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 border-x md:border-b-0   border-y border-[#B3B3B3] w-full">
        <div className="flex items-center justify-center px-5 py-5  ">
          <img
            src={wedFst}
            alt=""
            className="md:w-full md:h-full  w-[300px] h-[310px]  2xl:max-h-[620px] xl:max-h-[520px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-5 md:border-x border-y md:border-y-0 border-[#B3B3B3]  py-5 ">
          <img
            src={wedScd}
            alt=""
            className="md:w-full md:h-full  w-[300px]  2xl:max-h-[620px]  xl:max-h-[520px] h-[392px] object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-5 py-5 ">
          <img
            src={wedTrd}
            alt=""
            className="md:w-full md:h-full  2xl:max-h-[620px]  xl:max-h-[520px] w-[300px] h-[316px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
