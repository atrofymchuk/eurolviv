import { Link } from "react-router-dom";
import { SuggestionT } from "../../types/types";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";

type SuggestionToProps = {
  suggestion?: SuggestionT[];
};

export const Suggestion = ({ suggestion }: SuggestionToProps) => {
  const { t } = useTranslation();
  if (!suggestion) return null;
  const translatedSuggestions = suggestion.map((item) => ({
    ...item,
    translatedTitle: t(item.title),
    translatedSize: item.size.length > 5 ? t(item.size) : "",
    translatedDesc: t(item.desc),
  }));
  return (
    <div className="w-full flex justify-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        {translatedSuggestions.map(
          (
            { img, type, translatedTitle, translatedSize, translatedDesc },
            index
          ) => (
            <div
              key={index}
              className="bg-[#252526] relative lg:pt-[240px] pt-[100px] flex flex-col"
            >
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252526] to-transparent"></div>
                <InViewWrapper>
                  <img
                    src={img}
                    alt={type}
                    className="lg:w-full lg:h-[654px] object-cover"
                  />
                </InViewWrapper>
              </div>

              <div className="absolute top-0 flex flex-col items-center text-center text-white z-10 lg:p-4 p-[51px] w-full lg:h-[200px]">
              <h1 className="2xl:text-[100px] xl:text-[80px] lg:text-[60px] md:text-[80px] text-[32px] md:leading-[90%]  uppercase leading-[28px] lg:mt-20 lg:min-h-[162px] flex items-end">
                {translatedTitle}
              </h1>
                {translatedSize && (
                  <p className="uppercase font-cofo-medium 2xl:text-[24px] xl:text-[20px] lg:text-[16px] md:text-[20px] text-[14px] lg:leading-[24px] leading-[12px] lg:pt-[19px] pt-[7px] ">
                    {translatedSize}
                  </p>
                )}
                <p className="uppercase 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] lg:leading-[22px] md:text-[16px] max-w-[232px] lg:max-w-full leading-[104%] lg:pt-[38px] pt-[19px] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
                  {translatedDesc}
                </p>
                <Link
                  to={`/rooms/${type}`}
                  className="uppercase lg:py-[12px] lg:mt-[48px] mt-[20px] lg:px-[30px] rounded-full font-cofo-medium
                  md:px-[26px] md:py-[12px]
                 border-[0.5px] text-[#FFFFFF] lg:leading-[20px] lg:text-[16px] text-[12px] leading-[15px] py-[12px] px-[17px]"
                >
                  {t("buttons.view")}
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
