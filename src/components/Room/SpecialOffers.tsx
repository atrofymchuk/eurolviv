import { Link } from "react-router-dom";
import { useSpecialOffersStore } from "../../store/useSpecialOffersStore";

export const SpecialOffers = () => {
  const { specialOffers } = useSpecialOffersStore();

  return (
    <div className="w-full h-[588px] lg:h-[922px] flex justify-center items-center overflow-hidden">
      <div className="relative border-s border-[#C7C7C7] h-full w-[296px] mb-[71px] lg:mb-[75px] lg:w-[1595px]">
        <div className="absolute w-screen">
          <h1 className="uppercase text-[32px] mb-[24px] lg:leading-[81px] lg:tracking-[-0.04em] ms-[20px] lg:ms-[19px] lg:mt-[110px] lg:mb-[63px] lg:w-full lg:text-[100px] w-[244px] leading-[28px] mt-[82px]">
            спеціальні ПРОПОЗИЦІЇ
          </h1>

          <div className="flex overflow-hidden">
            <div className="flex overflow-x-hidden ">
              {specialOffers.map((el, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center lg:items-start w-[269px] lg:w-[484px] lg:p-[20px] lg:h-[669px] border-[#C7C7C7] border-t border-e border-b py-[15px] relative h-[426px] shrink-0"
                >
                  <img src={el.src} alt="" className={` w-[240px] h-[232px] lg:w-[444px] lg:h-[429px] object-cover ${el.classes}`} />
                  <p className="absolute lg:left-[35px] lg:top-[35px] left-[23px] top-[23px] uppercase lg:w-fit w-[150px] border bg-[#FFFFFF] text-[#A47762] lg:leading-[20px] lg:py-[13px] py-[7px] px-[12px] lg:px-[22px] rounded-full font-semibold lg:text-[16px] text-[10px] leading-[12px]">
                    {el.offer}
                  </p>

                  <h4 className="uppercase text-[20px] tracking-[-0.05em] leading-[22px] font-semibold pt-[20px] text-[#252526] lg:pt-[28px] lg:text-[24px] lg:leading-[26px]">
                    {el.title}
                  </h4>
                  <p className="uppercase text-[10px] w-[219px] pt-[13px] text-[#8F8F8F] lg:text-[16px] lg:leading-[17px] leading-[11px] lg:w-fit">
                    {el.cardDesc}
                  </p>
                  <div className="text-start w-full px-[15px] lg:px-0  mt-auto lg:mb-4 mb-2">
                    <Link
                      to="/special-offers"
                      className="mt-auto font-semibold border border-[#8C331B] text-[#8C331B] px-4 py-3 rounded-full uppercase text-[12px] xl:text-base hover:cursor-pointer hover:bg-[#8C331B] hover:text-white font-cofo"
                    >
                      детальніше
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
