import karaokeFst from "../../assets/Restaurant/Karaoke/Fst.png";
import karaokeScd from "../../assets/Restaurant/Karaoke/Scnd.png";

export const Karaoke = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 w-[93.16%] mx-auto border-x border-[#B3B3B3] border-t ">
        <div className="flex flex-col  items-center justify-center lg:h-[561px] h-[389px]">
          <div className="flex  flex-col justify-center items-center text-center md:text-start ">
          <p className="font-blessed xl:font-extrabold 2xl:w-[565px] w-[267px] text-[16px] xl:text-[36px]  lg:w-[350px] lg:text-[26px] lg:leading-[25.2px] ml-2 xl:inline pt-4  xl:w-[400px]">
              Ruff
            </p>
            <h1 className="uppercase 2xl:text-[100px] xl:text-[86px] lg:text-[82px] md:text-[56px] text-[64px] leading-[51px] lg:leading-[67px] 2xl:max-w-[525px]  lg:max-w-[350px] xl:max-w-[400px] md:max-w-[250px] max-w-[299px] tracking-[-7%] 2xl:pt-5 ">
              караоке лаунж
            </h1>
            <div className="lg:space-y-5 space-y-2 2xl:pt-[34px] xl:pt-[20px] lg:pt-[10px]  flex flex-col 2xl:max-w-[525px] md:max-w-[250px] max-w-[299px] lg:max-w-[350px] xl:max-w-[400px] ">
              <p className="uppercase text-[#252526] lg:text-[18px] lg:leading-[22.6px] leading-[15px] text-[12px]   lg:order-none order-2 ">
                Караоке-лаунж RUFF підхоплює вас на хвилі музики й підносить іще
                вище. Професійне обладнання і величезна колекція пісень чекають
                своїх зірок, а атмосферу релаксу доповнюють запашні кальяни.
              </p>
              <p className="uppercase text-[#252526] lg:text-[18px] lg:leading-[22.6px] leading-[15px]  text-[12px] lg:order-none order-3">
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

        <div className=" flex items-center justify-center md:border-x border-[#B3B3B3] border-y md:border-y-0  py-5 md:py-0 lg:h-full px-5">
          <img
            src={karaokeFst}
            alt=""
            className="2xl:w-[475px] 2xl:h-[517px] sm:w-[430px] xl:w-[400px] xl:h-[400px]  md:w-[300px] md:h-[280px] sm:h-[425px] w-[299px] h-[325px]"
          />
        </div>
        <div className=" flex items-center justify-center border-b border-[#B3B3B3] md:border-b-0  py-5 md:py-0 lg:h-full px-5" >
          <img
            src={karaokeScd}
            alt=""
            className="2xl:w-[583px] 2xl:h-[518px] sm:w-[430px] xl:w-[420px] xl:h-[420px]  md:w-[300px] md:h-[300px] sm:h-[425px] w-[300px] h-[325px] "
          />
        </div>
      </div>
    </div>
  );
};
