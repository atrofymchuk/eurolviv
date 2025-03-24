import { parking } from "../../store/exportsIcons";
import { coffeeRoom } from "../../store/exportsImg";
import { useTranslation } from "react-i18next";
import { BookLink } from "../Buttons/BookLink";

export const MoreInfoFirstCol = ({
  isShowOtherInfo,
  amenities,
}: {
  isShowOtherInfo: boolean;
  amenities: { src: string; text: string }[];
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:py-20 pt-[54px] pb-[28px] md:py-10 xl:px-[21px_17px] lg:px-[14px_10px]  md:px-[10px_8px]">
      {isShowOtherInfo ? (
        <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo xl:pb-[51px] ">
          {t("room.moreInfo.title2")}
        </h1>
      ) : (
        <h1 className="text-white text-[32px]  tracking-[-7%] xl:text-[48px] leading-[104%] uppercase font-cofo xl:pb-[51px] pb-[20px] hidden md:block">
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
          className="w-full 2xl:max-h-[512px] xl:max-h-[371px] lg:max-h-[300px] md:max-h-[250px] max-h-[276px] px-2 md:px-0  object-cover md:object-bottom object-[20%_80%]  "
        />
      )}
      <p className="text-white text-[14px] 2xl:text-[20px] md:text-[14px] lg:text-[14px] uppercase mt-[23px]  px-2 md:px-0 flex md:hidden xl:ps-5">
        <img src={parking} alt="parking" className="w-6 h-6" />
        {t("room.moreInfo.parking")}
      </p>
      {isShowOtherInfo && (
            <BookLink
            to="/booking"
            className=" 
        bg-[#EDE8E5] text-[#A47762] hover:bg-white transition-colors   xl:mt-10
        lg:mt-9
        md:mt-4
        mt-10
        block w-fit
        "
          >
            {t("buttons.bookRoom")}
          </BookLink>
      )}
    </div>
  );
};
