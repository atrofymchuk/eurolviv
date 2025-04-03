import { useTranslation } from "react-i18next";
import { parking } from "../../store/exportsIcons";
import { dog } from "../../store/exportsImg";
import { BookLink } from "../Buttons/BookLink";
import cn from "classnames";
export const MoreInfoSecondCol = ({
  availableService,
  isShowOtherInfo,
}: {
  availableService: { src: string; text: string }[];
  isShowOtherInfo: boolean;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        `flex flex-col  md:py-10 items-center ${
          isShowOtherInfo ? "justify-start pb-[41px] lg:py-20  " : "lg:pt-42 xl:pt-58 md:pt-32"
        } h-full`
      )}
    >
      <div
        className={cn(
          `flex flex-col md:items-center justify-between   gap-2 w-full   2xl:ps-[41px]  md:h-full  xl:ps-[17px] md:ps-[10px] ${
            isShowOtherInfo
              ? "2xl:h-[512px] lg:h-[300px] xl:h-[371px] "
              : "ps-[10px] 2xl:h-[512px] lg:h-[300px] xl:h-[371px] md:h-[250px] " 
          }`
        )}
      >
        <h1
          className={cn(
            ` text-white text-[32px]  tracking-[-7%] xl:text-[42px] 2xl:text-[48px] leading-[104%] uppercase `,
            {
              "block md:hidden xl:pb-[51px] lg:pb-[20px] md:pb-[15px] pt-[54px]":
                !isShowOtherInfo,
              "md:block hidden xl:pb-[51px] lg:pb-[20px] md:pb-[15px]":
                isShowOtherInfo,
            }
          )}
        >
          {t("room.moreInfo.title")}
        </h1>

        {isShowOtherInfo && (
          <img
            src={dog}
            alt="imageOverlay"
            className="w-full  object-cover px-[10px_6px] md:hidden h-[262px] "
          />
        )}

        {isShowOtherInfo && (
          <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo  md:hidden block px-[10px] lg:px-5 mt-[42px]">
            {t("room.moreInfo.title")}
          </h1>
        )}

        <ul
          className={cn(
            `flex flex-col 2xl:gap-2 gap-0.5 pt-[44px] md:pt-0  w-full ${
              isShowOtherInfo ? "md:px-0 px-[10px] " : ""
            }`
          )}
        >
          {availableService.map((item) => (
            <li
              key={item.src}
              className={cn(
                `text-white text-[14px] md:text-[14px] lg:text-[14px] 2xl:text-[20px] uppercase   items-center gap-0.75 flex`
              )}
            >
              <img
                src={item.src}
                alt={t(item.text)}
                className="2xl:w-9 2xl:h-9 lg:w-6 lg:h-6 md:w-5 md:h-5 w-6 h-6"
              />
              {t(item.text)}
            </li>
          ))}
        </ul>

        {isShowOtherInfo && (
          <BookLink
            to="/booking"
            className=" 
        bg-[#EDE8E5] text-[#A47762] hover:bg-white transition-colors   xl:mt-10
        lg:mt-9
        md:mt-4
        mt-10
        md:hidden
        block w-fit
        mx-[11px]
        "
          >
            {t("buttons.bookRoom")}
          </BookLink>
        )}
        <div className="mt-auto">
          <p className="text-white text-[16px] 2xl:text-[20px] md:text-[12px] lg:text-[14px] uppercase leading-[104%] md:flex hidden gap-1">
            <img
              src={parking}
              alt="parking"
              className="2xl:w-9 2xl:h-9 lg:w-6 lg:h-6 md:w-6 md:h-6 w-6 h-6"
            />
            {t("room.moreInfo.parking")}
          </p>
          {!isShowOtherInfo && (
            <BookLink
              to="/booking"
              className={cn(` 
        bg-[#EDE8E5] text-[#A47762] hover:bg-white transition-colors   xl:mt-10
        lg:mt-9
        md:mt-4
        mt-10
      block  w-fit
        `)}
            >
              {t("buttons.bookRoom")}
            </BookLink>
          )}
        </div>
      </div>
    </div>
  );
};
