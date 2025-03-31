import { useTranslation } from "react-i18next";
import cn from "classnames";

export const FormatBoldText = ({
  desc,
}: {
  desc: { text: string; isBold?: boolean }[];
}) => {
  const { t } = useTranslation();
  return (
    <>
      {desc.map((item: { text: string; isBold?: boolean }, index: number) => (
        <span
          key={index}
          className={cn(
            item.isBold && "font-cofo-medium",
            `text-[12px] uppercase text-[#444444] 2xl:text-[18px] md:leading-[120%] leading-[100%] `
          )}
        >
          {t(item.text)}
        </span>
      ))}
    </>
  );
};
