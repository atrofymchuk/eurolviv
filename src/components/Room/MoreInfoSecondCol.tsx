import { useTranslation } from "react-i18next";
import { useModalStore } from "../../store/useModalStore";
import { parking } from "../../store/exportsIcons";
import { bedWithPet } from "../../store/exportsImg";

export const MoreInfoSecondCol = ({
  availableService,
  isShowOtherInfo,
}: {
  availableService: { src: string; text: string }[];
  isShowOtherInfo: boolean;
}) => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  return (
    <div
      className={`flex flex-col md:py-15  items-center ${
        isShowOtherInfo ? "justify-start" : "justify-end pt-10"
      } h-full`}
    >
      <div
        className={`flex flex-col md:items-center justify-between gap-2 w-full 2xl:h-[512px] xl:h-[371px] 2xl:ps-[37px] lg:h-[300px] md:h-[250px]  xl:ps-[27px] lg:ps-[17px] md:ps-[10px] ${
          isShowOtherInfo ? "" : "ps-[10px]"
        }`}
      >
        {isShowOtherInfo ? (
          <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo  hidden md:block">
            {t("room.moreInfo.title")}
          </h1>
        ) : (
          <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo xl:pb-[51px] md:hidden block">
            {t("room.moreInfo.title")}
          </h1>
        )}

        {isShowOtherInfo && (
          <img
            src={bedWithPet}
            alt="imageOverlay"
            className="w-full  object-cover px-5 md:hidden h-[250px] "
          />
        )}

        {isShowOtherInfo && (
          <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo  md:hidden block px-5 mt-[54px]">
            {t("room.moreInfo.title")}
          </h1>
        )}

        <ul
          className={`flex flex-col 2xl:gap-2 gap-1  w-full ${
            isShowOtherInfo ? "md:px-0 px-5 " : ""
          }`}
        >
          {availableService.map((item) => (
            <li
              key={item.src}
              className="text-white text-[14px] md:text-[14px] lg:text-[14px] 2xl:text-[20px] uppercase leading-[150%]  items-center gap-1.5 flex"
            >
              <img
                src={item.src}
                alt={t(item.text)}
                className="2xl:w-9 2xl:h-9 lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6"
              />
              {t(item.text)}
            </li>
          ))}
        </ul>

        {isShowOtherInfo && (
          <button
            onClick={() => onOpenModal("order")}
            className={` 
        uppercase font-semibold 
        bg-[#EDE8E5] text-[#A47762]
        text-[12px]   lg:text-[14px]
        px-4 sm:px-5 md:px-4 lg:px-[18.5px]
        py-2 sm:py-2.5 md:py-2.5 lg:py-[9px]
        xl:py-[10px] xl:px-[20px]
        rounded-full
        mx-5 
        mb-[42px]
        md:hidden 
        self-start
        xl:mt-10
        lg:mt-9
        md:mt-4
        mt-10
        hover:bg-white transition-colors`}
          >
            {t("buttons.bookRoom")}
          </button>
        )}
        <div>
          <p className="text-white text-[16px] 2xl:text-[20px] md:text-[14px] lg:text-[14px] uppercase leading-[104%]   md:flex hidden ">
            <img
              src={parking}
              alt="parking"
              className="2xl:w-9 2xl:h-9 lg:w-7 lg:h-7 md:w-6 md:h-6"
            />
            {t("room.moreInfo.parking")}
          </p>
          {!isShowOtherInfo && (
            <button
              onClick={() => onOpenModal("order")}
              className={` 
        uppercase font-semibold 
        bg-[#EDE8E5] text-[#A47762]
        text-[12px]   lg:text-[14px]
        px-4 sm:px-5 md:px-4 lg:px-[18.5px]
        py-2 sm:py-2.5 md:py-2.5 lg:py-[9px]
        xl:py-[10px] xl:px-[20px]
        rounded-full
        self-start
        xl:mt-10
        lg:mt-9
        md:mt-4
        mt-10
        hover:bg-white transition-colors`}
            >
              {t("buttons.bookRoom")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
