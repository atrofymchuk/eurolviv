import { useState } from "react";
import headerImg from "../../assets/About/header.png";
import OrderModal from "../OrderModal";

export const AboutHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative w-full h-[1260px] flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-[-9]"></div>
      <div className="absolute inset-0 bg-[#25252659] z-[-9]"></div>

      <img
        src={headerImg}
        alt="headerImg"
        className="absolute inset-0 w-full h-full object-cover object-[20%_40%] z-[-10]"
      />

      <h4 className="font-cofo text-[#FFFFFF]  leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center xl:mb-4">
        CТВОРЕНИЙ ЩОБ ЗАКОХУВАТИ У
        <span className="font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline ">
          Львів
        </span>
      </h4>

      <h1 className="font-cofo xl:text-[198px]  text-[64px] font-normal  text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
        EUROHOTEL
      </h1>
      <h4 className="font-cofo text-[18px] font-medium  w-[300px] lg:w-fit  text-white leading-[22.68px] text-center underline-offset-[from-font] xl:mt-4 mt-7.5">
        ПРОСТІР, ЩО ОГОРТАЄ ТЕПЛОМ. МІСТО, ЯКЕ НАДИХАЄ.
        <span className="xl:block font-extrabold text-[18px]  leading-[22.68px] text-center underline-offset-[from-font] decoration-none hidden">
          Євроготель — ваша особлива історія львівських вражень
        </span>
      </h4>
      <button onClick={()=>setIsModalOpen(true)} className=" font-cofo font-extrabold uppercase  bg-[#EDE8E5]  hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl text-md">
        забронювати
      </button>
<OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
