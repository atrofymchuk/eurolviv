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
          className="lg:h-[1157px] absolute inset-0 w-full h-full object-cover  z-[-10]"
        />
      </InViewWrapper>
      <div className="flex flex-col items-center relative">
        <h4 className="absolute text-[#FFFFFF] md:-translate-y-10 -translate-y-7 leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center xl:mb-4 lg:mb-6 md:mb-1">
          <span className="font-blessed xl:font-extrabold block text-center text-[13px] lg:text-[28px] xl:text-[36px] lg:text-2xl md:text-xl ml-2 xl:inline ">
            {t("restaurant.header.title")}
          </span>
        </h4>

        <h1 className="uppercase font-cofo xl:text-[357px] lg:text-[238px] md:text-[208px]  text-[96px]  font-normal text-[#FFFFFF] xl:leading-[80%] md:leading-[60%] leading-[70%] tracking-[-0.1em] text-center underline decoration-transparent">
          ruff
        </h1>

        <h4 className="font-cofo text-[14px] xl:text-[18px] lg:text-[16px] leading-[104%]  w-fit text-white  text-center uppercase md:mt-7  xl:mt-4 mt-3">
          {t("restaurant.header.desc")}
        </h4>
        <div className="flex lg:flex-row flex-col w-fit lg:space-x-[13px] lg:space-y-0 space-y-[12px] mt-[53px] md:max-w-full max-w-[171px]">
          <button
            onClick={() => onOpenModal("menu")}
            className="font-cofo-medium uppercase text-white bg-[#8C331B] text-[12px] md:text-[13px] lg:text-[14px] 
         hover:cursor-pointer md:px-[69.5px] md:py-[13px] px-[70px] py-[11px] rounded-full text-md hover:text-[#8C331B] hover:bg-white"
          >
            {t("restaurant.menu.menu")}
          </button>
          <button className="font-cofo-medium uppercase px-[10px] py-[10px] border border-[#FFFFFF] text-[#FFFFFF] hover:cursor-pointer md:px-[19.5px] md:py-[13px] rounded-4xl  md:text-[13px] lg:text-[14px] text-[12px] ">
            {t("buttons.bookTable")}
          </button>
        </div>
      </div>
    </div>
  );
};
