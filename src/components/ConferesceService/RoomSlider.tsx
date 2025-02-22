import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RoomSliderProps {
  images: string[];
}

export const RoomSlider = ({ images }: RoomSliderProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 2,
    arrows: false,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 480, // Для планшетів і мобільних
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode:true,
          rows:2
        },
      },
    ],
  };

  return (
    <div className="flex justify-center lg:ms-[71px]  relative">
      <div className="max-w-screen flex justify-center w-full">
        <div className="w-full">
          <Slider {...settings} className=" hall">
            {images.map((slide, index) => (
              <div key={index} className="flex justify-center lg:w-[855px] lg:pe-[28px]  w-[276px] h-[184px]" >
                <div className="flex lg:w-[835px]  w-[276px] h-[184px]">
                  <img
                    src={slide}
                    alt={`Slide ${index}`}
                    className="lg:w-[835px] lg:h-[556px] w-[276px] h-[184px] object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>


      </div>
    </div>
  );
};
