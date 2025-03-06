import food from "../../assets/ConferenceService/Menu/food.webp";
import sandwich from "../../assets/ConferenceService/Menu/sandwich.webp";
import coffee from "../../assets/ConferenceService/Menu/coffee.webp";
import { ConferenceMenuCard } from "./ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "./ConferenceMenuMobile";
import { useTranslation } from "react-i18next";


export const ConferenceMenuContent = () => {
  const { t } = useTranslation();
  const imageArray = [
    {
      img:food,
      text: t("conferenceService.conferenceMenu.menu.title1"),
    },
    {
      img:sandwich,
      text: t("conferenceService.conferenceMenu.menu.title2"),
    },
    {
      img:coffee,
      text: t("conferenceService.conferenceMenu.menu.title3"),
    },
  ];
  
  return (
    <div className="relative flex items-center justify-center lg:py-[100px]">
      <div className="grid absolute lg:grid-cols-[21%_42%_37%] grid-cols-1 lg:h-[1000px] h-full z-[-1] w-full">
        <div className="w-full  border-[#C7C7C7]"></div>
        <div className="w-full lg:border-x hidden lg:flex border-[#C7C7C7]"></div>
        <div className="w-full hidden lg:flex border-[#C7C7C7]"></div>
      </div>

      <div className="hidden items-center lg:space-x-[24px] lg:flex">
        {imageArray.map((el, index) => (
          <ConferenceMenuCard key={index} img={el.img} text={el.text} buttonText={t("buttons.viewMenu")} />
        ))}
      </div>

      <div className="lg:hidden block">
        <ConferenceMenuMobileCard img={food} />
      </div>
    </div>
  );
};
