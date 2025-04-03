import cn from "classnames";
import { useTranslation } from "react-i18next";
import { HeaderDescriptionProps } from "../../../types/headerTypes";

export const HeaderDescription: React.FC<HeaderDescriptionProps> = ({
  description,
  size,
}) => {
  const { t } = useTranslation();

  return (
    <p
      className={cn(
        `w-[95%] md:w-[60%] xl:w-[35%] 2xl:w-[35%] uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px] text-[10px] ${
          size ? "lg:pt-[33px]" : "lg:pt-[46px] pt-[30px]"
        } pt-[20px] text-[14px] leading-[17.5px] px-[10px]`
      )}
    >
      {t(description)}
    </p>
  );
};
