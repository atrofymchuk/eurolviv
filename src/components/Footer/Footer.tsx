import "./Footer.css";

import { FaFacebook } from "react-icons/fa6";
import { instagram } from "../../store/exportsIcons";
import { useTranslation } from "react-i18next";
import { RatingMobile } from "./RatingMobile";
import { BookingSection } from "./BookingSection";
import { BottomText } from "./BottomText";
import { AddressWithSchedule } from "./AddressWithSchedule";
import { InViewWrapper } from "../utils/InViewWrapper";
import { footer } from "../../store/exportsImg";
import { Link } from "react-router-dom";
import { social } from "../../Constants/Social";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";

  const openPdf = (path: string) => {
    window.open(path, "_blank");
  };

  const pdfDocuments = {
    pathPublicOffer: isEng
      ? "/documents/Public offer agreement.pdf"
      : "/documents/Договір публічної оферти .pdf",
  };

  return (
    <div className="footer-height-fixed relative w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[200px] bg-[#242425] z-10"
        style={{ minHeight: "200px" }}
      ></div>

      <div
        className="absolute top-[200px] left-0 w-full footer-gradient z-[5]"
        style={{ height: "calc(100% - 200px)" }}
      ></div>

      <InViewWrapper>
        <img
          loading="lazy"
          src={footer}
          alt="Background"
          width="1920"
          height="1080"
          className="absolute top-0 left-0 w-full h-[120%] object-cover z-0"
          style={{ minHeight: "1080px" }}
        />
      </InViewWrapper>

      <footer className="relative z-20 flex flex-col lg:flex-row lg:items-start lg:justify-center text-white pt-[53px] lg:pt-[133px] py-[47px]">
        <div className="relative w-full pl-4 lg:pl-0 z-30">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full">
            <div className="relative lg:order-1 order-2 lg:w-[21.9%] lg:pt-[17px] flex flex-col lg:items-center lg:border-e [border-image:linear-gradient(180deg,#242425_0%,#6D7984_97.5%)_1]">
              <div className="flex flex-col h-full justify-between lg:mt-0 mt-[35px]">
                <div className="lg:flex lg:flex-col justify-between h-full grid grid-cols-2 lg:grid-cols-1">
                  <div className="space-y-3 lg:w-full w-[180px]">
                    <ul className="lg:space-y-[11px] space-y-[7px] 2xl:text-[18px] xl:text-[16px] lg:text-[14px] text-[12px] font-cofo uppercase underline lg:no-underline tracking-[0.09em]">
                      <li className="font-cofo-medium">
                        <Link
                          to="/about"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.about")}
                        </Link>
                      </li>
                      <li className="font-cofo-medium">
                        <Link
                          to="/rooms"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.rooms")}
                        </Link>
                      </li>
                      <li className="font-cofo-medium">
                        <Link
                          to="/conference-service"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.conferenceServices")}
                        </Link>
                      </li>
                      <li className="font-cofo-medium">
                        <Link
                          to="/restaurant"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.restaurant")}
                        </Link>
                      </li>
                      <li className="font-cofo-medium">
                        <Link
                          to="/terrace"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.terrace")}
                        </Link>
                      </li>
                      <li className="font-cofo-medium">
                        <Link
                          to="/special-offers"
                          className="lg:hover:underline lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
                        >
                          {t("footer.specialOffers")}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col lg:mt-auto lg:ms-0 ms-[20%]">
                    <div className="">
                      <p className="font-cofo-medium 2xl:text-[18px] xl:text-[16px] lg:text-[14px] font-cofo uppercase text-[12px]">
                        {t("footer.socialMedia")}
                      </p>
                      <div className="flex space-x-4 text-xl lg:mt-[25px] mt-4">
                        <Link
                          to={social.hotel.facebook}
                          target="_blank"
                          className="rounded-full hover:cursor-pointer"
                        >
                          <FaFacebook className="lg:w-[37px] lg:h-[37px] w-[28px] h-[28px]" />
                        </Link>
                        <Link
                          to={social.hotel.instagram}
                          target="_blank"
                          className="rounded-full hover:cursor-pointer"
                        >
                          <img
                            loading="lazy"
                            src={instagram}
                            alt="instagram"
                            width="37"
                            height="37"
                            className="lg:w-[37px] lg:h-[37px] w-[28px] h-[28px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="absolute uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] lg:tracking-[0.06em] lg:-bottom-34 lg:block hidden">
                {t("footer.privacyPolicy")}
              </p>
            </div>

            <AddressWithSchedule
              openPdf={openPdf}
              path={pdfDocuments.pathPublicOffer}
            />

            <BookingSection openPdf={openPdf} pdfDocuments={pdfDocuments} />

            <div className="space-y-4 order-1 lg:order-4 lg:me-1 lg:ms-1 2xl-mx-0 pe-6 md:pe-0 lg:w-[31.39%] w-full flex flex-col lg:pt-[17px]">
              <div className="w-full flex flex-col lg:ps-[32px]">
                <div>
                  <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-cofo-medium lg:text-[24px] text-[20px] leading-[108%] font-cofo px-4 md:px-0 tracking-[-0.05em] lg:max-w-[420px] xl:max-w-[349px] max-w-[315px] lg:text-start text-center w-full">
                      {t("footer.getNews")}
                    </h4>
                  </div>

                  <div className="w-full lg:max-w-[479px] flex flex-col items-center">
                    <input
                      type="email"
                      placeholder={t("footer.email")}
                      className="bg-[#B5B5B52B] lg:py-[13px] lg:ps-[21px] w-full py-2.25 px-3 mb-2.5 rounded-full font-cofo mt-4.25 lg:mt-[22px]"
                    />
                    <button className="bg-[#A47762] font-cofo-medium border uppercase border-[#A47762] hover:bg-[#ffff] hover:text-[#A47762] py-2 px-6 rounded-full lg:text-[18px] block w-full font-cofo hover:cursor-pointer">
                      {t("buttons.send")}
                    </button>
                  </div>
                  <RatingMobile />
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomText />
      </footer>
    </div>
  );
};

export default Footer;
