import { useTranslation } from "react-i18next";

type ReviewSliderCardToProps = {
  text: string;
  impression: string;
};

export const ReviewSliderCard = ({
  text,
  impression,
}: ReviewSliderCardToProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full lg:mx-0 flex flex-col 2xl:h-[458px] lg:h-[350px] 2xl:w-[572px] xl:w-[450px] lg:w-[350px]  
     border-e border-b border-s md:border-s-0 border-t xl:border-t-0
     py-[22px_24px] ps-[22px] pe-[16px] lg:p-0 lg:border-b-0 md:h-[254px] border-[#B3B3B3] xl:h-[458px] overflow-hidden ">
      <div className=" h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#8C331B] scrollbar-track-transparent flex flex-col items-center 2xl:pt-[52px] xl:pt-[42px] lg:pt-[32px] ">
        <div className="flex flex-col  lg:items-start gap-[13px]">
          <p className="uppercase 2xl:text-[18px] lg:text-[14px] md:text-[14px] text-[12px] text-[#8C331B] font-cofo-medium ">
            {t("restaurant.reviews.title")}
          </p>
          <p className="uppercase 2xl:text-[18px]  lg:text-[14px] md:text-[14px] text-[12px] text-[#6B6B6B] lg:leading-[22.6px] leading-[15px] 2xl:w-[469px] xl:w-[349px] lg:w-[300px] md:w-[400px] ">
            {text}
          </p>
          {impression.length > 0 && (
            <p className="uppercase 2xl:text-[18px] text-[12px] lg:leading-[22px] lg:text-[14px] md:text-[14px] ">
              <span className="font-cofo-medium">
                {t("restaurant.reviews.desc")}:
              </span>
              {impression}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
