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
        `w-[75%] md:w-[60%] xl:w-[40%] 2xl:w-[35%] uppercase 2xl:text-[0.94vw] xl:text-[1.09vw] lg:text-[18px] lg:leading-[22px] lg:w-[635px]  ${
          size ? "lg:pt-[33px]" : "2xl:pt-[2.4vw] pt-[30px]"
        } pt-[20px] text-[3.73vw] leading-[17.5px] px-[10px]`
      )}
    >
      {t(description)}
    </p>
  );
};
