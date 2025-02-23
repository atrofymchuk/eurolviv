import food from "../../assets/ConferenceService/Menu/food.png";
import sandwich from "../../assets/ConferenceService/Menu/sandwich.png";
import coffee from "../../assets/ConferenceService/Menu/coffee.png";
import { ConferenceMenuCard } from "./ConferenceMenuCard";
import { ConferenceMenuMobileCard } from "./ConferenceMenuMobile";

export const ConferenceMenuContent = () => {
  const imageArray = [food, sandwich, coffee];

  return (
    <div className="relative flex items-center justify-center   lg:h-[900px]">
      <div className="grid absolute lg:grid-cols-[396px_816px_708px] grid-cols-[295px] lg:h-[900px] h-[100px] z-[-1]">
        <div className=" lg:border-x-none border-x lg:border-e border-[#C7C7C7] "></div>
        <div className="lg:border-e  lg:flex hidden border-[#C7C7C7]"></div>
        <div className="lg:border-e  lg:flex hidden border-[#C7C7C7]"></div>
      </div>
      <div className="hidden  items-center lg:space-x-[24px] lg:flex">
        {imageArray.map((el, ) => (
          <ConferenceMenuCard img={el} />
        ))}
      </div>
      <div className="lg:hidden block">
        <ConferenceMenuMobileCard img={imageArray[0]}/>
      </div>
    </div>
  );
};
