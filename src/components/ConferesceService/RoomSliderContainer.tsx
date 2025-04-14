import { useMemo } from "react";
import { RoomSlider } from "./RoomSlider";
import { useTranslation } from "react-i18next";

interface RoomSliderProps {
  images: string[];
  viewShowcaseSwiperImages: {
    ua: string[];
    eng: string[];
  };
}

export const RoomSliderContainer = ({ images, viewShowcaseSwiperImages }: RoomSliderProps) => {
  const { i18n } = useTranslation();
  const isEng = i18n.language === "en";
  
  const showcaseImages = useMemo(() => 
    isEng ? viewShowcaseSwiperImages.eng : viewShowcaseSwiperImages.ua,
  [isEng, viewShowcaseSwiperImages]);
  
  const mergedImages = useMemo(() => {
    const result = [...images];
    
    showcaseImages.forEach((image, index) => {
      const insertPosition = index * 2 + 1;
      if (insertPosition <= result.length) {
        result.splice(insertPosition, 0, image);
      }
    });
    
    return result;
  }, [images, showcaseImages]);

  const preloadImages = useMemo(() => {
    if (mergedImages.length > 0) {
      return (
        <>
          {mergedImages.slice(0, 2).map((image, index) => (
            <link key={index} rel="preload" href={image} as="image" />
          ))}
        </>
      );
    }
    return null;
  }, [mergedImages]);

  return (
    <div className="relative flex justify-center h-[411px] 2xl:h-[541px] xl:h-[500px] lg:h-[471px] md:h-[441px] sm:h-[471px] items-center w-full box-border">
      {preloadImages}
      <div className="absolute grid lg:grid-cols-[20.58%_42.9%_35%] grid-cols-1 lg:w-full w-[79.1%] mx-auto lg:mx-0 max-w-[1920px] h-full box-border">
        <div className="h-full lg:border-0 border-x border-[#C7C7C7]"></div>
        <div className="border-l border-r border-[#C7C7C7] h-full hidden lg:block box-border"></div>
        <div className="border-[#C7C7C7] h-full hidden lg:block box-border"></div>
      </div>

      <div className="lg:pt-[79px] pt-[20.5px] w-full">
        <RoomSlider images={mergedImages} viewShowcaseSwiperImages={viewShowcaseSwiperImages} />
      </div>
    </div>
  );
};
