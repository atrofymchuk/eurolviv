import { Icon } from "../../store/types";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../InViewWrapper";

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

export const ComfortsBlock = ({
  title,
  imgStyle,
  icons,
  images,
  style,
}: ComfortsBlockToProps) => {
  const { t } = useTranslation();
  if (!icons) return null;

  return (
    <div className={`${style.bgColor}`}>
      <div className="container-fluid mx-auto max-w-[84.04%] ">
        <div
          className={`grid 
          grid-cols-1 
          md:grid-cols-[35.65%_30.63%_33.73%]  
          items-center justify-center 
          border-x border-[#C7C7C7]
          shadow-[0px_-14px_61.3px_0px_#25252612]`}
        >
          <div
            className="
            flex flex-col justify-center items-center 
            py-6 pb-0 2xl:py-8 lg:py-10 xl:py-0 
            md:col-span-2 lg:col-span-1 xl:col-span-1
            2xl:h-[825px]"
          >
            <div
              className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-fit xl:w-full 
              px-4 sm:px-6 md:px-8 lg:px-0 2xl:px-10"
            >
              <h1
                className={`uppercase ${style.headerColor} font-cofo
                text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px]
                leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]
                2xl:mb-[51px]
                text-center lg:text-left
                 lg:max-w-none`}
              >
                {title}
              </h1>

              <div
                className="hidden lg:flex justify-center items-center 
                lg:w-[330px] lg:h-[411px] 
                xl:w-[390px] xl:h-[411px]
                2xl:w-[537px] 2xl:h-[512px]"
              >
                <InViewWrapper>
                  <img
                    src={images[0]}
                    alt="room image"
                    className={`w-full h-full object-cover ${imgStyle.ammentiesImageFst}`}
                  />
                </InViewWrapper>
              </div>
            </div>
          </div>

          <div
            className="lg:border-x border-[#C7C7C7] 
            flex items-start justify-center 
            py-6 md:py-8 lg:py-0 h-full
            2xl:h-[825px]"
          >
            <div
              className="w-[90%] sm:w-[400px] md:w-[300px] lg:w-full 
              px-4 sm:px-6 lg:px-6 xl:ps-[36px]
              lg:pt-[110px] xl:pt-[120px] 2xl:pt-[170px]"
            >
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-2">
                {icons.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${style.text} 
                    space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6
                      uppercase font-cofo`}
                  >
                    <InViewWrapper>
                      <img
                        src={item.src}
                        alt="icon"
                        className="w-[16px] h-[16px] 
                        sm:w-[18px] sm:h-[18px] 
                        md:w-[20px] md:h-[20px] 
                        lg:w-[24px] lg:h-[24px] 
                        xl:w-[32px] xl:h-[32px]"
                      />
                    </InViewWrapper>
                    <p
                      className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px]
                      leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[1.5]"
                    >
                      {t(item.text)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex items-center justify-center 
            py-6 md:py-8 lg:py-0 md:pe-10 lg:pe-0 lg:ps-5
            2xl:h-[825px]"
          >
            <div
              className="sm:w-[400px] md:w-[400px] 
              lg:h-[441px] lg:w-[390px]
              xl:h-[411px] xl:w-[390px] 
              2xl:w-[497px] 2xl:h-[510px]
              lg:mt-[105px] xl:mt-[140px] 2xl:pe-10"
            >
              <InViewWrapper>
                <img
                  src={images[1]}
                  alt="room image"
                  className={`hidden lg:block 
                  w-full h-full object-cover
                  lg:max-w-[350px] lg:max-h-[411px]
                  xl:max-w-[390px] xl:max-h-[411px]
                  2xl:max-w-[497px] 2xl:max-h-[510px]
                  ${imgStyle.ammentiesImageScd}`}
                />
                <img
                  src={images[0]}
                  alt="room image"
                  className="lg:hidden w-full 
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
};
