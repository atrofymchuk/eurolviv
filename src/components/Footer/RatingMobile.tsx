import { mastercard, visa, rating } from "../../store/exportsIcons"


        export const RatingMobile = () => {
            return (
                <div className="lg:block hidden ">
                <img src={rating} alt="rating" className="lg:mt-8.5 " />
                <p className="mt-4 lg:text-[18px] lg:mb-2 font-cofo uppercase ">
                  Booking.com
                </p>
                <p className="mt-4 lg:text-[18px] text-[#999999] font-cofo uppercase">
                  Traveller Review Awards 2024
                </p>
    
                <div className="flex space-x-4 mt-10">
                  <img src={visa} alt="Visa" className="h-6" />
                  <img src={mastercard} alt="Mastercard" className="h-6" />
                </div>
                <div className="flex"></div>
              </div>
            )
        }
