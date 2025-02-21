import { Link } from "react-router-dom";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";

export const Cards = () => {
  const { specialOffers } = useSpecialOffersStore();

  return (
    <div className="flex items-center justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-[#C7C7C7] lg:pt-[50px] pt-[38px] pb-[42px]">
    {specialOffers.map((el, index) => {
      const isLastRowItem = index >= specialOffers.length - (specialOffers.length % 3 || 3);
      const isFirstRow = index < 3; 
      const isFirstCol = index % 3 === 0;

      return (
        <div
        key={el.title}
        className={`lg:h-[700px] lg:w-[573px] w-[297px] h-[483px] lg:p-5 p-3 relative border-[#C7C7C7] flex flex-col justify-between
        border-t lg:border-t-none
        ${index == specialOffers.length - 1 ? "border-b" : ""}
        ${!isFirstRow ? "border-t" : "lg:border-t"} 
        ${!isFirstCol ? "lg:border-l" : ""} 
        ${!isLastRowItem ? "" : "lg:border-b"}`}
      >
        <div>
          <img
            src={el.src}
            alt={el.title}
            className="lg:w-[529px] lg:h-[510px] object-cover w-[273px] h-[264px]"
          />
          
          <h4 className="uppercase text-[24px] tracking-[-0.05em] leading-[22px] 
          font-semibold pt-[20px] text-[#252526] lg:text-[32px] lg:leading-[26px] min-h-[60px] flex items-center">
            {el.title}
          </h4>
      
          <p className="uppercase text-[12px] text-[#8F8F8F] lg:text-[18px] lg:leading-[17px] leading-[11px] lg:w-fit mt-3">
            {el.desc}
          </p>
        </div>
      
        <div className="text-start w-full lg:hidden mt-auto mb-[20px]">
          <Link
            to="/special-offers"
            className="font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase text-[12px] xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo"
          >
            детальніше
          </Link>
        </div>
      </div>
      
      );
    })}
  </div>
</div>

  );
};
