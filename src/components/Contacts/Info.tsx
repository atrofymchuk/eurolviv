import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ContactUsForm from "./ContactUsForm";
import { OurContactsWithMap } from "./OurContactsWithMap";
import { ContactUs } from "./ContactUs";

export const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="flex lg:flex-row flex-col items-center w-full">
      <div className="flex w-[94.79%] max-w-fit">
        <div className="grid grid-cols-1  md:grid-cols-[44.26%_55.74%] md:border-b border-[#C7C7C7] md:border-e border-s xl:border-s-0">
          <div className="xl:ps-[95px] md:ps-[40px] pt-4.5 border-e border-[#C7C7C7] lg:w-full lg:pt-[68px] lg:h-[540px] border-b md:text-start">
            <h1
              className="font-cofo uppercase xl:pt-0  text-center md:text-start 
            text-[32px] md:text-[32px] lg:text-[48px] xl:text-[80px] 2xl:text-[100px] 
            tracking-[0.07em] leading-[1.2] lg:leading-[1.1] xl:leading-[1]  
            lg:tracking-[-0.04em]"
            >
              {t("contacts.info.title")}
            </h1>
            <div className="lg:mt-[39px] mt-[25px] space-y-7 md:block items-center text-center md:text-start flex flex-col">
              <p
                className="font-cofo uppercase 
              text-[12px] md:text-[14px] lg:text-[14px] 
              leading-[1.4] lg:leading-[1.3] 
              text-[#252526] 
              w-[299px] md:w-[340px] lg:w-[370px]"
              >
                {t("contacts.info.desc")}
              </p>
              <p
                className="font-cofo uppercase 
              text-[12px] md:text-[14px] lg:text-[14px] 
              leading-[1.4] lg:leading-[1.3] 
              text-[#8C331B] font-semibold 
              w-[299px] md:w-[340px] lg:w-[370px]"
              >
                {t("contacts.info.contactUs")}
              </p>
            </div>
            <div className="flex flex-col lg:mt-10 mt-6 mb-6.5 space-y-3 lg:mb-[53px] items-center md:items-start">
              <h4 className="text-[12px] md:text-[14px] lg:text-[18px] text-[#6B6B6B] font-cofo uppercase ">
                {t("contacts.info.socialMedia")}
              </h4>
              <div className="flex space-x-4 text-lg">
                <span className="rounded-full hover:cursor-pointer transition-transform hover:scale-110">
                  <FaFacebook
                    className="w-[30px] h-[30px] md:w-[33px] md:h-[33px] lg:w-[37px] lg:h-[37px]"
                    color="#8C331B"
                  />
                </span>
                <span className="rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 transition-transform hover:scale-110">
                  <FaInstagram
                    color="white"
                    className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px]"
                  />
                </span>
              </div>
            </div>
          </div>

          <OurContactsWithMap />
          <div className="border-e border-[#C7C7C7] flex flex-col h-full md:text-start  text-center ">
            <div className="xl:ps-[95px] md:ps-[40px] lg:pt-[58px] pt-[43px] flex-1 ">
              <h1
                className="font-cofo uppercase 
              leading-[102%] lg:tracking-[-0.04em]
              text-[32px] md:text-[32px] lg:text-[48px] xl:text-[80px] 2xl:text-[100px]  tracking-[0.07em] "
              >
                {t("contacts.info.headingContactUs")}
              </h1>
              <div className="lg:mt-[39px] mt-[25px] lg:space-y-7 space-y-2.5">
                <p
                  className="font-cofo uppercase font-semibold
                 lg:w-[370px] text-[#8C331B] text-[12px] md:text-[14px] lg:text-[14px]  lg:leading-[20px] 
               leading-[15px]  "
                >
                  {t("contacts.info.contactWithUsDesc")}
                </p>
                <p
                  className="font-cofo uppercase 
                lg:w-[370px] text-[#252526] lg:text-[14px] md:text-[14px]  lg:leading-[20px] 
                text-[12px] leading-[15px]"
                >
                  {t("contacts.info.review")}
                </p>
              </div>
            </div>
            <ContactUsForm />
          </div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};
