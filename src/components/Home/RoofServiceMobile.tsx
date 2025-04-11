import cn from "classnames";
import { useTranslation } from "react-i18next";
import { restaurantMobile, terasseHomeMobile } from "../../store/exportsImg";
export const RoofServiceMobile = () => {
  const { t } = useTranslation();
  const suggestion = [
    {
      title: "footer.restaurant",

        img: restaurantMobile,
      },
    {
      img: terasseHomeMobile,
      title: "footer.terrace",

    },
    
  ];
  return (
    <div className="w-full  justify-center flex lg:hidden">
      <div className="grid w-full grid-cols-2 ">
        {suggestion.map((item, index) => (
          <div
            key={index}
            className="relative"
          >
            <div className="relative w-full h-full">
              <div
                className={`absolute inset-0  bg-gradient-to-b from-[#252526] to-transparent`}
              ></div>
              <img loading="lazy" 
                src={item.img} 
                className="w-full lg:h-[650px] h-[362px] object-cover object-center" 
              />
            </div>

            <div
              className={cn(
                `absolute inset-0 flex flex-col items-center text-center translate-y-1/4 text-white z-10`)}
            >
              <div className="flex flex-col items-center ">
                <h1
                  className={ "text-[24px] md:text-[32px] lg:text-[48px]   xl:text-[64px] text-center uppercase leading-[104%] tracking-[-0.1em] xl:mt-[29px] lg:mt-[19px] w-full underline  " } >
                  {t(item.title).split(' ').map((word, index) => (
                    <span key={index} className="block">
                      {word}
                    </span>
                  ))}
                </h1>
              </div>

              <div
                className={cn(
                  `flex flex-col items-center space-y-[40px]`
                )}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
