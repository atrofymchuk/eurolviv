import { concepts } from "../../store/InitialPagesInfoStore";
import { InViewWrapper } from "../utils/InViewWrapper";
import { useTranslation } from "react-i18next";
import { DetailsLink } from "../Buttons/DetailsLink";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";
export const ConceptCasd = ({
  title,
  img,
  alt,
  text,
  index,
}: {
  title: string[];
  img: string;
  alt: string;
  text: string[];
  index: number;
}) => {
  const { t } = useTranslation();
  const isSpecialWidth = useCustomWidth(1500, 1700);
  const isMobileWidth = useCustomWidth(389, 420);
  const isSpecialMobileWidth = useCustomWidth(421, 450);
  const isUltraHD = useCustomWidth(2000, 3000);

  return (
    <div
      className={cn(`border  border-[#C7C7C7]
          ${
            index === concepts.length - 2
              ? "md:border-e-0 xl:border-e md:border-b"
              : ""
          }
          ${
            index === 0
              ? "xl:border-l md:border-e-0 md:border-b-0 xl:border-r xl:border-b"
              : "xl:border-l-0 xl:border-t border-t-0 md:border-t md:border-b-0 xl:border-b "
          } ${index === concepts.length - 1 ? "border-b-0 md:border-b" : ""}`)}
    >
      <div
        className={`text-center flex flex-col items-center  px-[29px]  xl:px-[0] py-[41px_28px] lg:py-[47px_38px]  ${isUltraHD ? "2xl:h-[26.156vw]" : "2xl:h-[30vw]"}
          ${isSpecialMobileWidth ? " h-[112.667vw]" : "h-[124.667vw]"}
         ${isSpecialWidth ? "xl:h-[520px]" : "xl:h-[460px]"}`}
      >
        <div className={`${index === 2 ? "*:inline lg:*:block w-[90%]" : ""}`}>

        <h1
          className={`uppercase text-[5.333vw] 2xl:text-[1.563vw] leading-[101%] tracking-[-0.07em] font-cofo-medium ${
            isSpecialWidth ? "xl:text-[28px] " : "xl:text-[24px]"
          }`}
        >
          {t(title[0])}
        </h1>
        <h1
          className={`uppercase text-[5.333vw] 2xl:text-[1.563vw] leading-[101%] tracking-[-0.07em] font-cofo-medium ${
            isSpecialWidth ? "xl:text-[28px]" : "xl:text-[24px]"
          }`}
          >
          {t(title[1])}
        </h1>
          </div>
        <InViewWrapper>
          <img
            loading="lazy"
            src={img}
            alt={alt}
            className="w-[200px] h-[191px] xl:w-[12vw] xl:h-[12vw] 2xl:w-[10.417vw] 2xl:h-[9.948vw] object-cover 2xl:mt-[22px] 2xl:mb-[25px] my-4"
          />
        </InViewWrapper>
        <p
          className={`text-[3.733vw]  leading-[101%]   2xl:text-[0.938vw] 2xl:w-[19.271vw] ${
            isMobileWidth && index === 1 ? "w-[99%]" : ""
          } ${index === 3 ? "" : ""} ${
            isSpecialWidth
              ? "xl:text-[16px]"
              : "xl:text-[14px] tracking-[-0.02em]"
          }`}
        >
          {text.map((textItem, i) => {
            const translatedText = t(textItem);
            return (
              <div
                className={`mx-auto ${index === 3 ? "inline xl:block" : ""} ${
                  !isSpecialMobileWidth && index === 1 ? "w-[95.5%] lg:w-full" : ""
                } ${isSpecialMobileWidth && index === 1 ? "w-[93%]" : ""}`}
                key={i}
              >
                {translatedText}
              </div>
            );
          })}
        </p>
        <div className="mt-auto">
          <DetailsLink
            to={"/booking"}
            className={`2xl:text-[0.833vw]  ${
              
              isSpecialWidth ? "xl:text-[.9vw]" : "xl:text-[0.9vw]"
            }`}
          >
            {t("buttons.seeMore")}
          </DetailsLink>
        </div>
      </div>
    </div>
  );
};
