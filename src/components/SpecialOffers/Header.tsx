import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center bg-[#252526] md:pt-[117px] pt-[73px]  px-9">
      <div className="grid w-full  lg:grid-cols-[33.31%_33.43%_33.26%] grid-cols-1 text-[#EDE8E5] text-center lg:text-start max-w-[1720px]">
        <div className="lg:border-s border-x  border-[#515151] flex flex-col items-center lg:items-start text-center lg:text-left py-8 px-6 lg:pt-[96px] lg:pl-[31px] ">
          <h1
            className="uppercase font-cofo text-white leading-tight tracking-tight 
            text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[120px] 2xl:text-[198px] z-1"
          >
            {t("specialOffers.title")}
          </h1>{" "}
          <h1
            className="uppercase font-cofo text-white leading-tight tracking-tight lg:hidden flex 
            text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[120px] 2xl:text-[198px] "
          >
            {t("specialOffers.desc2")}
          </h1>
          <p
            className="relative uppercase font-cofo text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] leading-tight sm:leading-normal 
             mt-4 sm:mt-6 lg:mt-0 "
          >
            {t("specialOffers.desc")}
          </p>
        </div>

        <div className="border-x border-[#515151]  2xl:pt-[267px] 2xl:ps-[25px]  lg:flex hidden flex-col lg:justify-center lg:pt-10 xl:pt-25 ">
          <h1
            className="uppercase font-cofo text-white leading-tight tracking-tight lg:flex hidden 
            text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] xl:text-[120px] 2xl:text-[198px] "
          >
            {t("specialOffers.desc2")}
          </h1>
        </div>

        {/* Порожній блок для балансу в сітці */}
        <div className="border-e border-[#515151]  items-center hidden lg:flex"></div>

        {/* Додатковий блок для мобільних пристроїв */}
        <div className=" border-[#515151] flex items-center lg:hidden"></div>
      </div>
    </div>
  );
};
