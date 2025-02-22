import { RoomSlider } from "./RoomSlider";

interface RoomSliderProps {
    images: string[];
  }
  

  export const RoomSliderContainer = ({ images }: RoomSliderProps) => {
    return (
      <div className="relative w-full h-[811px]">
        <div className="w-full absolute grid lg:grid-cols-[396px_816px_706px] grid-col-[295px] h-full">
          <div className="border-[#C7C7C7] border-e h-full"></div>
          <div className="border-[#C7C7C7] border-e h-full"></div>
          <div className="border-[#C7C7C7] border-e h-full"></div>
        </div>
  
        <div className=" pt-[79px] w-full">
          <RoomSlider images={images} />
        </div>
      </div>
    );
  };
  