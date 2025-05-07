import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "@/components/utils/InViewWrapper";
import { ComfortsBlockToProps } from "@/types/entity";
import cn from "classnames";
import { useIsEnglish } from "@/components/hooks/useIsEnglish";
const removeParentheses = (text: string, isMobile: boolean) => {
  if (!isMobile) return text;
  return text.replace(/[()]/g, "").trim();
};

export const ComfortsBlock = memo(
  ({ title, icons, images, style, type }: ComfortsBlockToProps) => {
    const { t } = useTranslation();
    const isEng = useIsEnglish();
    const isSemiLux = type === "semi-lux" || false;
    const renderedIcons = useMemo(() => {
      if (!icons) return null;
      return icons.map((item, index) => (
        <li
          key={index}
          className={cn(
            `flex items-center gap-x-[3px] 2xl:gap-x-[0.73vw] xl:gap-x-[0.55vw]  ${style.text} uppercase 2xl:w-[93%] w-full`
          )}
        >
          <InViewWrapper>
            <img
              loading="lazy"
              src={item.src}
              alt="icon"
              className="w-6 h-6 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-[1.88vw] 2xl:h-[1.88vw]"
            />
          </InViewWrapper>
          <p
            className={`text-[3.73vw] sm:text-[12px] xl:text-[15px] 2xl:text-[1.04vw]
              ${isSemiLux ? "w-[90%]!" : ""}  ${
              !isSemiLux && index == 0 ? "lg:whitespace-nowrap" : ""
            }`}
          >
            {isSemiLux
              ? t(item.text)
              : removeParentheses(t(item.text), window.innerWidth < 768)}
          </p>
        </li>
      ));
    }, [icons, style.text, t, isSemiLux]);

    if (!icons) return null;

    return (
      <div
        className={cn(
          `${style.bgColor} shadow-[0_-4px_22.4px_rgba(0,0,0,0.06)] 2xl:h-[43vw]  z-20`
        )}
      >
        <div className="flex flex-col md:ps-[7.45%] justify-center items-center md:items-start md:justify-start w-full h-full">
          <div
            className="grid  
            grid-cols-1 
            md:grid-cols-[35.6%_30.65%_33.76%]
            items-center justify-center 
            border-x border-[#C7C7C7] h-full
            md:max-w-[90.83%]  w-full max-w-[81.9%]
            "
          >
            <div className="flex flex-col  ps-[2.93vw] md:ps-0 md:items-center md:col-span-1 lg:col-span-1 xl:col-span-1  w-full xl:py-[89px] lg:py-[67px] md:py-[45px] ">
              <div className="w-[90%] lg:w-fit xl:w-full flex-col items-center justify-center">
                <h1
                  className={cn(`uppercase ${
                    style.headerColor
                  } font-cofo text-[8.53vw] 
             
              lg:text-[32px]  2xl:text-[2.5vw] lg:ms-[20px] leading-[100%] 2xl:leading-[100%] xl:leading-[86%]  ${
                isEng
                  ? "xl:text-[2.5vw] xl:min-h-[5.16vw] 2xl:min-h-[5vw] flex items-end xl:w-[70%]"
                  : "xl:w-[45%] xl:min-h-[5.16vw] 2xl:min-h-[5vw]"
              }
              2xl:mb-[2.66vw]  lg:mb-[20px] md:text-left md:mb-[20px]  md:w-[90%] w-[70%] lg:w-[70%] 2xl:w-[50%]
               max-w-[80%] md:max-w-none whitespace-pre-line mt-[54px] md:mt-0`)}
                >
                  {title}
                </h1>

                <div className="hidden md:flex justify-center items-center w-full xl:px-[21px] lg:px-[14px] md:px-[10px]">
                  <InViewWrapper>
                    <img
                      loading="lazy"
                      src={images[0]}
                      alt="room image"
                      className={cn(
                        `md:w-full 2xl:h-[26.67vw]  xl:h-[27.34vw]  lg:h-[311px] 
                         md:h-[260px]  h-[69.87vw] object-cover `
                      )}
                    />
                  </InViewWrapper>
                </div>
              </div>
            </div>

            <div
              className="md:border-x border-[#C7C7C7]
              flex  md:justify-center 
              md:items-center xl:py-[89px] lg:py-[45px]
              py-[11.73vw_6.4vw] md:py-8  h-full ps-[2.93vw] md:ps-[4px] lg:ps-0
              "
            >
              <div
                className=" sm:w-[400px] md:w-[300px] lg:w-full  md:ps-[9px]
              2xl:h-[26.67vw] md:h-[260px] lg:h-[311px]
                  2xl:ps-[36px] xl:ps-[14px]  
                lg:pt-[50px] xl:pt-[0.43vw] 2xl:pt-[4vw] md:pt-[45px] "
              >
                <ul>{renderedIcons}</ul>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center 
               md:py-8 lg:py-0 md:px-0 
              xl:pt-[4.5vw]
                pb-[7.47vw]
               md:pb-0"
            >
              <div
                className="sm
                lg:h-[441px]  
                xl:h-[32.11vw]  
                 2xl:h-[26.56vw]
                w-full px-2.5 md:p-0
                lg:pt-[110px] xl:pt-[4.13vw]   md:pt-[45px] 2xl:pt-[27px]"
              >
                <InViewWrapper>
                  <img
                    loading="lazy"
                    src={images[1]}
                    alt="room image"
                    className={cn(`hidden md:flex
                     2xl:h-[26.67vw]  xl:h-[27.34vw] lg:h-[311px] md:w-full 
                     object-cover md:h-[262px] w-[250px] 2xl:px-[24px] lg:px-[17px] md:px-[14px]
                    `)}
                  />

                  <img
                    loading="lazy"
                    src={images[2]}
                    alt="room image"
                    className={cn(`md:hidden w-full object-cover object-bottom
                    h-[69.87vw] sm:h-[250px] md:h-[300px] 
                    `)}
                  />
                </InViewWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
