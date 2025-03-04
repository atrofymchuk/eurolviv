import { useTranslation } from "react-i18next";
import hotel from "../../assets/Contacts/hotel.png";

export const ContactUs = () => {
  const { t } = useTranslation();
  return <div className="lg:mt-[50px] ms-[20px]  flex-col flex text-center md:text-start md:border-e-0 md:border-b-0 border-e border-b border-[#C7C7C7]">
  <div className="md:pe-5 ">
    <h1
      className="font-cofo uppercase
    2xl:text-[40px] 2xl:leading-[40px] xl:text-[32px] xl:leading-[32px] lg:text-[24px] lg:leading-[24px] md:text-[20px] md:leading-[20px]  tracking-[-0.05em] text-[#252526] 
    text-[24px] leading-[24px] pt-[41px] lg:pt-0
    "
    >
      {t("contacts.info.partners")}
    </h1>
    <p className="uppercase font-cofo 2xl:text-[20px] 2xl:leading-[20px] xl:text-[16px] xl:leading-[16px] lg:text-[14px]  md:text-[14px] leading-[104%]   lg:mt-[35px] text-[#6B6B6B] 2xl:max-w-[969px]  mt-[12px] ">
      {t("contacts.info.partnersText.0")}
      <span className="font-semibold text-[#252526]">
        {t("contacts.info.partnersText.1")}
      </span>
      {t("contacts.info.partnersText.2")}
    </p>
  </div>

  <div className="lg:mt-[40px] flex-col flex text-center md:text-start justify-center items-center md:justify-start md:items-start lg:pb-0 pb-[19px]  ">
    <div className="md:pe-5">
      <h1 className="font-cofo uppercase 2xl:text-[40px] 2xl:leading-[40px] xl:text-[32px] xl:leading-[32px] lg:text-[24px] lg:leading-[24px] md:text-[20px] md:leading-[20px] tracking-[-0.05em] text-[#252526] text-[24px] leading-[24px]  pt-[31px] lg:pt-0">
        {t("contacts.info.career")}
      </h1>
      <p className="uppercase font-cofo 2xl:text-[20px] 2xl:leading-[20px] xl:text-[16px] xl:leading-[16px] lg:text-[14px]  md:text-[14px] leading-[104%] text-[16px]  lg:mt-[35px] text-[#6B6B6B] 2xl:max-w-[969px]  mt-[12px] ">
        {t("contacts.info.careerText.0")}
        <span className="font-semibold text-[#252526]">
          {t("contacts.info.careerText.1")}
        </span>
        {t("contacts.info.careerText.2")}
      </p>
    </div>
    <div className=" max-w-full lg:mt-[60px] lg:mb-10 mt-[40px] lg:pe-[40px] ">
      <img
        src={hotel}
        alt="hotel"
        className="w-full lobject-cover "
      />
    </div>
  </div>
</div>
};

