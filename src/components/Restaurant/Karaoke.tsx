import { useTranslation } from "react-i18next";
import { karaokeFst, karaokeScd } from "../../store/exportsImg";
export const Karaoke = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <div className="grid md:grid-cols-[35.7%_28.8%_35.6%] grid-cols-1 md:w-[93.16%] w-[89.067%] mx-auto border-x border-[#B3B3B3] border-t ">
        <div className="flex flex-col 2xl:ps-[52px] xl:ps-[48px] lg:ps-[32px] md:ps-[24px]  justify-center 2xl:h-[561px]  xl:my-[39px] 2xl:my-[42px] my-[32px_19px]">
          <div className="flex items-center md:items-start  flex-col justify-center  text-center md:text-start ">
            <p className="font-blessed xl:font-extrabold 2xl:w-[525px] w-[267px] text-[16px] xl:text-[36px]  lg:w-[350px] lg:text-[26px] lg:leading-[25.2px] md:ml-2 xl:inline  xl:w-[400px]">
              Ruff
            </p>
            <h1 className="uppercase 2xl:text-[100px] xl:text-[86px] lg:text-[72px] md:text-[48px] text-[64px] leading-[81%] 2xl:max-w-[525px]  lg:max-w-[350px] xl:max-w-[400px] md:max-w-[250px] max-w-[299px] tracking-[-7%] xl:pt-1.5 ">
              {t("restaurant.karaoke.title")}
            </h1>
            <div className="xl:space-y-5  h-full 2xl:pt-[34px] xl:pt-[20px]  md:mt-[10px]  flex flex-col 2xl:max-w-[525px] md:max-w-[250px] max-w-[299px] lg:max-w-[350px] xl:max-w-[400px] ">
              <p className="uppercase text-[#252526] xl:text-[18px] xl:leading-[22.6px] lg:text-[16px] text-[12px]   md:order-none order-2 ">
                {t("restaurant.karaoke.desc.0")}
              </p>
              <p className="uppercase text-[#252526] xl:text-[18px] xl:leading-[22.6px] lg:text-[16px] text-[12px] md:order-none order-3 mt-[19px]">
                {t("restaurant.karaoke.desc.1")}
              </p>
              <p className="uppercase font-cofo-medium xl:text-[18px] xl:mt-[23px] lg:mt-[18px] text-[12px] lg:text-[16px] md:order-none order-1 mt-[33px] md:mb-0 mb-[19px]">
                {t("restaurant.karaoke.karaokeTime")}
              </p>
            </div>

          </div>
        </div>

        <div className=" flex items-center justify-center md:border-x border-[#B3B3B3] border-y md:border-y-0  py-[16px] px-[18px_17px] lg:h-full md:px-2 lg:px-4.5 lg:py-4.5 xl:px-[19px_20px]">
          <img src={karaokeFst} alt="" className="w-full h-full max-h-[325px] md:max-h-full object-cover sm:object-cover" />
        </div>
        <div className=" flex items-center justify-center  border-[#B3B3B3] border-y md:border-y-0 border-t-0  py-[16px] px-[18px_16px]  lg:h-full md:px-2 lg:px-4.5 lg:py-4.5 xl:px-[19px_25px]">
          <img src={karaokeScd} alt="" className="w-full h-full max-h-[325px] md:max-h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
