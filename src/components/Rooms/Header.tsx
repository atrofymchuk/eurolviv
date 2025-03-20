import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { headerPhoto } from "../../store/exportsImg";
import { Link } from "react-router-dom";

export const Header = () => {
  const {t} = useTranslation()
  return (
    <div className="w-full relative">
      <InViewWrapper> 

      <img
        src={headerPhoto}
        alt="preview"
        className="object-cover w-full lg:h-[1181px]  h-[808px]"
        />
        </InViewWrapper>
      <div
        className="absolute inset-0 "
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                 linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.36%, #252526 100%)`,
        }}
      ></div>

      <div className="absolute inset-0 flex flex-col  items-center justify-center text-center text-white z-10">
        <h4 className="uppercase font-cofo leading-[22.68px] font-cofo-medium underline text-sm decoration-transparent xl:mb-4">
          {t("global.createdFor")}
          <span className="font-blessed xl:font-extrabold normal-case block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            {t("global.whereTo")}
          </span>
        </h4>
        <h1 className="font-cofo xl:text-[198px] uppercase text-[64px] font-normal z-20  xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
          {t("rooms.header.title")}
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] lg:pt-[46px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
          {t("rooms.header.desc")}
        </p>
        <Link
        to={"/booking"}
        className=" font-cofo-medium uppercase text-[#252526] bg-[#EDE8E5]  hover:cursor-pointer px-9 mt-8 py-3 rounded-4xl z-10 text-md"
      >
        {t("buttons.book")}
      </Link>
      </div>
    </div>
  );
};
