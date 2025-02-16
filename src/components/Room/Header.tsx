import headerPhoto from "../../assets/Rooms/header.jpg"; 



export const Header = () => {
  return (
    <div className="w-full relative">
      <img src={headerPhoto} alt="" className="object-cover w-full lg:h-[1181px] h-[821px]" />
      
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.25%, #252526 100%),
                       linear-gradient(0deg, rgba(37, 37, 38, 0.2), rgba(37, 37, 38, 0.2))`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        <h4 className="font-cofo leading-[22.68px] font-semibold underline text-sm decoration-transparent xl:mb-4">
          СТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
          <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            Львів
          </span>
        </h4>

        <h1 className="text-white uppercase whitespace-pre-line font-cofo xl:text-[198px] flex flex-col text-[48px] font-normal z-20 xl:leading-[154.83px] leading-[39.13px] tracking-[-0.1em] text-center underline decoration-transparent">
          {"люкс двокімнатний".split(" ").map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </h1>

        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] w-[291px] lg:pt-[46px] pt-[20px]  text-[12px] leading-[15.12px] px-[10px]">
          Класика з душею-затишок, який зустрічає вас в історичному центрі Львова
        </p>
      </div>

      
      <div className="absolute bottom-10 w-full  lg:justify-center">
        <div className="flex flex-col lg:flex-row   text-center flex-wrap lg:justify-between w-full lg:px-[74px] ">
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            кількість номерів: <span className="text-[#FFFFFF]">4</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            вид з номера: <span className="text-[#FFFFFF]">на вулицю</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            час заїзду: <span className="text-[#FFFFFF]">14:00</span>
          </p>
          <p className="text-[#B3B3B3] lg:text-[16px] lg:leading-[20px] uppercase font-semibold">
            час виїзду: <span className="text-[#FFFFFF]">12:00</span>
          </p>
        </div>
      </div>
    </div>
  );
};
