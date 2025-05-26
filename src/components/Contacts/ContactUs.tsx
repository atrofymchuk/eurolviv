import { useTranslation } from "react-i18next";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { hotelContacts } from "@/store/exportsImg";
import { useIsEnglish } from "@/hooks/useIsEnglish";
export const ContactUs = () => {
  const { t } = useTranslation();
  const isEng = useIsEnglish();
  return (
    <div className="lg:mt-[50px] 2xl:mt-[2.6vw] 2xl:px-[1.93vw] xl:px-[1.88vw] md:px-[20px] w-full  flex-col flex text-center md:text-start md:border-e-0 md:border-b-0 border-e border-b border-[#C7C7C7]">
      <div className="md:pe-5 ">
        <h1
          className="uppercase 
          2xl:text-[2.08vw] 2xl:leading-[40px] xl:text-[32px]   lg:text-[24px] lg:leading-[24px] md:text-[20px] md:leading-[20px]  tracking-[-0.05em] text-[#252526] 
          text-[6.4vw]  pt-[41px] lg:pt-0
          "
        >
          {t("contacts.info.partners")}
        </h1>
        <p
          className={`uppercase 2xl:text-[1.04vw] text-[3.2vw] 2xl:w-[87%]  px-[18px] md:px-0  xl:text-[1.09vw] 
            ${isEng ? "2xl:w-[89%] xl:w-[93%] " : "2xl:w-[90%] xl:w-[92%] "}
         lg:text-[14px] xl:text-[1.09vw]  md:text-[14px] leading-[125%] 2xl:mt-[1.82vw]  lg:mt-[35px] text-[#6B6B6B]   mt-[12px] `}
        >
          {t("contacts.info.partnersText.0")}
          <span className="font-cofo-medium text-[#252526]">
            {t("contacts.info.partnersText.1")}
          </span>
          {t("contacts.info.partnersText.2")}
        </p>
      </div>

      <div className="2xl:mt-[2.08vw]  lg:mt-[40px] flex-col flex text-center md:text-start justify-center items-center md:justify-start md:items-start lg:pb-0 pb-[19px]  ">
        <div className="md:pe-5">
          <h1 className=" uppercase 2xl:text-[2.08vw]  xl:text-[32px]  lg:text-[24px]  md:text-[20px]  tracking-[-0.05em] text-[#252526] text-[24px] leading-[24px]  pt-[31px] lg:pt-0">
            {t("contacts.info.career")}
          </h1>
          <p
            className={`uppercase px-[18px] md:px-0 
            ${
              isEng ? "2xl:w-[97%] xl:w-[103%]" : "xl:w-[100%]"
            } w-[101%]  leading-[125%] 2xl:text-[1.04vw] xl:text-[1.09vw] lg:text-[14px]  md:text-[14px]  text-[3.2vw] 2xl:mt-[1.82vw]  lg:mt-[35px] text-[#6B6B6B]    mt-[12px] `}
          >
            {t("contacts.info.careerText.0")}
            <span className="font-cofo-medium text-[#252526]">
              {t("contacts.info.careerText.1")}
            </span>
            {t("contacts.info.careerText.2")}
          </p>
        </div>
        <div className=" lg:mt-[60px] 2xl:mt-[3.13vw] lg:mb-10 mt-[40px] px-[16px] md:px-0">
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
