import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { RouteButton } from "@/components/Buttons/RouteButton";
export default function MapImg() {
  const { t } = useTranslation();
  return (
    <div className="2xl:mt-[2.86vw] xl:mt-[2.34vw] md:block items-center pt-6 md:pt-4.5 md:ps-4 lg:ps-0 lg:pt-0 flex flex-col  md:border-e-0  border-e border-[#C7C7C7] lg:order-4 order-4 lg:w-fit">
      <h4 className="text-[12px] md:text-[14px] lg:text-[12px] 2xl:text-[0.83vw] xl:text-[1.09vw] font-cofo-medium  text-[#6B6B6B] uppercase">
        {t("contacts.info.address")}
      </h4>
      <p className="flex items-center text-[12px] font-cofo uppercase underline font-cofo-medium xl:text-[0.94vw]
      underline-offset-[18%] lg:text-[16px] 2xl:text-[0.83vw]  lg:ps-[4px] pt-[12px] md:pt-[9px] decoration-[6.5%]">
        <CiLocationOn color="black" className="xl:w-[18px] xl:h-[18px] 2xl:w-[0.94vw] 2xl:h-[0.94vw] md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]" />
        {t("contacts.info.addressDesc")}
      </p>
      <RouteButton className="mb-[25px] 2xl:text-[0.73vw] xl:text-[0.78vw]! xl:px-0! lg:mb-0 mt-[19px] lg:mt-[21px] 2xl:mt-[1.09vw] lg:w-[197px] 2xl:w-[10.26vw]! 2xl:h-[2.03vw]
       text-[0.94vw] w-[178px] xl:w-[12.26vw]! xl:h-[3vw] text-center flex items-center justify-center" />
    </div>
  );
}
