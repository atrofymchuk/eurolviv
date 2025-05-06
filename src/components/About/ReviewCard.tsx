import { useTranslation } from "react-i18next";

interface ReviewProps {
  id: number;
  name: string;
  country: string;
  flag: string;
  text?: string;
  textUa?: string;
  textEn?: string;
}

export const ReviewCard = ({ review, reviewHeader, index }: { review: ReviewProps, reviewHeader: string, index: number   }) => {
  const { t,i18n } = useTranslation();
  const isEng = i18n.language === "en";

  const displayText = () => {
    if ('text' in review && review.text) {
      return review.text;
    } else if ('textUa' in review && 'textEn' in review && review.textUa && review.textEn) {
      return isEng ? review.textEn : review.textUa;
    }
    return ''; 
  };

  return (
    <div className="flex flex-col 2xl:w-[27.75vw] w-[79.733vw]  2xl:h-[19.8vw] xl:w-[27.235vw]  xl:h-[21.135vw] lg:w-[26.5vw] lg:h-[28vw] h-[59.7vw] bg-[#EDE8E5] mt-[10px]  me-1">
      <div className="pt-[16px] ps-[17px] xl:pt-[24px] xl:ps-[24px] 2xl:ps-[34px] 2xl:pt-[33px] ">
        <h1 className="leading-[120%] uppercase xl:text-[2.267vw] text-[5.333vw] lg:text-[32px] text-[#A47762]  2xl:text-[2.5vw] font-cofo-medium font-cofo xl:tracking-[-0.04em]">
          {review.name}
        </h1>
        <p className="text-[#727272] font-cofo uppercase 2xl:text-[1.042vw] text-[14px] flex items-center gap-2">
          <img src={review.flag} alt={review.country} className="2xl:w-[25px] 2xl:h-[25px] xl:w-[18px] xl:h-[18px] w-[18px] h-[18px]"/> 
           {t(review.country)}
        </p>
      </div>
    
      <div className={`2xl:ps-[33px] 2xl:mt-[34px] ps-[18px] px-[15px] xl:mt-[24px] max-h-fit ${isEng ? "mt-[20px]" : "mt-[28px]"}
       ${isEng && index == 2 ? "2xl:w-[99%]" : ""} 
      ${index <= 1 ? 'xl:pe-[1.106vw]' : 'xl:pe-[1.719vw]'}`}>
        <h2 className="uppercase text-[#A47762] 2xl:text-[1.042vw] text-[14px] font-cofo-medium">{reviewHeader}</h2>
        <p className={`uppercase text-[#6B6B6B] xl:pt-[13px]  xl:text-[0.938vw] text-[3.2vw] lg:text-[14px] 2xl:text-[0.938vw] ${isEng ? "w-[102.5%]" : "2xl:max-w-[24.792vw]"}`}>
          {displayText()}
        </p>
      </div>
    </div>
  );
}