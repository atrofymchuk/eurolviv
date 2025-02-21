import { useModalStore } from "../../store/useModalStore";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";
import { Card } from "./Card";
import { useNavigate } from "react-router-dom";

export const Cards = () => {
  const { specialOffers,  } = useSpecialOffersStore();
  const {openModalSpecialOffer} =useModalStore()

  const navigate = useNavigate();

const handleCardClick = (url: string) => {
  navigate(`/special-offers/${url}`); 
  openModalSpecialOffer();
};

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-[295px] lg:grid-cols-[573px_573px_572px] border-[#C7C7C7] border-l border-r border-t pb-[42px]">
        <div className="lg:block hidden border-[#C7C7C7] lg:pt-[51px] pt-[38px] "></div>
        <div className=" border-[#C7C7C7] lg:border-s lg:pt-[51px] pt-[38px] "></div>
        <div className="lg:block hidden border-s border-[#C7C7C7] lg:pt-[51px] pt-[38px]  "></div>

        {specialOffers.map((el, index) => {
          const isFirstCol = index % 3 === 0;

          return (
            <div
              key={el.title}
              className={`border-b border-[#C7C7C7] ${
                isFirstCol ? "" : "lg:border-l"
              } border-t`}
            >
              <div
                onClick={()=>handleCardClick(el.url)}
                className={`lg:h-[700px] lg:w-[573px] w-[297px] h-[483px] lg:p-5 p-3 flex flex-col hover:cursor-pointer                  
                `}
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
