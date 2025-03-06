import { useTranslation } from "react-i18next";
import headerImg from "../../assets/About/header.webp";
import { useModalStore } from "../../store/useModalStore";
import { InViewWrapper } from "../InViewWrapper";


export const AboutHeader = () => {
  const {onOpenModal } = useModalStore();
  const {t} = useTranslation()



  return (
    <div className="relative w-full lg:h-[1186px] h-[821px] flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-[-9]"></div>
      <div className="absolute inset-0 bg-[#25252659] z-[-9]"></div>

      <InViewWrapper>


        <img
          
          src={headerImg}
          alt="headerImg"
          className="absolute inset-0 w-full h-full object-cover object-[20%_40%] z-[-10]"
          />
      </InViewWrapper>

      <h4 className="font-cofo text-[#FFFFFF]  uppercase leading-[22.68px] font-semibold underline text-sm decoration-transparent items-center xl:mb-4">
        {t("global.createdFor")}
        <span className="font-blessed xl:font-extrabold normal-case block text-center text-[13px] xl:text-[32px] ml-2 xl:inline ">
          {t("global.whereTo")}
        </span>
      </h4>

      <h1 className="uppercase font-cofo xl:text-[198px]  text-[64px] font-normal  text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
        {t("global.eurohotel")}
      </h1>
      <h4 className="font-cofo text-[18px] font-medium uppercase w-[300px] lg:w-fit  text-white leading-[22.68px] text-center underline-offset-[from-font] xl:mt-4 mt-7.5">
        {t("about.header.desc.0")}
        <span className="xl:block font-extrabold text-[18px] uppercase leading-[22.68px] text-center underline-offset-[from-font] decoration-none hidden">
          {t("about.header.desc.1")}
        </span>
      </h4>
      <button
        onClick={() => onOpenModal('order')}
        className=" font-cofo font-extrabold uppercase  bg-[#EDE8E5]  hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl text-md"
      >
        {t("buttons.book")}
      </button>
    </div>
  );
};
