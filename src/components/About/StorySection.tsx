
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";
import { sectionAbout } from "../../store/exportsImg";

export const StorySection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center flex-col w-full ">
      <div className="fluid-container mx-auto border-x border-[#C7C7C7] grid grid-cols-1 lg:grid-cols-[74.42%_25.58%] items-center justify-center w-full max-w-[89.58%]">
        <div
          className="border-b  border-[#C7C7C7]
         pt-[50px] sm:pt-[60px] md:pt-[100px] lg:pt-[130px] lg:h-[384px] p-4 lg:pb-0 
          text-center lg:text-left"
        >
          <h1
            className="text-[20px] sm:text-[24px] md:text-[48px] lg:text-[60px]  2xl:text-[100px] font-normal
           leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[72px] 2xl:leading-[81px] tracking-[-0.07em] uppercase text-[#242425]"
          >
            {t("about.about.title.0")}
          </h1>
          <div className="flex flex-col lg:items-end  items-center">
            <div
              className="flex flex-col items-center md:items-start text-xs
             sm:text-sm md:text-base lg:text-lg 2xl:text-[20px] text-[#252526]
              uppercase mt-3.5 mb-5 font-semibold"
            >
              <h1
                className="text-[20px] sm:text-[24px] md:text-[48px] lg:text-[60px] 2xl:text-[100px] font-normal 
leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[72px] 2xl:leading-[81px] 
tracking-[-0.017em] uppercase text-[#242425] text-center w-full lg:text-end"
              >
                {t("about.about.title.1")}
              </h1>

              <p className="w-full block md:pt-3 lg:pt-0">
                {t("about.about.desc.0")}
              </p>
              <p className="w-full block">{t("about.about.desc.1")}</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-s border-b border-[#C7C7C7] h-full"></div>

        <div className=" flex justify-center items-center w-full border-[#C7C7C7] border-b p-4">
          <InViewWrapper> 

          <img
            src={ sectionAbout}
            alt="Reception"
            className="w-full max-h-[543px] object-cover object-[0%_35%] "
            />
            </InViewWrapper>
        </div>

        <div className="lg:border-s  border-[#C7C7C7] flex flex-col h-full text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl font-normal tracking-[-0.01em] text-left">
          <p className="text-xs sm:text-sm md:text-[16px] lg:text-lg xl:text-[18px] 2xl:text-[20px] text-[#252526] p-4 md:p-1.5 md:px-3 uppercase font-normal leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px]">
            {t("about.about.photoDesc.0")}
            <span className="font-semibold text-[#8C331B]">{t("about.about.year")}</span>
            {t("about.about.photoDesc.1")}
          </p>

          <p className="border-t font-semibold p-4 sm:p-6 md:p-1.5 md:px-3 lg:p-3 border-[#C7C7C7] text-xs sm:text-sm md:text-[16px] lg:text-lg xl:text-[18px] 2xl:text-[20px] mt-auto  leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[28px] tracking-[-0.01em] uppercase text-[#8C331B] border-b">
            {t("about.about.photoDesc.2")}
          </p>
        </div>

        <div className="col-span-1 lg:col-span-2  border-[#C7C7C7] w-full h-[30px] sm:h-[40px] md:h-[60px] lg:h-[80px] 2xl:h-[100px]"></div>
      </div>
    </section>
  );
};
