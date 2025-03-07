import { CiLocationOn } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export default function MapImg() {
  const { t } = useTranslation();
  return (
    <div className="xl:ms-[37px] lg:ms-[20px]  md:block items-center pt-4.5 lg:pt-0 flex flex-col md:border-b-0 md:border-e-0 border-b border-e border-[#C7C7C7] lg:order-4 order-4 lg:w-fit">
      <h4 className="text-[12px] md:text-[14px] lg:text-[18px] font-semibold  text-[#6B6B6B] uppercase">
        {t("contacts.info.address")}
      </h4>
      <p className="flex items-center text-[12px] font-cofo uppercase underline underline-offset-[18%] lg:text-[16px] lg:leading-[22.6px] lg:ps-[4px] pt-3 decoration-[6.5%]">
        <CiLocationOn color="black" className="font-semibold" />
        {t("contacts.info.addressDesc")}
      </p>
      <a
        target="_blank"
        href="https://maps.app.goo.gl/HZa54yvTo7B7JoE49"
        className="inline-flex w-fit uppercase hover:bg-white hover:text-[#252526] px-[18px] py-[10.5px] text-[12px] lg:text-[14px] xl:px-[20.5px] xl:py-[10.5px]
  rounded-full font-cofo font-semibold mb-[25px] lg:mb-0 mt-[19px] lg:mt-[21px] hover:cursor-pointer bg-[#252526] text-white border border-[#252526]"
      >
        {t("buttons.route")}
      </a>
    </div>
  );
}
