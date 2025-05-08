import { ConferenceMenuCard } from "@/components/ConferesceService/ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "@/components/ConferesceService/ConferenceMenuMobile";
import { imageArray } from "@/Constants/ConferenceMenu";
import { useTranslation } from "react-i18next";



export const ConferenceMenuContent = () => {
  const { t } = useTranslation();
  

  return (
    <div className="relative flex items-center justify-center w-full" id="menu">
      <div className="grid absolute lg:grid-cols-[20.5%_42.9%_35%] grid-cols-1 lg:h-[870px] h-full z-[-1] w-full">
        <div className="w-full border-[#C7C7C7]"></div>
        <div className="w-full lg:border-x hidden lg:flex border-[#C7C7C7]"></div>
        <div className="w-full hidden lg:flex border-[#C7C7C7]"></div>
      </div>

      <div className="hidden items-center 2xl:space-x-[24px] xl:space-x-[20px] lg:space-x-[16px] lg:flex px-5 pb-[126px] lg:pb-[100px] w-full justify-center">
        {imageArray.map((el, index) => (
          <ConferenceMenuCard key={index} img={el.img} text={t(el.text)} />
        ))}
      </div>

      <div className="lg:hidden block w-full">
        <ConferenceMenuMobileCard img={imageArray[0].img} />
      </div>
    </div>
  );
};
