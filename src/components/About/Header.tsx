
import headerImg from "../../assets/About/header.png";


export const AboutHeader = ()=>{

    return(
        <div className="relative w-full h-[1260px] flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-10"></div>
        <div className="absolute inset-0 bg-[#25252659] z-10"></div>
      
        <img
          src={headerImg}
          alt="headerImg"
          className="absolute inset-0 w-full h-full object-cover object-[20%_40%] z-0"
        />
  
  <h4 className="font-cofo z-20 text-[#FFFFFF]  leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center md:mb-4">
  CТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
  <span className="font-blessed md:font-extrabold block text-center text-[13px] md:text-3xl ml-2 md:inline ">
    Львів
  </span>
</h4>

  
        <h1 className="font-cofo md:text-[198px]  text-[64px] font-normal z-20 text-[#FFFFFF] md:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
          EUROHOTEL
        </h1>
        <h4 className="font-cofo text-[18px] font-medium z-20  text-white leading-[22.68px] text-center underline-offset-[from-font] md:mt-4 mt-7.5">
          ПРОСТІР, ЩО ОГОРТАЄ ТЕПЛОМ, МІСТО, ЯКЕ НАДИХАЄ.
          <span className="md:block font-extrabold text-[18px]  leading-[22.68px] text-center underline-offset-[from-font] decoration-none hidden">
            Євроготель — ваша особлива історія львівських вражень
          </span>
        </h4>
        <button className=" font-cofo font-extrabold uppercase z-20 bg-[#EDE8E5] hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl text-md">забронювати</button>
        
      </div>
    )
}