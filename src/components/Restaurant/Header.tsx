import headerImg from "../../assets/Terrase/header.jpg";

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

      <h1 className="uppercase font-cofo xl:text-[198px] text-[64px] font-normal text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent">
        ruff
      </h1>

      <h4 className="font-cofo text-[18px] font-semibold w-[300px] lg:w-fit text-white leading-[22.68px] text-center uppercase xl:mt-4 mt-7.5">
        на гастрономічній висоті
      </h4>

      <div className="flex lg:flex-row flex-col lg:space-x-[13px] lg:spact-y-0 space-y-[12px] mt-[88px]">
        <button className="font-cofo font-extrabold uppercase text-white bg-[#8C331B] hover:cursor-pointer px-9 py-3 rounded-4xl text-md">
          меню
        </button>
        <button className="font-cofo font-extrabold uppercase border border-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer px-9 py-3 rounded-4xl text-md">
          забронювати стіл
        </button>
      </div>

      <div className=" absolute right-0 lg:top-1/3 lg:bottom-0 bottom-1/3   transform -translate-y-1/2 rotate-[-90deg] origin-bottom-right bg-[#252526] rounded-full py-[13px] px-[25px] ">
        <p className="uppercase text-white font-cofo font-bold tracking-widest text-[12px] lg:text-[16px] lg:leading-[20px]  ">
          вартість банкету
        </p>
      </div>
    </div>
  );
};
