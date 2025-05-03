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
  isEng,
  descNumber,
}: {
  desc: TextItem[];
  isLowerTerrase?: boolean;
  isEng?: boolean;
  descNumber?: number;
}) => {
  const { t } = useTranslation();

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
              isEng && descNumber === 2 && i == 2 && "lg:break-all ",
              isEng && descNumber === 2 && i == 3 && "break-all lg:break-words ",

              `text-[3.20vw] uppercase text-[#444444] 2xl:text-[0.94vw] xl:text-[0.96vw] md:leading-[120%] leading-[120%] first-br-visible`
            )}
          >
            {t(item.text)}{" "}
            {
              isEng && descNumber === 3&& i ==1 && <br className="lg:hidden" />
            }
            {
              !isEng && isLowerTerrase && descNumber === 1&& i ==0 && <br className="lg:flex hidden" />
            }
            {(!isEng && isLowerTerrase && i === 0) ||
              (descNumber === 1 && i === 3 && isEng && !isLowerTerrase && (
                <br className="hidden" />
              ))}
          </span>
        );
      })}
    </>
  );
};
