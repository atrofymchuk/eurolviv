import { ViewMenuButton } from "@/components/Buttons/ViewMenu";
import { useTranslation } from "react-i18next";

type ConferenceMenuCardToProps = {
  img: string;
  text: string;
};

export const ConferenceMenuCard = ({
  img,
  text,
}: ConferenceMenuCardToProps) => {
  const { t } = useTranslation();

  const getPdfPath = (text: string) => {
    switch(text) {
      case t("conferenceService.conferenceMenu.menu.title1"):
        return "/documents/Buffet_Menu.pdf";
        case t("conferenceService.conferenceMenu.menu.title"):
        return "/documents/Lunches_and_Dishes.pdf";
        case t("conferenceService.conferenceMenu.menu.title2"):
        return "/documents/Coffee_Break.pdf";
      default:
        return "";
    }
  };

  const handleViewMenuClick = () => {
    const pdfPath = getPdfPath(text);
    if (pdfPath) {
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <img
        loading="lazy"
        src={img}
        alt=""
        className="object-cover
          w-[64vw] h-[80vw]
          md:w-[23.44vw] md:h-[29.3vw]
          lg:w-[24.61vw] lg:h-[28.4vw]
          xl:w-[26.92vw] xl:h-[28.51vw]
          2xl:w-[28.13vw] 2xl:h-[31.72vw]"
      />
      <p
        className="uppercase text-[#242425] 
        text-[4.8vw] tracking-[-0.07em] leading-[104%] pt-[2.4vw]
        lg:text-[1.67vw] lg:tracking-[-0.07em] lg:leading-[104%] lg:pt-[1.39vw]
        xl:text-[2.19vw] xl:pt-[1.46vw]
        2xl:text-[2.5vw] 2xl:tracking-[-0.07em] 2xl:leading-[104%] 2xl:pt-[1.88vw]"
      >
        {text}
      </p>
      <ViewMenuButton
        className="mt-[2.4vw] lg:mt-[1.39vw] xl:mt-[1.25vw] 2xl:w-[10.9vw] 2xl:h-[2.4vw] xl:h-[3vw] 2xl:mt-[1.3vw] 2xl:text-[0.73vw] lg:text-[1.11vw] lg:w-[14.52vw] lg:bg-white"
        onClick={handleViewMenuClick}
      >
        {t("buttons.viewMenuButton")}
      </ViewMenuButton>
    </div>
  );
};
