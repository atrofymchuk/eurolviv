import square from "../../assets/icons/Rooms/squareBrown.svg";
import guestsIco from "../../assets/icons/Rooms/guestsBrown.svg";
import floor from "../../assets/icons/About/floor.svg";

type RoomInfoToProps = {
  area: string;
  roomFloor: number;
  capacity: string;
};

export const RoomInfo = ({ area, roomFloor, capacity }: RoomInfoToProps) => {
  return (
    <div className="lg:ps-[71px] space-y-1">
      <p className="flex flex-wrap uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center gap-x- text-[#8C331B]">
        <img
          src={floor}
          alt="houseicon"
          className="pe-2 w-[22px] h-[22px] lg:w-fit"
        />
        площа:
        <span className="font-semibold ">&nbsp;{area}</span>
      </p>
      <p className="flex flex-wrap text-[#8C331B] uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center gap-x-1">
        <img
          src={square}
          alt="houseicon"
          className="pe-2 w-[22px] h-[22px] lg:w-fit"
        />
        поверх:
        <span className="font-semibold text-[#8C331B]">&nbsp;{roomFloor}</span>
      </p>
      <p className="flex flex-wrap text-[#8C331B] uppercase lg:text-[20px] text-[12px] lg:leading-[25.2px] leading-[15px] items-center gap-x-1">
        <img
          src={guestsIco}
          alt="houseicon"
          className="pe-2 w-[22px] h-[22px] lg:w-fit"
        />
        вмістимість залу:
        <span className="font-semibold text-[#8C331B] whitespace-nowrap">
          &nbsp;{capacity}
        </span>
      </p>
    </div>
  );
};
