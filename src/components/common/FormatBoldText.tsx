import { useTranslation } from "react-i18next";
import cn from "classnames";

interface TextItem {
  text: string;
  isBold?: boolean;
  isEng?: boolean;
}

export const FormatBoldText = ({
  desc,
  isLowerTerrase,
}: {
  desc: TextItem[];
  isLowerTerrase?: boolean;
}) => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";

  return (
    <>
      {desc.map((item: TextItem, index: number) => (
        <span
          key={index}
          className={cn(
            item.isBold && "font-cofo-medium",
            isEng && item.isEng === true && "hidden",
            isLowerTerrase && !isEng && index === 4 && "hidden",

            `text-[12px] uppercase text-[#444444] 2xl:text-[18px] md:leading-[120%] leading-[100%]`
          )}
        >
          {t(item.text)}
        </span>
      ))}
    </>
  );
};
