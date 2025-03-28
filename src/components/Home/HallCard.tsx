import { Link } from "react-router-dom";
import { InViewWrapper } from "../utils/InViewWrapper";
import { useTranslation } from "react-i18next";
import { square, guest } from "../../store/exportsIcons";
import cn from "classnames";

type HallCardProps = {
  hall: {
    previewImage: string;
    title: string;
    size: string;
    area: string;
    capacity: string;
  };
  index: number;
};

export const HallCard = ({ hall, index }: HallCardProps) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-col items-center justify-center w-fit h-fit pb-20 ${index !== 1 ? '-translate-y-6' : ''} `}>
      <InViewWrapper>
        <img
          src={hall.previewImage}
          alt={hall.title}
          className={cn(
            index === 1
              ? "2xl:w-[667px] 2xl:h-[445px] xl:w-[430px] xl:h-[327px] lg:w-[370px] lg:h-[290px] md:w-[300px] md:h-[233px] w-[334px] h-[223px]"
              : "2xl:w-[382px] 2xl:h-[256px] xl:w-[339px] xl:h-[200px] lg:w-[250px] lg:h-[194px] md:w-[200px] md:h-[113px] w-[334px] h-[223px]"
          )}
        />
      </InViewWrapper>
      <h4 className={`uppercase text-[18px] md:text-[22px] font-cofo-medium lg:text-[18px] 2xl:text-[24px] xl:text-[22px] leading-[28px] tracking-[-5%] text-center 
        ${index !== 1 ? '2xl:mt-[20px] xl:mt-[14px]  px-2 xl:mb-[12px] lg:mb-[8px] lg:mt-[12px] mt-[10px] mb-[8px]' : '2xl:mt-[25px] xl:mt-[20px] mb-[10px]   px-2 xl:mb-[13px] mt-[10px]'} }`}>
        {t(hall.title)} {t(hall.size)}
      </h4>
      <div className={cn(`flex flex-col items-center justify-center ${index !== 1 ? 'space-y-[3px]' : 'space-y-[1px]'}`)}>
        <div className={`flex items-center space-x-1 justify-center `}>
          <img src={square} alt="areaico" className="w-4 h-4" />
          <p className="uppercase text-sm sm:text-xs md:text-[12px] lg:text-lg 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#252526]">
            {t("home.conferenceService.area")}: {hall.area}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <img src={guest} alt="guestico" className="w-4 h-4" />
          <p className="uppercase text-sm sm:text-xs md:text-[12px] lg:text-lg 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#252526]">
            {t("home.conferenceService.capacity")}: {t(hall.capacity).slice(0, -2) + "."}
          </p>
        </div>
        {index === 1 && (
          <div className="text-center flex items-center justify-center pt-[37px] relative">
            <Link
              to="/conference-service"
              className="w-fit xl:py-[10px] block xl:px-[30.5px] font-cofo-medium px-5 py-2 text-[#8c331b] hover:bg-[#8c331b] hover:text-white border-[#8C331B] border rounded-full uppercase"
            >
              {t("buttons.details")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};