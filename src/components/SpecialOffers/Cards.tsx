import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { Card } from "./Card";

export const Cards = () => {
  const { specialOffers } = useSpecialOffersStore();

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[573px_573px_572px] border-[#C7C7C7] border-l border-r border-t pb-[42px]">
        <div className="lg:block hidden border-[#C7C7C7] lg:pt-[51px] pt-[38px] "></div>
        <div className=" border-[#C7C7C7] lg:pt-[51px] pt-[38px] "></div>
        <div className="lg:block hidden border-[#C7C7C7] lg:pt-[51px] pt-[38px] border-s "></div>
        {specialOffers.map((el, index) => {
          const isFirstCol = index % 3 === 0;

          return (
            <div
              key={el.title}
              className={`border-b border-[#C7C7C7] ${isFirstCol ? "" : "lg:border-l" } border-t`}
            >
              <div className={`lg:h-[700px] lg:w-[573px] w-[297px] h-[483px] lg:p-5 p-3 flex flex-col justify-between 
                
                `}>
                <Card
                  src={el.src}
                  classes={el.classes}
                  desc={el.desc}
                  title={el.title}
                  offer={el.offer}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
