import { useTranslation } from "react-i18next";
import cn from "classnames";
type ReviewsToProps = {
  isTerrasePage?:boolean
}

export const Reviews = ({isTerrasePage = false}: ReviewsToProps) => {
  const { t } = useTranslation()
  return (
    <>
    <div className="flex flex-col items-center justify-center  ">
      <div className={cn(`w-full grid  ${isTerrasePage ? 'max-w-[90.31%]':'md:max-w-[93.1%] max-w-[89.1%]'} grid-cols-1 border-[#B3B3B3] border-x lg:border-b-0 `)}>
        <div className="2xl:ps-[78px] xl:ps-[68px] lg:ps-[58px] lg:h-[490px] h-[337px] flex flex-col justify-center lg:text-start text-center">
          <span className="font-blessed leading-[70%] text-[16px] xl:text-[36px] md:text-[26px] lg:text-[26px] lg:leading-[25.2px] pt-[6px] lg:pt-0 ">
            {t('reviews.about.0')} {isTerrasePage ? t('reviews.about.1') : t('reviews.about.2')}
          </span>
          <h1 className="uppercase lg:w-[892px]  text-[#242425] 2xl:text-[100px] xl:text-[90px] lg:leading-[87px] leading-[94%] xl:pt-[17px] pt-[6px] lg:text-[84px] md:text-[48px] text-[32px] tracking-[-7%] pb-[24px] lg:pb-0 ">
            {t('reviews.title')} {t('reviews.heading')} {t('reviews.heading2')}
          </h1>
          <div className="flex items-center lg:flex-row flex-col  xl:space-x-[138px] lg:space-x-[80px]   lg:space-y-0 space-y-[24px] lg:mt-[37px]">
            <p className="text-[#242425] 2xl:text-[16px]  md:text-[14px] text-[12px] uppercase 2xl:w-[323px] w-[265px] ">
              {t('reviews.desc2')}
            </p>

            <button className="font-cofo-medium hover:cursor-pointer uppercase bg-[#8C331B] text-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B] hover:bg-[#FFFFFF] lg:px-[21.5px] lg:py-[10px] px-[18px] py-[10px] rounded-full h-fit lg:text-[16px] text-[12px] ">
              {t('buttons.bookTable')}
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
