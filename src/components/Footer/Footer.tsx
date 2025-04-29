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
import { useCustomWidth } from "../Hooks/useCustomWidth";
import ContactMeForm from "./ContactMeForm";  
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useModalStore } from "../../store/useModalStore";
export const Footer = () => {
  const { t, i18n } = useTranslation();
  const isEng = i18n.language === "en";
  const isCustomWidth = useCustomWidth(1450, 1550);
const { isOpenOrder } = useModalStore()
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
          style={{ minHeight: "1480px" }}
        />
      </InViewWrapper>

      <footer className="relative z-20 flex flex-col lg:flex-row lg:items-start  lg:justify-center text-white pt-[53px] lg:pt-[133px] py-[47px]">
        <div className="relative w-full pl-4 lg:pl-0 z-30">
          <div className="flex flex-col lg:flex-row lg:justify-between w-full">
            <div className="relative lg:order-1 order-2 lg:w-[21.9%] lg:pt-[17px] flex flex-col 2xl:px-[3.75vw_3.49vw] xl:px-[2.75vw_1.5vw]  2xl:h-[23.777vw] xl:h-[28.677vw] lg:border-e [border-image:linear-gradient(180deg,#242425_0%,#6D7984_97.5%)_1]">
              <div className="flex flex-col h-full justify-between  lg:mt-0 mt-[35px] ">
                <div className="lg:flex lg:flex-col justify-between xl:justify-start h-full grid grid-cols-2 lg:grid-cols-1">
                  <div className="space-y-3 lg:w-full w-[180px] 2xl:max-h-[25.677vw]">
                    <ul
                      className=" 2xl:space-y-[11px] lg:space-y-[11px] space-y-[7px] 2xl:text-[0.938vw] xl:text-[1.09vw] lg:text-[14px] text-[12px] font-cofo uppercase underline underline-offset-2
                     lg:no-underline  "
                    >
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
                          className="lg:hover:underline   lg:hover:underline-offset-4 lg:transition-all lg:duration-300"
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

                  <div
                    className={`flex flex-col lg:mt-auto xl:mt-[114px] 2xl:mt-[7vw] lg:ms-0 ms-[20%] ${
                      isCustomWidth && "xl:mt-[120px]!"
                    }`}
                  >
                    <div className="">
                      <p className="font-cofo-medium 2xl:text-[0.938vw] xl:text-[1.09vw] lg:text-[14px] font-cofo uppercase text-[12px] 2xl:w-[105%] leading-[1.28]">
                        {t("footer.socialMedia")}
                      </p>
                      <div className="flex lg:space-x-4 space-x-1.75 text-xl lg:mt-[25px] xl:mt-[25px] 2xl:mt-[1.6vw] mt-4">
                        <Link
                          to={social.hotel.facebook}
                          target="_blank"
                          className="rounded-full hover:cursor-pointer"
                        >
                          <FaFacebook className="2xl:w-[1.93vw] 2xl:h-[1.93vw] lg:w-[37px] lg:h-[37px] w-[28px] h-[28px] xl:w-[2.5vw] xl:h-[2.5vw]" />
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
                            className="2xl:w-[1.93vw] 2xl:h-[1.93vw] lg:w-[37px] lg:h-[37px] w-[28px] h-[28px] xl:w-[2.5vw] xl:h-[2.5vw]"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="absolute uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%]
                 2xl:text-[0.833vw] xl:text-[12px] 2xl:bottom-[-9vw] xl:bottom-[-10.6vw]
              lg:text-[12px] lg:tracking-[0.06em] lg:-bottom-34 lg:block hidden"
              >
                {t("footer.privacyPolicy")}
              </p>
            </div>

            <AddressWithSchedule
              openPdf={openPdf}
              path={pdfDocuments.pathPublicOffer}
            />

            <BookingSection openPdf={openPdf} pdfDocuments={pdfDocuments} />

            <div className="space-y-4 order-1 lg:order-4 lg:me-1 lg:ms-1 2xl-mx-0 pe-6 md:pe-0 lg:w-[31.39%] w-full flex flex-col lg:pt-[17px]  2xl:h-[25.677vw] xl:h-[28.677vw]">
              <div className="w-full flex flex-col lg:ps-[32px] 2xl:ps-[1.67vw]">
                <div>
                  <div className="flex flex-col items-center md:items-start">
                    <h4
                      className="text-lg font-cofo-medium 2xl:text-[1.25vw] text-[20px] leading-[108.6%] font-cofo px-4 md:px-0 tracking-[-0.05em] 
                    lg:max-w-[420px] 2xl:w-[18.177vw] w-[315px] lg:text-start text-center "
                    >
                      {t("footer.getNews")}
                    </h4>
                  </div>
                  <ContactMeForm />
                  <RatingMobile />
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isOpenOrder && <ToastContainer
        position="bottom-right"
        style={{ zIndex: 2000 }}
        autoClose={5000}
      />}
        <BottomText />
      </footer>
    </div>
  );
};

export default Footer;
