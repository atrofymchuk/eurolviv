import { ConferenceMenuCard } from "@/components/ConferesceService/ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "@/components/ConferesceService/ConferenceMenuMobile";
import { imageArray } from "@/Constants/ConferenceMenu";
import { useTranslation } from "react-i18next";



export const ConferenceMenuContent = () => {
  const { t } = useTranslation();
  

  return (
    <div className="relative flex items-center justify-center w-full" id="menu">
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
