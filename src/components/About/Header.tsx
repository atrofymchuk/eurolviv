
import headerImg from "../../assets/About/header.png";


export const AboutHeader = ()=>{

    return(
        <div className="relative w-full h-screen flex items-center justify-center flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-10"></div>
        <div className="absolute inset-0 bg-[#25252659] z-10"></div>
      
        <img
          src={headerImg}
          alt="headerImg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
  
        <h4 className="font-cofo z-20 text-[#FFFFFF] leading-[22.68px] font-semibold underline decoration-transparent inline-flex items-center mb-4">
          CТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
          <span className="font-blessed font-extrabold text-3xl ml-2">Львів</span>
        </h4>
  
        <h1 className="font-cofo text-[198px] font-normal z-20 text-[#FFFFFF] leading-[154.83px] tracking-[-0.1em] text-center underline decoration-transparent ">
          EUROHOTEL
        </h1>
        <h4 className="font-cofo text-[18px] font-medium z-20  text-white leading-[22.68px] text-center underline-offset-[from-font] mt-4">
          ПРОСТІР, ЩО ОГОРТАЄ ТЕПЛОМ, МІСТО, ЯКЕ НАДИХАЄ.
          <span className="block font-extrabold text-[18px]  leading-[22.68px] text-center underline-offset-[from-font] decoration-none">
            Євроготель — ваша особлива історія львівських вражень
          </span>
        </h4>
        <button className=" font-cofo font-extrabold uppercase z-20 bg-[#EDE8E5] hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl text-md">забронювати</button>
        
      </div>
    )
}