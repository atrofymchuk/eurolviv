import { useTranslation } from "react-i18next";
import ImageSlider from "./Slider";

export const Mission = () => {
  const {t} = useTranslation()    
  return (
    <section className="flex flex-col items-center justify-center bg-white font-cofo ">
      <div className="grid xl:grid-cols-3 items-center  w-full   sm:grid-cols-[1fr]     max-w-[89.58%]">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] pt-[52px] xl:pt-[109px] flex justify-center items-center">
          <div className="flex flex-col text-center">
            <h1 className="uppercase text-[#8C331B] font-cofo-medium text-sm md:text-base lg:text-lg xl:text-2xl leading-[30px] px-2">
              {t("about.mission.title")}
            </h1>
            <h1 className="uppercase text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] tracking-[-0.03em] leading-[100%] px-2">
              {t("about.mission.heading.0")}
            </h1>
            <h1 className="uppercase text-[32px] md:text-[48px] lg:text-[64px] xl:text-[100px] tracking-[-0.03em] leading-[80%] px-2">
              {t("about.mission.heading.1")}
            </h1>
            <p className="uppercase max-w-[801px] mx-auto text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] pt-5 px-4 xl:px-0">
              {t("about.mission.desc.0")}
            </p>
            <p className="uppercase max-w-[801px] mx-auto text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] pt-5 px-4 xl:px-0">
              {t("about.mission.desc.1")}
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full xl:h-[600px] h-fit flex items-center justify-center ">
  <div className="absolute border-[#C7C7C7] border-x h-full  w-[89.58%]"></div>
  <ImageSlider />
</div>


      <div className="grid xl:grid-cols-3 items-center grid-cols-[1fr] w-full border-collapse   max-w-[89.58%]">
        <div className="xl:col-span-3 border-x border-[#C7C7C7] flex justify-center items-center py-6">
          <p className="text-[#8C331B] uppercase max-w-[230px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[530px] text-[12px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-cofo-medium leading-[15px] md:leading-[20px] lg:leading-[24px] xl:leading-[25.2px] text-center">
              {t("about.mission.desc.2")}
          </p>
        </div>
      </div>
    </section>
  );
};
