import { Link } from "react-router-dom";
import { visa, mastercard, rating } from "../../store/exportsIcons";
import { useTranslation } from "react-i18next";
export const Rating = ({
  openPdf,
  pdfDocuments,
}: {
  openPdf: (path: string) => void;
  pdfDocuments: { pathPublicOffer: string; pathPrivacyPolicy: string };
}) => {
  const { t } = useTranslation();
  return (
    <div className="lg:hidden block mt-[61px] h-full">
      <div className="flex items-center">
        <img
          loading="lazy"
          src={rating}
          alt="rating"
          width={42}
          height={42}
          className="lg:mt-8.5"
        />
        <div className="flex-col ms-2">
          <p className="2xl:text-[0.938vw] lg:text-[18px] text-[12px] lg:mb-2 font-cofo-medium uppercase">
            Booking.com
          </p>
          <p className="2xl:text-[0.938vw] lg:text-[18px] text-[#D6D5D5] text-[12px] font-cofo uppercase">
            Traveller Review Awards 2024
          </p>
        </div>
      </div>

      <div className="flex mt-6 space-x-3">
        <img loading="lazy" src={visa} alt="Visa" className="h-6" />
        <img loading="lazy" src={mastercard} alt="Mastercard" className="h-6" />
      </div>
      <div className="flex justify-between mt-[65px] px-[1.27vw] lg:px-0">
        <p className=" uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%] text-[12px] lg:tracking-[0.06em] ">
          <Link to={pdfDocuments.pathPrivacyPolicy} target="_blank">
            {t("footer.privacyPolicy")}
          </Link>
        </p>
        <p
          onClick={() => openPdf(pdfDocuments.pathPublicOffer)}
          className=" uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%] text-[12px] lg:tracking-[0.06em] "
        >
          {t("footer.publicOffer")}
        </p>
      </div>
    </div>
  );
};
