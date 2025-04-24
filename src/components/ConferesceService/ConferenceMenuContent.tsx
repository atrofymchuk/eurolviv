import { ConferenceMenuCard } from "./ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "./ConferenceMenuMobile";
import { useTranslation } from "react-i18next";
import { food, sandwich, coffee } from "../../store/exportsImg";
import { useMemo } from "react";

export const ConferenceMenuContent = () => {
  const { t } = useTranslation();
  const imageArray = useMemo(
    () => [
      {
        img: food,
        text: t("conferenceService.conferenceMenu.menu.title"),
      },
      {
        img: sandwich,
        text: t("conferenceService.conferenceMenu.menu.title1"),
      },
      {
        img: coffee,
        text: t("conferenceService.conferenceMenu.menu.title2"),
      },
    ],
    [t]
  );

  return (
    <div className="relative flex items-center justify-center ">
      <div className="grid absolute lg:grid-cols-[20.5%_42.9%_35%] grid-cols-1 lg:h-[870px] h-full z-[-1] w-full">
        <div className="w-full  border-[#C7C7C7]"></div>
        <div className="w-full lg:border-x hidden lg:flex border-[#C7C7C7]"></div>
        <div className="w-full hidden lg:flex border-[#C7C7C7]"></div>
      </div>

      <div className="hidden items-center 2xl:space-x-[24px] xl:space-x-[20px] lg:space-x-[16px] lg:flex px-5 pb-[126px] lg:pb-[100px]">
        {imageArray.map((el, index) => (
          <ConferenceMenuCard key={index} img={el.img} text={el.text} />
        ))}
      </div>

      <div className="lg:hidden block">
        <ConferenceMenuMobileCard img={food} />
      </div>
    </div>
  );
};
