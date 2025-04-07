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
  
  const showcaseImages = isEng ? viewShowcaseSwiperImages.eng : viewShowcaseSwiperImages.ua;
  
  // Створюємо копію масиву images
  const mergedImages = [...images];
  
  // Вставляємо зображення через один, починаючи з індексу 1
  showcaseImages.forEach((image, index) => {
    const insertPosition = index * 2 + 1;
    if (insertPosition <= mergedImages.length) {
      mergedImages.splice(insertPosition, 0, image);
    }
  });

  return (
    <div className="relative flex justify-center h-[411px] 2xl:h-[541px] xl:h-[500px] lg:h-[471px] md:h-[441px] sm:h-[471px] items-center w-full box-border">
      <div className="absolute grid lg:grid-cols-[21%_42%_37%] grid-cols-1  lg:w-full w-[79.1%] mx-auto lg:mx-0 max-w-[1920px] h-full box-border">
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
