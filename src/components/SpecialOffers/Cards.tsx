import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Cards = () => {
  const { specialOffers } = useSpecialOffersStore();
  const {   onOpenModal } = useModalStore();

  const navigate = useNavigate();

  const handleCardClick = (url: string) => {
    navigate(`/special-offers/${url}`);
    onOpenModal('specialOffer');
  };

  return (
    <div className="flex items-center justify-center px-9">
      <div className="grid w-full max-w-[1720px] grid-cols-1 md:grid-cols-2 lg:grid-cols-[33.31%_33.43%_33.26%] border-[#C7C7C7] border-t border-l border-r pb-10">
        <div className="hidden lg:block border-[#C7C7C7] lg:pt-[51px] pt-[38px]"></div>
        <div className="md:col-span-2 lg:col-span-1 lg:border-x border-[#C7C7C7] lg:pt-[51px] pt-[38px]"></div>
        <div className="hidden lg:block border-[#C7C7C7] lg:pt-[51px] pt-[38px]"></div>

        {specialOffers.map((el, index) => {
          const isMiddleCard = index % 3 === 1;
          const isFirstInRowLg = index % 3 === 0;
          const isLastRowLg = index >= specialOffers.length - 3;
          const isLastRowMd = specialOffers.length % 2 === 0
            ? index >= specialOffers.length - 2
            : index === specialOffers.length - 1;
          const isMdSecondColumn = index % 2 === 1 && specialOffers.length > 1;

          return (
            <div
              key={el.title}
              className={`border-t border-[#C7C7C7] 
                ${isMiddleCard ? "lg:border-x" : ""}
                ${isMdSecondColumn ? "md:border-l" : ""}
                ${isFirstInRowLg ? "lg:border-l-0" : ""}
                ${isLastRowLg ? "lg:border-b" : ""}
                ${isLastRowMd ? "md:border-b" : ""}
                ${index === specialOffers.length - 1 ? "border-b " : ""}
              `}
            >
              <div
                onClick={() => handleCardClick(el.url)}
                className="w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[700px] p-3 sm:p-5 flex flex-col hover:cursor-pointer"
              >
                <Card
                  src={el.src}
                  classes={el.classes}
                  desc={el.cardDesc}
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
