import { mastercard, visa, rating } from "../../store/exportsIcons";

export const RatingMobile = () => {
  return (
    <div className="lg:block hidden px-4  ps-0">
      <img loading="lazy" src={rating} alt="rating" className="lg:mt-8.75 2xl:mt-[1.823vw]" />
      <p className="2xl:mt-[0.677vw] mt-[13px] 2xl:text-[0.833vw]  font-cofo-medium uppercase  leading-[128.6%]">Booking.com</p>
      <p className="2xl:mt-[0.313vw] mt-[6px] 2xl:text-[0.833vw] lg:text-[18px] text-[#999999] font-cofo uppercase leading-[128.6%]">
        Traveller Review Awards 2024
      </p>

      <div className="flex space-x-4 2xl:mt-11.75 mt-[35px]">
        <img loading="lazy" src={visa} alt="Visa" className="h-6 " />
        <img loading="lazy" src={mastercard} alt="Mastercard" className="h-7.5" />
      
      </div>
      <div className="flex"></div>
    </div>
  );
};
