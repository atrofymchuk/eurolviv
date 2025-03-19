import { useModalStore } from "../../store/useModalStore";
import { useTranslation } from "react-i18next";   
import { InViewWrapper } from "../utils/InViewWrapper";
import { headerRestaurant } from "../../store/exportsImg";
export const RestaurantHeader = () => {
  const { onOpenModal } = useModalStore();
  const { t } = useTranslation();
  return (
    <div className="relative w-full lg:h-[1157px] h-[808px] flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-[-9]"></div>
      <div className="absolute inset-0 bg-[#25252659] z-[-9]"></div>
      <InViewWrapper> 

      <img
        src={headerRestaurant}
        alt="headerImg"
        className="lg:h-[1157px] absolute inset-0 w-full h-full object-cover object-[20%_40%] z-[-10]"
        />
        </InViewWrapper>

      <h4 className="font-cofo text-[#FFFFFF] leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center xl:mb-4 lg:mb-6 md:mb-1">
        <span className="font-blessed xl:font-extrabold block text-center text-[13px] lg:text-[28px] xl:text-[36px] lg:text-2xl md:text-xl ml-2 xl:inline">
          {t('restaurant.header.title')}
        </span>
      </h4>

      <h1 className="uppercase font-cofo xl:text-[357px] lg:text-[238px] md:text-[108px] text-[120px] font-normal text-[#FFFFFF] xl:leading-[69%] md:leading-[60%] leading-[70%] tracking-[-0.1em] text-center underline decoration-transparent">
        ruff
      </h1>

      <h4 className="font-cofo text-[14px] xl:text-[38px] lg:text-[26px] leading-[104%] font-semibold w-fit text-white  text-center uppercase xl:mt-4 mt-3.5">
        {t('restaurant.header.desc')}
      </h4>
      <div className="flex lg:flex-row flex-col w-fit lg:space-x-[13px] lg:spact-y-0 lg:space-y-0 space-y-[12px] mt-[88px] md:max-w-full max-w-[171px]">
        <button  onClick={()=>onOpenModal('menu')} className="font-cofo font-extrabold uppercase text-white bg-[#8C331B] text-[12px] md:text-[13px] lg:text-[14px] 
         hover:cursor-pointer md:px-[96px] md:py-[13px] px-[65px] py-[12.5px] rounded-full text-md hover:text-[#8C331B] hover:bg-white">
          {t('restaurant.menu.menu')}
        </button>
        <button className="font-cofo font-extrabold uppercase  py-[12.5px] border border-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer md:px-9 md:py-[13px] rounded-4xl  md:text-[13px] lg:text-[14px] text-[12px] " >
          {t('buttons.bookTable')}
        </button>

      </div>

    </div>
  );
};
