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
      {desc.map((item: TextItem, i: number) => {
        return (
          <span
            key={i}
            className={cn(
              item.isBold && "font-cofo-medium",
              isEng && item.isEng === true && "hidden",
              isLowerTerrase && !isEng && i === 4 && "hidden",

              `text-[3.20vw] uppercase text-[#444444] 2xl:text-[0.94vw] xl:text-[0.96vw] md:leading-[120%] leading-[120%] first-br-visible`
            )}
          >
            {t(item.text)}{" "}
            {isLowerTerrase && i === 0 && <br className="hidden" />}
          </span>
        );
      })}
    </>
  );
};
