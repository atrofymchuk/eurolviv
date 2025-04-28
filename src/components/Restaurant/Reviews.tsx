import { useTranslation } from "react-i18next";
import cn from "classnames";
import { useCustomWidth } from "../Hooks/useCustomWidth";
import { Link } from "react-router-dom";
import { links } from "../../Constants/Links";
type ReviewsToProps = {
  isTerrasePage?:boolean
}

export const Reviews = ({isTerrasePage = false}: ReviewsToProps) => {
  const { t } = useTranslation()
  const isCustomWidth = useCustomWidth(1500, 1700)
  const isCustomMobile = useCustomWidth(390, 430)
  return (
    <>
    <div className="flex flex-col items-center justify-center ">
      <div className={cn(`w-full grid  ${isTerrasePage ? 'max-w-[90.31%]':'md:max-w-[93%] 2xl:max-w-[93.12 xl:max-w-[93.2%] max-w-[89%]'} 
        grid-cols-1 border-[#B3B3B3] border-x lg:border-b-0 `)}>
        <div className="lg:w-fit 2xl:ps-[78px] xl:ps-[68px] lg:ps-[58px] lg:h-[490px] h-[337px] flex flex-col justify-center lg:text-start text-center">
          <span className="font-blessed leading-[70%] text-[16px] xl:text-[36px] 2xl:text-[1.88vw] md:text-[26px] lg:text-[26px] lg:leading-[25.2px] pt-[6px] lg:pt-0 ">
            {t('reviews.about.0')} {t('reviews.about.2')}
          </span>
          <h1 className="uppercase lg:w-[892px] 2xl:w-[46.46vw]  text-[#242425] 2xl:text-[5.21vw] xl:text-[90px] leading-[94%] lg:leading-[87%] xl:pt-[17px] pt-[6px] lg:text-[84px]
           md:text-[48px] text-[32px] tracking-[-0.07em] pb-[24px] lg:pb-0 ">
            {t('reviews.title')} {t('reviews.heading')} <br /> {t('reviews.heading2')}
          </h1>
          <div className=" flex items-center lg:flex-row flex-col  2xl:space-x-[9vw] lg:space-x-[80px]   lg:space-y-0 space-y-[24px] lg:mt-[37px]">
            <p className={cn(`text-[#242425] 2xl:text-[0.83vw]  md:text-[14px] text-[12px] uppercase 2xl:w-[17.71vw] w-[90%]`, {
              "xl:w-[340px]": isCustomWidth,
              "xl:w-[300px]": !isCustomWidth,
              "w-[250px]": isCustomMobile
            })}>
              {t('reviews.desc2.0')} <br /> {t('reviews.desc2.1')}
            </p>

              <Link to={links.bookTable}
               target="_blank"
               className="font-cofo-medium flex items-center justify-center w-[160px] lg:w-[208px] hover:cursor-pointer 
              uppercase 2xl:w-[10.83vw] bg-[#8C331B] text-[#FFFFFF] hover:text-[#8C331B] border border-[#8C331B]
               hover:bg-[#FFFFFF]  lg:py-[10px] px-[12px] py-[10px] rounded-full h-fit 2xl:text-[0.83vw] lg:text-[16px] text-[12px] ">
              {t('buttons.bookTable')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
