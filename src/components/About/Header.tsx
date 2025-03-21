import { useTranslation } from "react-i18next";
import { headerAbout } from "../../store/exportsImg";
import { InViewWrapper } from "../utils/InViewWrapper";
import { BookLink } from "../Buttons/BookLink";

export const AboutHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full lg:h-[1186px] h-[821px] flex items-center justify-center flex-col">
      <div
        className="absolute inset-0 z-5 "
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                 linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.36%, #252526 100%)`,
        }}
      ></div>
      <InViewWrapper>
        <img
          src={headerAbout}
          alt="headerImg"
          className="absolute inset-0 w-full h-full object-cover object-[20%_40%] "
        />
      </InViewWrapper>

      <h4 className="font-cofo text-[#FFFFFF] z-10  uppercase leading-[22.68px] font-cofo-medium lg:text-[18px] underline text-sm decoration-transparent items-center xl:mb-4">
        {t("global.createdFor")}
        <span className="font-blessed xl:font-extrabold normal-case block text-center text-[13px] xl:text-[32px] ml-2 xl:inline ">
          {t("global.whereTo")}
        </span>
      </h4>

      <h1 className="uppercase  xl:text-[198px]  text-[64px] z-10 text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
        {t("global.eurohotel")}
      </h1>
      <h4 className="font-cofo md:text-[18px] text-[14px] font-medium uppercase w-[300px] lg:w-fit z-10  text-white leading-[22.68px] text-center underline-offset-[from-font] xl:mt-4 mt-7.5">
        {t("about.header.desc.0")}
        <span className="xl:block font-cofo-medium text-[18px] uppercase leading-[22.68px] text-center underline-offset-[from-font] decoration-none hidden">
          {t("about.header.desc.1")}
        </span>
      </h4>
      <BookLink className="text-[#252526] mt-4 bg-[#EDE8E5]" to={"/booking"}>{t("buttons.book")}</BookLink>
    </div>
  );
};
