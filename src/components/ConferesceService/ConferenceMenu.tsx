import { useTranslation } from "react-i18next";

export const ConferenceMenu = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full flex flex-col ">
      <div className="absolute h-[400px] z-[-1] grid w-full lg:grid-cols-[21%_42%_37%] grid-cols-1  ">
        <div className=" border-[#C7C7C7] border-x lg:border-x-0 lg:w-full w-[79.1%] mx-auto lg:mx-0"></div>
        <div className="lg:border-x hidden lg:flex border-[#C7C7C7] lg:w-full w-[calc(100%-7.5%)]"></div>
        <div className="hidden lg:flex border-[#C7C7C7] lg:w-full w-[calc(100%-7.5%)]"></div>
      </div>

      <div className="w-full text-center z-10 flex flex-col items-center justify-center pt-[83px] sm:pt-[50px] lg:pt-[120px] xl:pt-[130px] 2xl:pt-[150px]">
        <p className="uppercase text-[#242425] text-[14px] lg:text-[24px] font-cofo-medium tracking-[-0.05em] lg:w-full w-[257px]">
          {t("conferenceService.conferenceMenu.title")}
        </p>
        <h1 className="uppercase text-[32px] sm:text-[42px] md:text-[62px] lg:text-[100px] leading-[87%] tracking-tight lg:w-full w-[257px] sm:w-[400px]  pb-[53px] pt-[12px]">
          {t("conferenceService.conferenceMenu.desc")}
        </h1>
      </div>
    </div>
  );
};
