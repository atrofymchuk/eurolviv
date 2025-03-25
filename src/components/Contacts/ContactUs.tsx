import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { hotelContacts } from "../../store/exportsImg";

export const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-[50px] xl:px-[37px] md:px-[20px] w-full  flex-col flex text-center md:text-start md:border-e-0 md:border-b-0 border-e border-b border-[#C7C7C7]">
      <div className="md:pe-5 ">
        <h1
          className="uppercase
          2xl:text-[40px] 2xl:leading-[40px] xl:text-[32px] xl:leading-[32px]  lg:text-[24px] lg:leading-[24px] md:text-[20px] md:leading-[20px]  tracking-[-0.05em] text-[#252526] 
          text-[24px] leading-[24px] pt-[41px] lg:pt-0
          "
        >
          {t("contacts.info.partners")}
        </h1>
        <p className="uppercase 2xl:text-[20px] text-[12px]   px-[18px] md:px-0 xl:w-[89%] xl:text-[16px]  lg:text-[14px]  md:text-[14px] leading-[125%]   lg:mt-[35px] text-[#6B6B6B] 2xl:max-w-[969px]  mt-[12px] ">
          {t("contacts.info.partnersText.0")}
          <span className="font-cofo-medium text-[#252526]">
            {t("contacts.info.partnersText.1")}
          </span>
          {t("contacts.info.partnersText.2")}
        </p>
      </div>

      <div className="lg:mt-[40px] flex-col flex text-center md:text-start justify-center items-center md:justify-start md:items-start lg:pb-0 pb-[19px]  ">
        <div className="md:pe-5">
          <h1 className=" uppercase 2xl:text-[40px] 2xl:leading-[40px] xl:text-[32px] xl:leading-[32px] lg:text-[24px] lg:leading-[24px] md:text-[20px] md:leading-[20px] tracking-[-0.05em] text-[#252526] text-[24px] leading-[24px]  pt-[31px] lg:pt-0">
            {t("contacts.info.career")}
          </h1>
          <p className="uppercase px-[18px] md:px-0  leading-[125%] 2xl:text-[20px] xl:text-[16px] lg:text-[14px]  md:text-[14px]  text-[12px]  lg:mt-[35px] text-[#6B6B6B] 2xl:max-w-[969px]  mt-[12px] ">
            {t("contacts.info.careerText.0")}
            <span className="font-cofo-medium text-[#252526]">
              {t("contacts.info.careerText.1")}
            </span>
            {t("contacts.info.careerText.2")}
          </p>
        </div>
        <div className=" lg:mt-[60px] lg:mb-10 mt-[40px] px-[16px] md:px-0">
          <InViewWrapper>
            <img
              src={hotelContacts}
              alt="hotel"
              className="w- lobject-cover "
            />
          </InViewWrapper>
        </div>
      </div>
    </div>
  );
};
