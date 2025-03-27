import { useTranslation } from "react-i18next";
import { HeaderBackground} from "./HeaderBackground";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderNavLink } from "./HeaderNavLink";
import { HeaderActions } from "./HeaderActions";
import { HeaderRoomInfo } from "./HeaderRoomInfo";
import { HeaderDescription } from "./HeaderDescription";
import { PageHeaderProps } from "../../../types/headerTypes";
import cn from "classnames";
export const PageHeader: React.FC<PageHeaderProps> = ({
  backgroundImage,
  mobileSrc,
  objectPosition = "center",
  wrapInView = true,
  gradientStyle = "dark",
  textColor = "white",
  title,
  description,
  size,
  showBackLink = false,
  backLinkTo = "/",
  backLinkText = "room.roomNavigation",
  showBookButton = false,
  showOrderButton = false,
  showConferenceMenuButton = false,
  customButton,
  roomInfo,
  onOrderClick,
}) => {
  const { t } = useTranslation();
  

  return (
    <div className="w-full relative lg:h-[1181px] h-[821px]">
      <HeaderBackground 
        backgroundImage={backgroundImage}
        mobileSrc={mobileSrc}
        objectPosition={objectPosition}
        wrapInView={wrapInView}
        gradientStyle={gradientStyle}
      />

      {showBackLink && (
        <HeaderNavLink 
          to={backLinkTo} 
          text={t(backLinkText)} 
        />
      )}

      <div className={cn(`absolute inset-0 flex flex-col items-center justify-center text-center ${textColor === "white" ? "text-white" : "text-black"} z-10`)}>
        <h4 className="font-cofo-medium lg:text-[20px] text-[10px] uppercase leading-[22.68px] font-cofo-medium underline text-sm decoration-transparent xl:mb-4">
          {t("global.createdFor")}
          <span className="font-blessed normal-case xl:font-extrabold block text-center text-[13px] md:text-[28px] xl:text-[32px]  xl:inline">
            {t("global.whereTo")}
          </span>
        </h4>

        <HeaderTitle 
          title={title} 
          textColor={textColor} 
        />

        {size && (
          <p className={cn(`uppercase w-[90%] md:w-[60%] xl:w-[40%] lg:leading-[35px] lg:text-[36px] text-[20px] font-semibold leading-[25px] xl:pt-[46px] md:text-[32px] lg:pt-[30px] pt-[17px]`)}>
            {t(size)}
          </p>
        )}

        {description && (
          <HeaderDescription 
            description={description} 
            size={size} 
          />
        )}

        <HeaderActions
          showBookButton={showBookButton}
          showOrderButton={showOrderButton}
          showConferenceMenuButton={showConferenceMenuButton}
          customButton={customButton}
          onOrderClick={onOrderClick}
        />
      </div>

      {roomInfo && <HeaderRoomInfo roomInfo={roomInfo} />}
    </div>
  );
};