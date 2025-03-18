import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { headerContacts } from "../../store/exportsImg";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full relative">
      <InViewWrapper>
        <img
          src={headerContacts }
          alt="preview"
          className="object-cover w-full  lg:h-[1181px] h-[821px]"
        />
      </InViewWrapper>
      <div className="absolute inset-0 bg-[linear-gradient(2.57deg,rgba(255,255,255,0)_0.95%,#FFFFFF_95.83%)]"></div>

      <div className="absolute inset-0 flex flex-col  items-center justify-center text-center text-black z-10">
        <h4 className="font-cofo leading-[22.68px] uppercase font-semibold underline text-sm decoration-transparent xl:mb-4">
          {t("global.createdFor")}
          <span className="font-blessed normal-case xl:font-extrabold block text-center text-[13px] xl:text-3xl ml-2 xl:inline">
            {t("global.whereTo")}
          </span>
        </h4>
        <h1 className="font-cofo xl:text-[198px]  text-[64px] font-normal z-20 text-[#00000] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.1em] text-center underline decoration-transparent ">
          {t("contacts.header.title")}
        </h1>
        <p className="font-cofo uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] lg:pt-[46px] pt-[30px] w-[335px]  text-[14px] leading-[17.5px]  ">
          {t("contacts.header.desc")}
        </p>
      </div>
    </div>
  );
};
