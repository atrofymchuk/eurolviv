import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center bg-[#252526] 2xl:pt-[117px] xl:pt-[102px] lg:pt-[93px] md:pt-[80px] pt-[73px]   px-[38px_40px]">
      <div className="grid w-full  lg:grid-cols-[33.31%_33.43%_33.26%] grid-cols-1 text-[#EDE8E5] text-center lg:text-start max-w-[1720px] ">
        <div className=" border-x  lg:border-e-0 border-[#515151] flex flex-col items-center lg:items-start text-center lg:text-left md:py-20 py-[53px_49px] px-6 lg:pt-[96px] lg:pl-[31px] ">
          <h1
            className="uppercase  text-white lg:leading-[91%] leading-[82%] tracking-[-0.1em] 
            text-[48px] md:text-[64px] lg:text-[120px] xl:text-[150px] 2xl:text-[198px] z-1"
          >
            {t("specialOffers.title")}
          </h1>
          <h1
            className="uppercase  text-white lg:leading-[91%] leading-[82%] tracking-[-0.1em] lg:hidden flex 
            text-[48px]  md:text-[64px]"
          >
            {t("specialOffers.desc2")}
          </h1>
          <p
            className="relative uppercase 2xl:ps-2 xl:ps-1.5 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-tight 2xl:pt-[51px] xl:pt-[40px] lg:pt-[34px] pt-[20px] 2xl:w-[80%] md:w-[65%] lg:w-[100%]"
          >
            {t("specialOffers.desc")}
          </p>
        </div>

        <div className="border-x border-[#515151]  2xl:pt-[250px] 2xl:ps-[25px]  lg:flex hidden flex-col lg:justify-center lg:pt-34 xl:pt-52 2xl:pb-[101px] xl:pb-[101px] lg:pb-[90px] ">
          <h1
            className="uppercase  text-white leading-[91%] tracking-[-0.1em] lg:flex hidden 
            xl:text-[150px] 2xl:text-[198px] 2xl:ps-[25px] lg:ps-[25px] lg:text-[120px] "
          >
            {t("specialOffers.desc2")}
          </h1>
        </div>

        <div className="border-e border-[#515151]  items-center hidden lg:flex"></div>

        <div className=" border-[#515151] flex items-center lg:hidden"></div>
      </div>
    </div>
  );
};
