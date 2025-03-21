import { memo, useMemo } from "react";
import { Icon } from "../../types/types";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";

type ComfortsBlockToProps = {
  title: string;
  icons: Icon[];
  images: string[];
  imgStyle: ImgStyle;
  style: Styles;
};

type ImgStyle = {
  ammentiesImageFst: string;
  ammentiesImageScd: string;
};

type Styles = {
  bgColor: string;
  text: string;
  headerColor: string;
};

export const ComfortsBlock = memo(
  ({ title, imgStyle, icons, images, style }: ComfortsBlockToProps) => {
    const { t } = useTranslation();

    const renderedIcons = useMemo(() => {
      if (!icons) return null; 
      return icons.map((item, index) => (
        <li
          key={index}
          className={`flex items-center gap-x-1 ${style.text} uppercase font-cofo`}
        >
          <InViewWrapper>
            <img
              src={item.src}
              alt="icon"
              className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[20px] lg:h-[20px] xl:w-[28px] xl:h-[28px] 2xl:w-[32px] 2xl:h-[32px]"
            />
          </InViewWrapper>
          <p
            className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[16px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]"
          >
            {t(item.text)}
          </p>
        </li>
      ));
    }, [icons, style.text, t]);

    if (!icons) return null;

    return (
      <div className={`${style.bgColor}`}>
        <div className="flex flex-col justify-center items-center  w-full">
          <div
            className="grid 
            grid-cols-1 
            md:grid-cols-[35.64%_30.63%_33.73%]
            items-center justify-center 
            border-x border-[#C7C7C7]
            w-[84.06%]
            shadow-[0px_-14px_61.3px_0px_#25252612]"
          >
            <div className="flex flex-col justify-center items-center md:col-span-1 lg:col-span-1 xl:col-span-1 2xl:h-[825px]">
              <div className="w-[90%] lg:w-fit xl:w-full flex-col items-center justify-center">
              <h1
  className={`uppercase ${style.headerColor} font-cofo text-[32px] 
              lg:text-[32px] xl:text-[48px] lg:ms-[20px] leading-[104%] 
              2xl:mb-[51px] lg:mb-[20px] md:text-left 
              break-words max-w-[80%] md:max-w-none whitespace-pre-line mt-[54px] md:mt-0`}
>
  {title}
</h1>


                <div className="hidden md:flex justify-center items-center w-full">
                  <InViewWrapper>
                    <img
                      src={images[0]}
                      alt="room image"
                      className={`2xl:w-[537px] 2xl:h-[512px] xl:w-[360px] xl:h-[380px] lg:w-[350px] lg:h-[311px] md:w-[300px] md:h-[240px] w-[250px]  h-full object-cover ${imgStyle.ammentiesImageFst}`}
                    />
                  </InViewWrapper>
                </div>
              </div>
            </div>
            <div
              className="md:border-x border-[#C7C7C7]
              flex items-start justify-center 
              py-6 md:py-8 lg:py-0 h-full
              2xl:h-[825px]"
            >
              <div
                className="w-[90%]   sm:w-[400px] md:w-[300px] lg:w-full 
                  2xl:ps-[36px] xl:ps-[14px]
                lg:pt-[200px] xl:pt-[120px] 2xl:pt-[210px] md:pt-[45px]"
              >
                <ul className="space-y-2 sm:space-y-3 md:space-y-1 lg:space-y-2 xl:space-y-2">
                  {renderedIcons}
                </ul>
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center 
              py-6 md:py-8 lg:py-0 md:px-0 
              2xl:h-[825px]"
            >
              <div
                className="sm:w-full
                lg:h-[441px] lg:w-[390px] 
                xl:h-[411px] xl:w-[390px] 
                2xl:w-[497px] 2xl:h-[510px]
                max-w-full p-2 md:p-0
                lg:mt-[195px] xl:mt-[140px]  md:mt-[45px]"
              >
                <InViewWrapper>
                  <img
                    src={images[1]}
                    alt="room image"
                    className={`hidden md:block mx-auto
                    2xl:w-[537px] 2xl:h-[512px] xl:w-[340px] xl:h-[380px] lg:w-[350px] lg:h-[311px] md:w-[250px] md:h-[240px] w-[250px] object-cover
                    ${imgStyle.ammentiesImageScd}`}
                  />
                  <img
                    src={images[0]}
                    alt="room image"
                    className="md:hidden w-full 
                  h-[230px] sm:h-[250px] md:h-[300px] 
                  object-cover"
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
