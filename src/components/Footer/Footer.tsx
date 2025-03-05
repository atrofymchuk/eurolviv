import "./Footer.css";

import backgroundImage from "../../assets/footer.png";

import instagram from "../../assets/icons/instagram-f-svgrepo-com.svg";
import { FaFacebook } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
import { RatingMobile } from "./RatingMobile";
import { BookingSection } from "./BookingSection";
import { BottomText } from "./BottomText";
import { AddressWithSchedule } from "./AddressWithSchedule";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative text-white py-[67px] px-6 2xl:px-20 overflow-hidden lg:h-[800px] h-[1600px] z-20">
      <div className="absolute top-0 left-0 w-full h-[200px] bg-[#242425] z-10"></div>

      <div className="absolute top-[200px] left-0 w-full h-[calc(100%-200px)] footer-gradient z-10"></div>

      <div className="absolute inset-0 bg-[#25252659] pt-[100px] z-10"></div>
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full  z-0 "
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between max-w-[1720px] lg:mx-auto  ">
        <div className="lg:order-1 order-2">
          <div className="flex flex-col lg:h-[473px] h-fit justify-between 2xl:px-10 lg:border-e border-[rgba(68, 68, 68, 1)]">
            <div className="grid grid-cols-2  lg:grid-cols-1 gap-6 w-full">
              <div className="space-y-3 lg:w-fit w-[180px]">
                <ul className="space-y-4 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] font-cofo uppercase lg:leading-[18px] leading-[15px]  underline lg:no-underline tracking-[0.09em]">
                  <li>{t("footer.about")}</li>
                  <li>{t("footer.rooms")}</li>
                  <li>{t("footer.conferenceServices")}</li>
                  <li>{t("footer.restaurant")}</li>
                  <li>{t("footer.specialOffers")}</li>
                </ul>
              </div>

              <div className="flex flex-col xl:mt-auto w-fit">
                <h4 className="xl:mt-44 font-semibold 2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-cofo uppercase  text-[12px]">
                  {t("footer.socialMedia")}
                </h4>
                <div className="flex space-x-4 text-xl lg:mt-[25px] mt-4">
                  <span className="rounded-full hover:cursor-pointer">
                    <FaFacebook className="w-[37px] h-[37px]" />
                  </span>
                  <span className="rounded-full hover:cursor-pointer">
                    <img src={instagram} alt="instagram" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="uppercase underline lg:leading-[20px] underline-offset-[18%] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] lg:tracking-[0.06em] 2xl:mt-7 xl:mt-4 lg:mt-23 xl:pt-18 lg:block hidden">
            {t("footer.privacyPolicy")}
          </p>
        </div>

        <AddressWithSchedule />

        <BookingSection />

        <div className="space-y-4 order-1 lg:order-4 lg:me-1 lg:ms-1 2xl-mx-0">
          <div className="w-full">
            <h4 className="text-lg font-semibold lg:text-[24px] text-[20px]  font-cofo tracking-[-0.05em] lg:max-w-[320px] lg:w-fit  lg:text-start text-center w-full max-w-[415px] ">
              {t("footer.getNews")}
            </h4>
            <input
              type="email"
              placeholder={t("footer.email")}
              className="bg-[#B5B5B52B] lg:py-[13px] lg:ps-[21px] lg:w-[415px]  py-2.25 px-3 mb-2.5 rounded-full font-cofo w-full max-w-[415px]"
            />
            <button className="bg-[#A47762] border border-[#A47762] hover:bg-[#ffff] hover:text-[#A47762] py-2 px-6 rounded-full lg:text-[18px] block max-w-[415px] w-full font-semibold  font-cofo hover:cursor-pointer">
              {t("buttons.send")}
            </button>
          </div>

          <RatingMobile />
        </div>
      </div>
      <BottomText />
    </footer>
  );
};

export default Footer;
