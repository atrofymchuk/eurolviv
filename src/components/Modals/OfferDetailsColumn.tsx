import { useTranslation } from "react-i18next";
import { list } from "../../store/exportsIcons";

type OfferDetailsColumnToProps = {
    title:string
    items:string[]
}



export const OfferDetailsColumn = ({ title, items }:OfferDetailsColumnToProps) => {
  const {t} = useTranslation()  
  return (
    <div className="flex flex-col col-span-2 md:col-span-1 px-5  md:border-b-0 border-b border-[#C7C7C7]  md:border-e lg:ps-[36px] lg:pt-[30px] w-full pt-[23px] pb-[23px] lg:pb-0">
    <h1 className="uppercase xl:text-[36px] md:text-[32px] lg:leading-[38.9px] tracking-[-0.07px] text-[#252526] text-[24px] leading-[19.5px] text-center lg:text-start">
        {t(title)}
    </h1>

    <ul className="lg:space-y-[10px]  2xl:mt-[28px]  text-[#6B6B6B] 2xl:pb-5 mt-[27px] space-y-1 ">
        {items.map((el)=>
        <li className="uppercase flex items-start lg:gap-3 gap-x-2 xl:text-[16px] md:text-[14px] text-[12px] lg:leading-[20.4px]  lg:tracking-[-0.04em] text-[#6B6B6B]  w-[90%]">
        <img
          src={list}
          alt={el}
          className="w-[17px] h-[17px] lg:w-[22px] lg:h-[22px]"
        />
        {t(el)}
      </li>)}
      
      
    </ul>
  </div>
  );
};

