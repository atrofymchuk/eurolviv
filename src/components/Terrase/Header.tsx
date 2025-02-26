import headerImg from "../../assets/Terrase/header.gif";

export const TerraseHeader = () => {
  return (
    <div className="relative w-full lg:h-[1157px] h-[808px] flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-[-9]"></div>
      <div className="absolute inset-0 bg-[#25252659] z-[-9]"></div>

      <img
        src={headerImg}
        alt="headerImg"
        className="lg:h-[1157px] absolute inset-0 w-full h-full object-cover object-[20%_40%] z-[-10]"
      />

      <h4 className="font-cofo text-[#FFFFFF] leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center xl:mb-4">
        <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
          Ресторан
        </span>
      </h4>
      <div className="space-y-[53px] flex flex-col items-center">


      <h1 className="uppercase font-cofo xl:text-[198px] text-[64px] font-normal text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent">
        тераса ruff
      </h1>

      <h4 className="font-cofo text-[18px]  w-[300px] lg:w-[737px] text-white leading-[22.68px] text-center uppercase ">
      Тераси RUFF — це трирівневий простір на даху Євроготелю, звідки відкриваються найкращі панорами Львова. Тут хмари пропливають так близько, що здається — простягни руку і торкнешся їх, а історичне місто просто як на долоні.
      </h4>

      <div className="flex lg:flex-row flex-col lg:space-x-[13px] lg:spact-y-0 lg:space-y-0 space-y-[12px]  ">
   
        <button className="font-cofo font-extrabold uppercase border border-[#FFFFFF] bg-[#FFFFFF] text-[#252526]  hover:cursor-pointer px-9 py-[13px] rounded-4xl text-md">
          забронювати стіл
        </button>
      </div>
      </div>

    </div>
  );
};
