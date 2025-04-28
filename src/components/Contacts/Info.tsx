import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import ContactUsForm from "./ContactUsForm";
import { OurContactsWithMap } from "./OurContactsWithMap";
import { ContactUs } from "./ContactUs";
import { Link } from "react-router-dom";
import { social } from "../../Constants/Social";
import { useIsEnglish } from "../Hooks/useIsEnglish";
export const Info = () => {
  const { t } = useTranslation();
  const isEng = useIsEnglish();

  return (
    <div className="flex md:flex-row flex-col items-center w-full">
      <div className="flex w-[89.067%] md:w-[94.79%] max-w-fit">
        <div className="grid grid-cols-1  md:grid-cols-[38.13%_61.87%] md:border-b border-[#C7C7C7] md:border-e border-s xl:border-s-0">
          <div className="2xl:ps-[4.43vw] xl:ps-[55px] md:ps-[30px] pt-[43px] border-e border-[#C7C7C7] lg:w-full lg:pt-[68px] 2xl:pt-[3.54vw]  2xl:h-[28.13vw] border-b md:text-start ">
            <h1
              className="font-cofo uppercase xl:pt-0  text-center md:text-start 
            text-[8.53vw] md:text-[32px] lg:text-[48px] xl:text-[5.78vw] 2xl:text-[5.21vw] 
            tracking-[-0.07em] leading-[1.2] lg:leading-[1.1] xl:leading-[94%]  mx-[20px] md:mx-0
            lg:tracking-[-0.04em]"
            >
              {t("contacts.info.title")}
            </h1>
            <div
              className="lg:mt-[39px] 2xl:mt-[2.03vw] mt-[25px] space-y-3 md:block items-center text-center
             md:text-start flex flex-col 2xl:w-[60%] xl:w-[80%] lg:w-[78%] mx-[5.33vw] md:mx-0"
            >
              <p
                className={` uppercase 
              text-[3.2vw] md:text-[14px] lg:text-[12px] 2xl:text-[0.83vw]
              leading-[1.4] lg:leading-[1.3] 
              ${isEng ? "w-[107%] 2xl:w-[120%]" : ""}
              text-[#252526] 
                `}
              >
                {t("contacts.info.desc")}
              </p>
              <p
                className={` uppercase 
              text-[3.2vw] md:text-[14px] lg:text-[12px] 2xl:text-[0.83vw]
              leading-[1.4] lg:leading-[1.3] 
              text-[#8C331B] font-cofo-medium
              ${isEng ? "w-[105%] 2xl:w-[110%]" : ""}
              `}
              >
                {t("contacts.info.contactUs")}
              </p>
            </div>
            <div className="flex flex-col lg:mt-11 2xl:mt-[2.29vw] mt-6 mb-6.5 space-y-3 lg:mb-[53px] items-center md:items-start">
              <h4 className="text-[3.2vw] md:text-[14px] 2xl:text-[0.83vw] text-[#6B6B6B] font-cofo uppercase ">
                {t("contacts.info.socialMedia")}
              </h4>
              <div className="flex lg:space-x-2 space-x-1.5 text-lg">
                <Link
                  className="rounded-full hover:cursor-pointer  transition-transform hover:scale-110"
                  to={social.hotel.facebook}
                  target="_blank"
                >
                  <FaFacebook
                    className="w-[30px] h-[30px] md:w-[33px] md:h-[33px] xl:w-[2.61vw] xl:h-[2.61vw]  2xl:w-[2.08vw] 2xl:h-[2.08vw]"
                    color="#8C331B"
                  />
                </Link>
                <Link
                  to={social.hotel.instagram}
                  target="_blank"
                  className="rounded-full hover:cursor-pointer bg-[#8C331B] p-1.5 transition-transform hover:scale-110"
                >
                  <FaInstagram
                    color="white"
                    className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] xl:w-[1.72vw] xl:h-[1.72vw] 2xl:w-[1.5vw] 2xl:h-[1.5vw]"
                  />
                </Link>
              </div>
            </div>
          </div>

          <OurContactsWithMap />
          <div className="border-e border-[#C7C7C7] flex flex-col h-full md:text-start  text-center  ">
            <div className="2xl:ps-[4.43vw] xl:ps-[55px] md:ps-[30px] 2xl:pt-[3.02vw]  lg:pt-[58px] pt-[43px] flex-1 mx-[5.33vw] md:mx-0">
              <h1
                className=" uppercase 
              leading-[82%] lg:tracking-[-0.04em] 
                text-[8.53vw]  lg:text-[48px] xl:text-[5.78vw] 2xl:text-[5.21vw]  tracking-[-0.07em] xl:w-[90%] 2xl:w-[29.53vw] "
              >
                {t("contacts.info.headingContactUs")}
              </h1>
              <div className="lg:mt-[39px] 2xl:mt-[2.03vw] mt-[25px] lg:space-y-7 space-y-2.5">
                <p
                  className="font-cofo-medium uppercase 
                  text-[#8C331B] text-[3.2vw] md:text-[14px] lg:text-[14px] 2xl:text-[1.04vw]"
                >
                  {t("contacts.info.contactWithUsDesc")}
                </p>
                <p
                  className={` uppercase 
                 text-[#252526] lg:text-[14px] md:text-[14px] 2xl:text-[1.04vw]  xl:w-[90%] 2xl:w-[95%]
                text-[3.2vw] ${isEng ? "w-[90%] mx-auto lg:mx-0"  : "w-[95%]"}
                `}
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
