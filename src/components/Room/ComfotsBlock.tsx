import { Fragment } from "react/jsx-runtime";
import { Icon } from "../../store/types";

type ComfortsBlockToProps = {
  title: string;
  icons: Icon[]; 
  images: string[];
  imgStyle: ImgStyle;
  style:Styles

};

type ImgStyle = {
  ammentiesImageFst:string
  ammentiesImageScd:string
}

type Styles={
  bgColor:string
  text:string
  headerColor:string
}

export const ComfortsBlock = ({
  title,
  imgStyle,
  icons,
  images,style
}: ComfortsBlockToProps) => {
if(!icons) return
  return (
    <div className="">
      <div className={`grid lg:grid-cols-[575px_474px_545px] grid-cols-[377px] items-center *:lg:h-[840px] justify-center ${style.bgColor} shadow-[0px_-14px_61.3px_0px_#25252612] `}>
        <div className="lg:border-x border-[#C7C7C7] flex flex-col justify-center items-center">
          <div className="w-[295px] lg:w-full border-x border-[#C7C7C7] lg:border-x-0">
            <div className="p-5 pb-[22px] lg:pb-0">
              <h1 className={`uppercase ${style.headerColor}  lg:text-[48px] lg:mb-[51px] lg:w-[260px] text-[32px] leading-[28.8px] mt-[34px] lg:mt-0   lg:leading-[48px]`}>
                {title}
              </h1>
            </div>
            <div className="flex justify-center items-center lg:h-[510px]">
              <img
                src={images[0]}
                alt="livingroom"
                className={`lg:w-[533px] lg:h-[510px] object-cover  lg:flex hidden ${imgStyle.ammentiesImageFst}`}
              />
            </div>
          </div>
        </div>
        <div className="lg:border-e border-[#C7C7C7] lg:order-none flex  items-center justify-center  ">
          <div className="flex flex-col lg:ps-[36px] lg:pt-[240px]   border-[#C7C7C7] border-x lg:border-x-0 p-[15px]  h-full   lg:order-none order-1 w-[295px] lg:w-full">
            <ul>
              {icons.map((item, index) => (
                <li
                  key={index}
                  className={`flex uppercase items-center ${style.text} text-[14px] leading-[17px] lg:text-[20px] lg:leading-[20px] *:font-cofo space-x-4 space-y-0.25`}
                >
                  <img
                    src={item.src}
                    alt='icon'
                    className={`lg:w-[36px] lg:h-[36px] w-[24px] h-[24px]`}
                  />
                  <p>
                    {item.text.split("/").map((part, index) => (
                      <Fragment key={index}>
                        {part}
                        {index < item.text.split("/").length - 1 && (
                          <>
                            /<br />
                          </>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:border-e   border-[#C7C7C7] flex items-center justify-center flex-col lg:order-none order-2 ">
          
          <div className="flex  border-x lg:border-x-0 border-[#C7C7C7] justify-center items-center lg:h-[510px] lg:w-full w-[295px]  lg:pt-[200px] pb-[28px]">
            <img
              src={images[1]}
              alt="livingroom"
              className={`w-[497px] h-[510px]  object-cover object-[40%_90%] lg:flex hidden ${imgStyle.ammentiesImageScd}`}
            />
            <img
              src={images[0]}
              alt="livingroom"
              className="lg:w-[533px] lg:h-[510px] w-[276px] h-[262px] object-cover flex lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
