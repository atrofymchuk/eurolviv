import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { Card } from "./Card";
import cn from "classnames";
import { useNavigate, Link } from "react-router-dom";
export const Cards = () => {
  const { specialOffers } = useSpecialOffersStore();
  const { onOpenModal } = useModalStore();
  const navigate = useNavigate();

  const handleCardClick = (url: string) => {
    onOpenModal("specialOffer");
    navigate(`/special-offers/${url}`);
  };

  return (
    <div className="flex items-center justify-center  md:pb-[82px] ">
      <div className="grid w-[79.7%] lg:w-[89.58%] grid-cols-1 md:grid-cols-2 lg:grid-cols-[33.31%_33.43%_33.26%] border-[#C7C7C7] border-t border-l border-r pb-10 md:pb-0">
        <div className="hidden lg:block border-[#C7C7C7] lg:pt-[51px] 2xl:pt-[2.66vw] pt-[10.13vw]"></div>
        <div className="md:col-span-2 lg:col-span-1 lg:border-x border-[#C7C7C7] lg:pt-[51px] 2xl:pt-[2.66vw] pt-[10.13vw]"></div>
        <div className="hidden lg:block border-[#C7C7C7] lg:pt-[51px] 2xl:pt-[2.66vw] pt-[10.13vw]"></div>

        {specialOffers.map((el, index) => {
          const isMiddleCard = index % 3 === 1;
          const isFirstInRowLg = index % 3 === 0;
          const isLastRowLg = index >= specialOffers.length - 3;
          const isLastRowMd =
            specialOffers.length % 2 === 0
              ? index >= specialOffers.length - 2
              : index === specialOffers.length - 1;
          const isMdSecondColumn = index % 2 === 1 && specialOffers.length > 1;

          return (
            <div
              key={el.title}
              className={cn(`border-t border-[#C7C7C7] 
                ${isMiddleCard ? "lg:border-x" : ""}
                ${isMdSecondColumn ? "md:border-l" : ""}
                ${isFirstInRowLg ? "lg:border-l-0" : ""}
                ${isLastRowLg ? "lg:border-b" : ""}
                ${isLastRowMd ? "md:border-b" : ""}
                ${index === specialOffers.length - 1 ? "border-b border-s-0! " : ""}
              `)}
            >
              <Link
                to={`/special-offers/${el.url}`}
                onClick={() => onOpenModal('specialOffer')}
                className="w-full 2xl:p-[1.04vw] xl:p-[0.94vw] lg:p-[1.17vw] flex flex-col hover:cursor-pointer 2xl:h-[36.42vw] xl:h-[39.06vw] lg:h-[39.99vw] md:h-[520px] "
              >
                <Card
                  src={el.src}
                  classes={el.classes}
                  desc={el.cardDesc}
                  title={el.title}
                  offer={el.offer}
                  url={el.url}
                  handleCardClick={handleCardClick}
                  index={index}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
