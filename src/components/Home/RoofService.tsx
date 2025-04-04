import { Link } from "react-router-dom";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import ruffLogo from "../../assets/icons/ruffLogo.svg";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
export const RoofService = () => {
  const { t } = useTranslation();
  const { suggestion } = usePagesInfoStore();

  return (
    <div className="w-full  justify-center hidden md:flex">
      <div className="grid w-full lg:grid-cols-2 grid-cols-1">
        {suggestion.map((item, index) => (
          <div
            key={index}
            className={cn(
              `relative flex flex-col bg-[#252526] ${
                index === 2
                  ? "lg:col-span-2 md:h-[1600px] h-[873px]"
                  : "md:h-[1173px] h-[873px]"
              }`
            )}
          >
            <div className="relative w-full h-full">
              <div
                className={`${
                  index === 2 ? "h-[2484px] " : ""
                } absolute inset-0  bg-gradient-to-b from-[#252526] to-transparent`}
              ></div>
              <img
                src={item.img}
                alt={item.url}
                className="w-full h-full object-cover"
              />
            </div>

            {index === 2 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[91%] border-x border-[#AEAEAE3D] pointer-events-none z-1"></div>
            )}

            <div
              className={cn(
                `absolute inset-0 flex flex-col items-center text-center mt-[123px] text-white z-2  ${
                  index === 2 ? "justify-center" : "justify-start"
                }`
              )}
            >
              <div className="flex flex-col items-center ">
                <div className="flex justify-center w-full">
                  <InViewWrapper>
                    <img src={ruffLogo} alt="" className="w-[135px] h-[18px]" />
                  </InViewWrapper>
                </div>
                <h1
                  className={cn(`${
                    index === 2
                      ? "lg:text-[198px] max-w-[900px] text-[76px] md:text-[100px] sm:text-[80px] "
                      : "lg:text-[100px] max-w-[722px] text-[66px] md:text-[70px] sm:text-[50px] xl:h-[172px] lg:h-[162px]"
                  } 
                   text-center uppercase leading-[104%] tracking-[-5%] xl:mt-[29px] lg:mt-[19px]
                w-full lg:leading-[81%]`)}
                >
                  {t(item.title)}
                </h1>

                <p
                  className={`uppercase font-cofo-medium lg:text-[20px] text-[14px] lg:leading-[21px] leading-[12px] ${
                    index === 2 ? "mt-[61px]" : "mt-[29px]"
                  }`}
                >
                  {t(item.titleDesc)}
                </p>
              </div>

              <div
                className={cn(
                  `flex flex-col items-center space-y-[40px] ${
                    index === 2 ? "" : "mt-auto pb-[75px]"
                  }`
                )}
              >
                <p className="uppercase lg:text-[18px] text-[12px] sm:text-[14px] md:text-[16px] lg:leading-[22px] max-w-[232px] lg:max-w-full leading-[14px] lg:pt-[32px] pt-[19px] lg:w-[380px] xl:w-[488px]">
                  {t(item.desc)}
                </p>
                <div
                  className={`flex h-fit justify-center ${
                    index === 2 ? "gap-x-[16px]" : ""
                  }`}
                >
                  <Link
                    to={item.url}
                    className={`uppercase bg-[#8C331B] lg:py-[11px]  lg:px-[29.5px] rounded-full font-cofo-medium  text-[#FFFFFF] hover:bg-[#252526] hover:text-[#FFFFFF]  lg:text-[16px] text-[12px] py-[12px] px-[17px] ${
                      index === 2 ? "" : "hidden"
                    }`}
                  >
                    {t("buttons.bookTable")}
                  </Link>
                  <Link
                    to={item.url}
                    className={cn(`uppercase  rounded-full font-cofo-medium text-[#252526] bg-[#FFFFFF] hover:bg-[#252526] hover:text-[#FFFFFF] lg:text-[16px] px-[10px] text-[12px] `, {
                      "md:py-[11px]  lg:px-[32px]": index !== 2,
                      "md:py-[13px]  lg:px-[59.5px] px-[40px]": index === 2,
                    })}
                  >
                    {t("buttons.details")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
