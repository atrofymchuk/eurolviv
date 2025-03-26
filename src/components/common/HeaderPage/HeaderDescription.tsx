import cn from "classnames";
import { useTranslation } from "react-i18next";
import { HeaderDescriptionProps } from "../../../types/headerTypes";

export const HeaderDescription: React.FC<HeaderDescriptionProps> = ({ description, size }) => {
  const { t } = useTranslation();
  
  return (
    <p className={cn(`font-cofo w-[80%] md:w-[60%] xl:w-[35%] 2xl:w-[30%] uppercase lg:text-[18px] lg:leading-[22px] lg:w-[635px]  ${size ? "lg:pt-[33px]" : "pt-[46px]"} pt-[20px] text-[14px] leading-[17.5px] px-[10px]`)}>
      {t(description)}
    </p>
  );
}; 