import { parking } from "../../store/exportsIcons";
import { coffeeRoom } from "../../store/exportsImg";
import { useModalStore } from "../../store/useModalStore";
import { useTranslation } from "react-i18next";

export const MoreInfoFirstCol = ({
  isShowOtherInfo,
  amenities,
}: {
  isShowOtherInfo: boolean;
  amenities: { src: string; text: string }[];
}) => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  return (
    <div className="flex flex-col md:py-15 py-10 px-5 ">
      {isShowOtherInfo ? (
        <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo xl:pb-[51px] ">
          {t("room.moreInfo.title2")}
        </h1>
      ) : (
        <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo xl:pb-[51px] hidden md:block">
          {t("room.moreInfo.title")}
        </h1>
      )}
      {isShowOtherInfo ? (
        <div>
          <ul className="flex flex-col 2xl:gap-2 gap-1 w-full pt-10 md:pt-0 ">
            {amenities.map((item) => (
              <li
                key={item.src}
                className="text-white text-[14px] md:text-[14px] lg:text-[14px] 2xl:text-[20px] uppercase leading-[150%] gap-1.5  items-center  flex"
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
        </div>
      ) : (
        <img
          src={coffeeRoom}
          alt="bedWithPet"
          className="w-full 2xl:max-h-[512px] xl:max-h-[371px] lg:max-h-[300px] md:max-h-[250px] max-h-[276px]   object-cover  "
        />
      )}
      <p className="text-white text-[14px] 2xl:text-[20px] md:text-[14px] lg:text-[14px] uppercase mt-[23px]   flex md:hidden xl:ps-5">
        <img src={parking} alt="parking" className="w-6 h-6" />
        {t("room.moreInfo.parking")}
      </p>
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
        hidden md:block
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
  );
};
