import { visa, mastercard, rating } from "../../store/exportsIcons";
import { useTranslation } from "react-i18next";
export const Rating = ({openPdf, path}: {openPdf: (path: string) => void, path: string}) =>{
  const { t } = useTranslation();
    return(
        
        <div className="lg:hidden block mt-[61px] h-full">
        <div className="flex items-center">
          <img
            src={rating}
            alt="rating"
            width={42}
            height={42}
            className="lg:mt-8.5"
          />
          <div className="flex-col ms-2">
            <p className="lg:text-[18px] text-[12px] lg:mb-2 font-cofo-medium uppercase">
              Booking.com
            </p>
            <p className="lg:text-[18px] text-[#999999] text-[12px] font-cofo uppercase">
              Traveller Review Awards 2024
            </p>
          </div>
        </div>

        <div className="flex mt-6 space-x-3">
          <img src={visa} alt="Visa" className="h-6" />
          <img src={mastercard} alt="Mastercard" className="h-6" />
        </div>
        <div className="flex justify-between mt-[65px]">
          
        <p className=" uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%] text-[12px] lg:tracking-[0.06em] ">
        {t("footer.privacyPolicy")}
        </p>
        <p onClick={() => openPdf(path)} className=" uppercase underline cursor-pointer lg:leading-[20px] underline-offset-[18%] text-[12px] lg:tracking-[0.06em] ">
        {t("footer.publicOffer")}
        </p>
        </div>
      
      </div>       
    )
}
