import { RoomSlider } from "./RoomSlider";

interface RoomSliderProps {
    images: string[];
  }
  

  export const RoomSliderContainer = ({ images }: RoomSliderProps) => {
    return (
      <div className="relative flex  justify-center w-full h-[471px] lg:h-[811px] ">
        <div className="lg:w-full w-[295px]  absolute grid lg:grid-cols-[396px_816px_706px] grid-col-[295px] h-full ">
          <div className="border-[#C7C7C7] border-x border-e h-full"></div>
          <div className="border-[#C7C7C7] border-e h-full lg:flex hidden"></div>
          <div className="border-[#C7C7C7] border-e h-full lg:flex hidden"></div>
        </div>
  
        <div className=" lg:pt-[79px] pt-[20.5px] w-full">
          <RoomSlider images={images} />
        </div>
      </div>
    );
  };
  