import list from "../../assets/icons/Modal/list.svg";

type OfferDetailsColumnToProps = {
    title:string
    items:string[]
}



export const OfferDetailsColumn = ({ title, items }:OfferDetailsColumnToProps) => {
  return (
    <div className="flex flex-col col-span-2 border-x border-[#C7C7C7] w-[287px] lg:ps-[36px] lg:pt-[30px] lg:w-[697px] pt-[23px] pb-[23px] lg:pb-0">
    <h1 className="uppercase lg:text-[36px] lg:leading-[38.9px] tracking-[-0.07px] text-[#252526] text-[24px] leading-[19.5px] text-center lg:text-start">
      {title}
    </h1>

    <ul className="lg:space-y-[21px]  lg:mt-[28px] lg:w-[529px] text-[#6B6B6B] lg:pb-5 mt-[27px] ps-[19px]">
        {items.map((el)=>
        <li className="uppercase flex items-start lg:gap-3 gap-x-2 lg:text-[16px] text-[12px] lg:leading-[20.4px] lg:tracking-[-0.04em] text-[#6B6B6B] w-[233px] lg:w-fit">
        <img
          src={list}
          alt={el}
          className="w-[17px] h-[17px] lg:w-[22px] lg:h-[22px]"
        />
        {el}
      </li>)}
      
      
    </ul>
  </div>
  );
};

