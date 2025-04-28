import { useTranslation } from "react-i18next";
import { ViewMenuButton } from "../Buttons/ViewMenu";

type ConferenceMenuMobileCardToProps = {
  img: string;
};

type MenuSection = {
  titleKey: string;
  pdfPath: string;
};

export const ConferenceMenuMobileCard = ({
  img,
}: ConferenceMenuMobileCardToProps) => {
  const { t } = useTranslation();

  const menuSections: MenuSection[] = [
    { 
      titleKey: "conferenceService.conferenceMenu.menu.title1",
      pdfPath: "/documents/Бенкетне меню.pdf"
    },
    { 
      titleKey: "conferenceService.conferenceMenu.menu.title",
      pdfPath: "/documents/Каво-перерва.pdf"
    },
    { 
      titleKey: "conferenceService.conferenceMenu.menu.title2",
      pdfPath: "/documents/Фуршетне меню.pdf"
    },
  ];

  const handleViewMenuClick = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div className="flex flex-col items-center relative w-full">
      <img loading="lazy"
        src={img}
        alt=""
        className="w-full h-[432px] sm:h-[500px] md:h-[600px] object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, #252526 0%, rgba(37, 37, 38, 0) 50.25%, #252526 100%),
                       linear-gradient(0deg, rgba(37, 37, 38, 0.2), rgba(37, 37, 38, 0.2))`,
        }}
      />

      <div className="absolute flex flex-col items-center justify-center gap-y-[44px] mt-[55px] sm:mt-[65px] md:mt-[80px] md:gap-y-[64px] w-full">
        {menuSections.map((section, index) => (
          <div
            key={index}
            className="space-y-[13px] sm:space-y-[16px] md:space-y-[18px] flex flex-col items-center w-full"
          >
            <p className="uppercase text-[#FFFFFF] text-[24px] sm:text-[32px] md:text-[42px] tracking-[-0.07em] leading-[104%] text-center max-w-[90%]">
              {t(section.titleKey)}
            </p>
            <ViewMenuButton 
              className="w-[170px] flex justify-center items-center"
              onClick={() => handleViewMenuClick(section.pdfPath)}
            >
              {t("buttons.viewMenuButton")}
            </ViewMenuButton>
          </div>
        ))}
      </div>
    </div>
  );
};
