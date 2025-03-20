import { InViewWrapper } from "../utils/InViewWrapper";
import { navigate } from "../../store/exportsIcons";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";
import { map } from "../../Constants/map";

export const LocationInfo = ({ t }: { t: TFunction }) => {
  return (
    <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start border-t-0 p-4 mt-[54px] lg:mt-0 xl:h-[692px] lg:pt-[73px]">
      <div className="xl:ms-[52px]">
        <p className="uppercase flex items-center lg:items-start justify-center lg:justify-start">
          <InViewWrapper>
            <img src={navigate} alt="navigate" className="mr-1" />
          </InViewWrapper>
          <span className="underline text-[#8C331B] font-cofo-medium text-[12px] xl:text-lg">
            {t("about.whereWeAre.desc.0")}
          </span>
        </p>
        <h1 className="uppercase text-3xl xl:text-[100px] font-normal mt-4 text-center lg:text-left leading-[81%] tracking-[-0.1em]">
          {t("about.whereWeAre.title")}
        </h1>
        <p className="text-[#8F8F8F] text-sm xl:text-[20px] xl:max-w-[500px] text-center uppercase lg:text-left xl:mt-[52px] mt-6">
          <span className="text-[#8C331B] font-cofo-medium">
            {t("about.whereWeAre.desc.1")}
          </span>
          {t("about.whereWeAre.desc.2")}
        </p>
        <p className="font-cofo-medium text-sm xl:text-lg text-center lg:text-left uppercase pt-6 w-4/5 mx-auto lg:mx-0 lg:w-2/3">
          {t("about.whereWeAre.rating")}
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            target="_blank"
            to={map.address}
            className="bg-black text-white px-5 py-3 mt-6 text-sm xl:text-lg rounded-full font-cofo-medium border border-black transition-all hover:bg-white hover:text-black uppercase xl:mt-[50px]"
          >
            {t("buttons.route")}
          </Link>
        </div>
      </div>
    </div>
  );
};