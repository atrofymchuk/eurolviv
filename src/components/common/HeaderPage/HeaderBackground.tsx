import { InViewWrapper } from "../../utils/InViewWrapper";
import { HeaderBackgroundProps } from "../../../types/headerTypes";
import cn from "classnames";

export const HeaderBackground: React.FC<HeaderBackgroundProps> = ({
  backgroundImage,
  mobileSrc,
  objectPosition = "center",
  wrapInView = true,
  gradientStyle = "dark",
  isContacts = false,
}) => {
  const getBackgroundGradient = () => {
    switch (gradientStyle) {
      case "light":
      case "contacts":
        return isContacts ? "lg:bg-none bg-[linear-gradient(2.57deg,rgba(255,255,255,0)_0.95%,#FFFFFF_95.83%)]" : "bg-[linear-gradient(2.57deg,rgba(255,255,255,0)_0.95%,#FFFFFF_95.83%)]";
      case "home":
        return "";
      case "dark":
      default:
        return "bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#252526_0%,rgba(37,37,38,0)_50.36%,#252526_100%)]";
    }
  };

  const renderImage = () => {
    const imageContent = (
      <>
        {mobileSrc ? (
          <>
            <img
              fetchPriority="high"
              src={backgroundImage}
              alt="header background"
              className=" object-cover  w-full h-full lg:block hidden"
              style={{ objectPosition }}
            />
            <img
              fetchPriority="high"
              src={mobileSrc}
              alt="header background mobile"
              className="object-cover w-full h-full lg:hidden block"
            />
          </>
        ) : (
          <img
            fetchPriority="high"
            src={backgroundImage}
            alt="headerImg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </>
    );

    return wrapInView ? (
      <InViewWrapper>{imageContent}</InViewWrapper>
    ) : (
      imageContent
    );
  };

  return (
    <>
      {renderImage()}
      <div
        className={cn(
          `absolute  inset-0 ${getBackgroundGradient()}`,
          isContacts ? "hidden lg:block" : "block"
        )}
      ></div>
    </>
  );
};
