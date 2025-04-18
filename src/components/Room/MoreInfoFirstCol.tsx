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
    <div className="flex flex-col lg:py-20 pt-[54px] pb-[28px] md:py-10 2xl:px-[1.09vw_0.89vw] xl:px-[14px_10px] lg:px-[14px_10px]  md:px-[10px_8px] h-full">
      {isShowOtherInfo ? (
        <h1 className="text-white 2xl:text-[2.5vw] xl:text-[42px] px-[10px] lg:px-0 tracking-[-0.07em] text-[32px]  leading-[104%] uppercase font-cofo md:pb-[15px] xl:pb-[51px] lg:pb-[20px] ">
          {t("room.moreInfo.title2")}
        </h1>
      ) : (
        <h1 className="text-white text-[32px]  tracking-[-0.07em] 2xl:text-[2.5vw] xl:text-[42px]  leading-[104%] uppercase font-cofo xl:pb-[51px] pb-[20px] hidden md:block">
          {t("room.moreInfo.title")}
        </h1>
      )}
      {isShowOtherInfo ? (
        <div>
          <ul className="flex flex-col 2xl:gap-[0.42vw] gap-[2px] w-full pt-10 md:pt-0 ps-[10px] lg:ps-0 ">
            {amenities.map((item) => (
              <li
                key={item.src}
                className="text-white text-[14px] md:text-[14px] lg:text-[14px] 2xl:text-[1.04vw] uppercase gap-0.75 items-center  flex"
              >
                <img loading="lazy"
                  src={item.src}
                  alt={t(item.text)}
                  className="2xl:w-[1.88vw] 2xl:h-[1.88vw] lg:w-7 lg:h-7 md:w-6 md:h-6 w-6 h-6"
                />
                {t(item.text)}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <img loading="lazy"
          src={coffeeRoom}
          alt="dog"
          className="w-full 2xl:max-h-[26.67vw] xl:max-h-[371px] lg:max-h-[300px] md:max-h-[250px] max-h-[276px] px-[10px] md:px-0  object-cover md:object-bottom object-[20%_80%]  "
        />
      )}
      <p className="text-white text-[14px] 2xl:text-[1.04vw] md:text-[14px] lg:text-[14px] uppercase mt-[32px]  px-2 md:px-0 flex md:hidden xl:ps-5">
        <img loading="lazy" src={parking} alt="parking" className="w-6 h-6" />
        {t("room.moreInfo.parking")}
      </p>
      {isShowOtherInfo && (
        <BookLink
          to="/booking"
          className=" 
        bg-[#EDE8E5] text-[#A47762] hover:bg-white transition-colors lg:w-[204px] text-center   xl:mt-auto
        lg:mt-9
        md:mt-4
        mt-10
        md:block hidden w-fit
        "
        >
          {t("buttons.bookRoom")}
        </BookLink>
      )}
    </div>
  );
};
