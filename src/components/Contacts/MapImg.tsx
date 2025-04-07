import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { RouteButton } from "../Buttons/RouteButton";
export default function MapImg() {
  const { t } = useTranslation();
  return (
    <div className="xl:mt-[55px] lg:mt-[30px] md:block items-center pt-6 md:pt-4.5 md:ps-4 lg:ps-0 lg:pt-0 flex flex-col  md:border-e-0  border-e border-[#C7C7C7] lg:order-4 order-4 lg:w-fit">
      <h4 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] font-cofo-medium  text-[#6B6B6B] uppercase">
        {t("contacts.info.address")}
      </h4>
      <p className="flex items-center text-[12px] font-cofo uppercase underline font-cofo-medium underline-offset-[18%] lg:text-[16px] lg:leading-[22.6px] lg:ps-[4px] pt-[12px] md:pt-[9px] decoration-[6.5%]">
        <CiLocationOn color="black" className="xl:w-[18px] xl:h-[18px] md:w-[16px] md:h-[16px] lg:w-[24px] lg:h-[24px]" />
        {t("contacts.info.addressDesc")}
      </p>
      <RouteButton className="mb-[25px] lg:mb-0 mt-[19px] lg:mt-[21px] lg:w-[197px] w-[178px] text-center" />
    </div>
  );
}
