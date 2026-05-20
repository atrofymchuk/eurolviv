import { ConferenceMenuCard } from "@/components/ConferesceService/ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "@/components/ConferesceService/ConferenceMenuMobile";
import { imageArray } from "@/Constants/ConferenceMenu";
import { useTranslation } from "react-i18next";



export const ConferenceMenuContent = () => {
  const { t } = useTranslation();
  

  return (
    <div className="relative flex items-center justify-center w-full" id="menu">
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        aria-hidden
      >
        <div className="absolute inset-y-0 left-[20.5%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
        <div className="absolute inset-y-0 left-[63.4%] w-px -translate-x-1/2 bg-[#C7C7C7]/70" />
      </div>

      <div className="relative z-10 hidden items-center 2xl:space-x-[24px] xl:space-x-[20px] lg:space-x-[16px] lg:flex px-5 pb-[126px] lg:pb-[100px] w-full justify-center">
        {imageArray.map((el, index) => (
          <ConferenceMenuCard key={index} img={el.img} text={t(el.text)} />
        ))}
      </div>

      <div className="relative z-10 lg:hidden block w-full">
        <ConferenceMenuMobileCard img={imageArray[0].img} />
      </div>
    </div>
  );
};
