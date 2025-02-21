import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { Card } from "./Card";

export const Cards = () => {
  const { specialOffers } = useSpecialOffersStore();

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-[#C7C7C7] lg:pt-[50px] pt-[38px] pb-[42px]">
        {specialOffers.map((el, index) => {
          const isLastRowItem =
            index >= specialOffers.length - (specialOffers.length % 3 || 3);
          const isFirstRow = index < 3;
          const isFirstCol = index % 3 === 0;

          return (
            <div key={el.title}>
              <div
                className={`lg:h-[700px] lg:w-[573px] w-[297px] h-[483px] lg:p-5 p-3 relative border-[#C7C7C7] flex flex-col justify-between
        border-t lg:border-t-none
        ${index == specialOffers.length - 1 ? "border-b" : ""}
        ${!isFirstRow ? "border-t" : "lg:border-t"} 
        ${!isFirstCol ? "lg:border-l" : ""} 
        ${!isLastRowItem ? "" : "lg:border-b"}`}
              >
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
