import { SliderAbout } from "../Room/SliderAbout";
import { ConferenceService } from "../../types/types";
import { RoomInfo } from "./RoomInfo";
import { memo } from "react";
import cn from "classnames";
import { GridBorders } from "./GridBorders";
import { RoomTitle } from "./RoomTitle";
import { RoomDescription } from "./RoomDescription";
import { ContactInfo } from "./ContactInfo";

type AboutToProps = {
  item: ConferenceService;
  isOnTop: boolean;
};

export const About = memo(({ item, isOnTop }: AboutToProps) => {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          `grid lg:grid-cols-[21%_42%_37%] grid-cols-[11%_79.1%_11%] items-center justify-center 2xl:items-start 2xl:justify-normal`
        )}
      >
        <GridBorders isOnTop={isOnTop} />

        <div
          className={cn(`flex ${
            isOnTop ? "lg:border-x-0 border-x" : " border-x lg:border-x-0"
          } border-b 2xl:border-b-0 border-[#C7C7C7] flex-col h-full justify-center p-2.5 2xl:p-0 2xl:items-center
          order-2 lg:order-none`)}
        >
          <div className="text-[#8C331B] hidden lg:flex">
            <RoomInfo
              area={item.area}
              capacity={item.capacity}
              roomFloor={item.floor}
            />
          </div>
        </div>

        <RoomTitle title={item.title} size={item.size} isOnTop={isOnTop} />

        <div className="border-e border-[#C7C7C7] 2xl:flex hidden"></div>
      </div>

      <div className="grid flex-col lg:grid-cols-[63%_37%] h-auto grid-cols-1 order-7 lg:order-none">
        <div className="h-full border-[#C7C7C7] 2xl:border-e 2xl:border-t overflow-hidden">
          <div>
            <SliderAbout imageSlider={item.swiperImages} isConference={true} />
          </div>
        </div>
        <div className="flex flex-col lg:items-start md:justify-start justify-center items-center border-t lg:border-s-0 2xl:px-[41px] border-[#C7C7C7] 2xl:w-auto flex-1">
          <div className="lg:flex flex-col w-[79.1%] flex justify-center 2xl:items-center 2xl:w-fit lg:p-0 p-2.5 pb-[40px] pt-[22px] border-x lg:border-x-0 border-[#C7C7C7] 2xl:border-x-0 h-auto lg:w-auto">
            <div className="lg:hidden">
              <RoomInfo
                area={item.area}
                capacity={item.capacity}
                roomFloor={item.floor}
              />
            </div>

            <RoomDescription pOne={item.about.pOne} pTwo={item.about.pTwo} />

            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
});
