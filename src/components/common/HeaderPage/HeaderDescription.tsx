import cn from "classnames";
import { useTranslation } from "react-i18next";
import { HeaderDescriptionProps } from "@/types/headerTypes";

const formatTextWithLineBreaks = (text: string): string => {
  return text
    .split(".")
    .map((sentence, index, array) => {
      const trimmedSentence = sentence.trim();
      return index === array.length - 1
        ? trimmedSentence
        : `${trimmedSentence}.\n`;
    })
    .join("");
};

export const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  description,
  size,
  roomInfo,
  descriptionMobile,
}) => {
  console.log(size);
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 768;
  const isStandartTwoBeds =
    size?.toLowerCase().includes("standarttwobed") || false;
  const isStandartSingle =
    size?.toLowerCase().includes("standartsingle") || false;
  const isStandartTwoBedsBalcony =
    size?.toLowerCase().includes("standarttwobedbalcony") || false;
  const isLuxlegant = size?.toLowerCase().includes("luxelegant") || false;
  const getFormattedText = () => {
    const text =
      isMobile && descriptionMobile ? t(descriptionMobile) : t(description);
    return isMobile && descriptionMobile
      ? formatTextWithLineBreaks(text)
      : text;
  };

  return (
    <p
      className={cn(
        ` uppercase 2xl:text-[0.94vw] xl:text-[1.09vw] lg:text-[18px] lg:leading-[22px] lg:w-[635px] 
        ${roomInfo ? "w-[80%] " : "w-[80%] md:w-[60%] xl:w-[40%] 2xl:w-[35%]"}
        ${size ? "lg:pt-[33px]" : "2xl:pt-[2.4vw] pt-[30px]"} 
        ${isMobile && descriptionMobile ? "w-[54%]! whitespace-pre-line" : ""}
        ${isStandartTwoBeds ? "w-[50%]!" : ""}
        ${isStandartTwoBedsBalcony ? "xl:w-[30%]! w-[50%]!" : ""}
        ${isLuxlegant ? "xl:w-[33%]! w-[65%]!" : ""}
        ${isStandartSingle ? "w-[90%]!" : ""}
        pt-[20px] text-[3.2vw] leading-[17.5px] `
      )}
    >
      {getFormattedText()}
    </p>
  );
};
