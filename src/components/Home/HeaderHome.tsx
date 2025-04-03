import { t } from "i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { headerHome } from "../../store/exportsImg";
// import { HeaderBookingForm } from "../common/HeaderPage/HeaderBookingForm";
export const HeaderHome = () => {
  return (
    <div className="w-full relative">
      <InViewWrapper>

      <img
        src={headerHome}
        alt="preview"
        className="object-cover w-full lg:h-[1171px]  h-[808px]"
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
        <h4 className=" uppercase leading-[22.68px] font-cofo-medium underline text-[12px] decoration-transparent lg:text-[18px] ">
          {t("global.createdFor")}
          <span className="normal-case font-blessed xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            {t("global.whereTo")}
          </span>
        </h4>
        <h1 className=" xl:text-[198px] uppercase text-[64px] font-normal z-20  2xl:text-[289px]  leading-[100%] tracking-[-0.1em] text-center underline decoration-transparent ">
        {t("global.eurohotel")}
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] lg:pt-[6px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
          {t("home.header.description")}
        </p>
      {/* <HeaderBookingForm /> */}
      </div>

    </div>
  );
};
