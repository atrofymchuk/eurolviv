import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import { ComfortsBlockToProps } from "../../types/entity";
import cn from "classnames";
export const ComfortsBlock = memo(
  ({ title,  icons, images, style,  }: ComfortsBlockToProps) => {
    const { t } = useTranslation();

    const renderedIcons = useMemo(() => {
      if (!icons) return null;
      return icons.map((item, index) => (
        <li
          key={index}
          className={cn(
            `flex items-center gap-x-[3px]  ${style.text} uppercase 2xl:w-[93%] w-full`
          )}
        >
          <InViewWrapper>
            <img loading="lazy"
              src={item.src}
              alt="icon"
              className="w-6 h-6 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-7 xl:h-7 2xl:w-9 2xl:h-9"
            />
          </InViewWrapper>
          <p className="text-[14px] sm:text-[12px] xl:text-[18px] 2xl:text-[20px]  ">
            {t(item.text)}
          </p>
        </li>
      ));
    }, [icons, style.text, t]);

    if (!icons) return null;

    return (
      <div className={cn(`${style.bgColor} shadow-[0_-4px_22.4px_rgba(0,0,0,0.1)]`)}>
        <div className="flex flex-col md:ps-[7.45%] justify-center items-center md:items-start md:justify-start w-full ">
          <div
            className="grid  
            grid-cols-1 
            md:grid-cols-[35.67%_30.65%_33.76%]
            items-center justify-center 
            border-x border-[#C7C7C7]
            md:max-w-[90.83%]  w-full max-w-[81.9%]
            "
          >
            <div className="flex flex-col  ps-[8px] md:ps-0 md:items-center md:col-span-1 lg:col-span-1 xl:col-span-1  w-full xl:py-[89px] lg:py-[67px] md:py-[45px]">
              <div className="w-[90%] lg:w-fit xl:w-full flex-col items-center justify-center">
                <h1
                  className={cn(`uppercase ${style.headerColor} font-cofo text-[32px] 
              lg:text-[32px] xl:text-[48px] lg:ms-[20px] leading-[100%] 
              2xl:mb-[51px] lg:mb-[20px] md:text-left md:mb-[20px]  md:w-[90%] w-[70%] lg:w-[70%]  xl:w-[70%] 2xl:w-[60%]
              break-words max-w-[80%] md:max-w-none whitespace-pre-line mt-[54px] md:mt-0`)}
                >
                  {title}
                </h1>

                <div className="hidden md:flex justify-center items-center w-full xl:px-[21px] lg:px-[14px] md:px-[10px]">
                  <InViewWrapper>
                    <img loading="lazy"
                      src={images[0]}
                      alt="room image"
                      className={cn(
                        `md:w-full 2xl:h-[512px]  xl:h-[380px]  lg:h-[311px]  md:h-[260px] w-[250px]  h-[262px] object-cover `
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
              py-6 md:py-8  h-full ps-[8px] md:ps-[4px] lg:ps-0
              "
            >
              <div
                className=" sm:w-[400px] md:w-[300px] lg:w-full  md:ps-[9px]
              2xl:h-[512px] md:h-[260px] lg:h-[311px]
                  2xl:ps-[36px] xl:ps-[14px]  
                lg:pt-[50px] xl:pt-[20px] 2xl:pt-[78px] md:pt-[45px] "
              >
                <ul>
                  {renderedIcons}
                </ul>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center 
               md:py-8 lg:py-0 md:px-0 
              xl:pt-[130px]
                pb-[28px]
               md:pb-0"
            >
              <div
                className="sm
                lg:h-[441px]  
                xl:h-[411px]  
                 2xl:h-[510px]
                w-full px-2.5 md:p-0
                lg:pt-[110px] xl:pt-0   md:pt-[45px] 2xl:pt-[10px]"
              >
                <InViewWrapper>
                  <img loading="lazy"
                    src={images[1]}
                    alt="room image"
                    className={cn(`hidden md:flex
                     2xl:h-[512px]  xl:h-[380px] lg:h-[311px] md:w-full object-cover md:h-[262px] w-[250px] 2xl:px-[24px] lg:px-[17px] md:px-[14px]
                    `)}
                  />
                  
              <img loading="lazy"
                    src={images[2]}
                    alt="room image"
                    className={cn(`md:hidden w-full object-cover object-bottom
                    h-[262px] sm:h-[250px] md:h-[300px] 
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
