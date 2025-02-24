import karaokeFst from "../../assets/Terrase/Karaoke/Fst.png";
import karaokeScd from "../../assets/Terrase/Karaoke/Scnd.png";

export const Karaoke = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid lg:grid-cols-[639px_513px_637px] grid-cols-[334px] ">
        <div className="flex flex-col border border-[#B3B3B3] items-center justify-center lg:h-[561px] h-[389px]">
          <div className="flex  flex-col justify-center items-center text-center lg:text-start ">
            <p className="font-blessed xl:font-extrabold lg:w-[565px] w-[267px] text-[16px] xl:text-[36px] lg:leading-[25.2px] ml-2 xl:inline lg:pb-[19px] ">
              Ruff
            </p>
            <h1 className="uppercase lg:text-[100px]  text-[64px] leading-[51px] lg:leading-[67px] lg:w-[565px] w-[299px] tracking-[-7%] ">
              караоке лаунж
            </h1>
            <div className="lg:space-y-5 space-y-2 lg:pt-[34px] flex flex-col">
              <p className="uppercase text-[#252526] lg:text-[18px] lg:leading-[22.6px] leading-[15px] text-[12px]  lg:w-[565px] w-[299px] lg:order-none order-2 ">
                Караоке-лаунж RUFF підхоплює вас на хвилі музики й підносить іще
                вище. Професійне обладнання і величезна колекція пісень чекають
                своїх зірок, а атмосферу релаксу доповнюють запашні кальяни.
              </p>
              <p className="uppercase text-[#252526] lg:text-[18px] lg:leading-[22.6px] leading-[15px]  text-[12px] lg:w-[565px] w-[299px] lg:order-none order-3">
                Панорамні вікна пропонують найкращий у місті фон для музичних
                експериментів — тут ваш голос звучить у дуеті з краєвидом
                вечірнього Львова.
              </p>
              <p className="uppercase font-semibold lg:text-[18px] lg:mt-[20px] text-[12px] leading-[15px] lg:order-none order-1 mt-[13px] mb-[14px]">
                Караоке: пт-нд з 20:00{" "}
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center border-[#B3B3B3] border lg:border-s-0 border-t-0 lg:border-t h-[363px] lg:h-full">
          <img
            src={karaokeFst}
            alt=""
            className="lg:w-[475px] lg:h-[517px] w-[299px] h-[325px]"
          />
        </div>
        <div className=" flex items-center justify-center border-[#B3B3B3] border lg:border-s-0 border-t-0 lg:border-t h-[363px] lg:h-full">
          <img
            src={karaokeScd}
            alt=""
            className="lg:w-[583px] lg:h-[518px] w-[300px] h-[325px] "
          />
        </div>
      </div>
    </div>
  );
};
