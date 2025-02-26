import { Room } from "../../store/types";
import square from "../../assets/icons/Rooms/square.svg";
import guests from "../../assets/icons/Rooms/guests.svg";
import { Link } from "react-router-dom";
type RoomInfoCard = {
  room: Room;
  length: number;

  index: number;
};

export const RoomInfoCard = ({ room, length, index }: RoomInfoCard) => {
  const isFirstInRow = index % 3 === 0;
  const isLastInRow = (index + 1) % 3 === 0;
  return (
    <div
      key={room.type}
      className={`lg:border lg:border-s-0  border-[#C7C7C7]  
        ${isFirstInRow ? "lg:ps-[20px] p-4" : "p-4"}  
        ${isLastInRow ? "lg:pe-[20px] lg:border-e-0 border-t" : "border-t"} 
        ${index < length - 3 ? "lg:border-b-0 border-t" : ""} 
        lg:p-[15px]`}
    >
      <div>
        <div className="items-center flex justify-center">
          <img
            src={room.header.previewImage}
            alt={room.title}
            className="lg:w-[530px] lg:h-[416px] w-[301px] h-[230px] object-cover"
          />
        </div>

        <div className="lg:h-[297px] h-[191px]">
          <div className="flex justify-between mx-auto lg:pt-[19px] pt-[10.5px] lg:w-[530px] w-[301px] items ">
            <div className="flex items-center">
              <img src={square} alt="square" />
              <p className="font-cofo uppercase lg:leading-[20px] text-[12px] ps-[11.12px] lg:text-[16px] text-[#252526] lg:ps-[11.62px]">
                площа: {room.area}
              </p>
            </div>
            <div className="flex items-center ">
              <img src={guests} alt="square" />
              <p className="font-cofo uppercase lg:ps-[11.62px] text-[12px] ps-[11.12px] lg:leading-[20px] lg:text-[16px] text-[#252526]">
                гостей: {room.guests}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col text-center items-center justify-between h-full lg:max-h-[200px] max-h-[125px] w-full lg:max-w-[472px] ">
              <div className="flex-1 flex flex-col justify-start w-full">
                <h1 className="font-cofo uppercase lg:text-[40px] lg:max-w-full  lg:leading-[36px] lg:tracking-[-0.06em]  tracking-[-0.03em] text-[24px] leading-[22px] font-semibold">
                  {room.title}
                </h1>
                <p className="uppercase lg:text-[18px] lg:leading-[21px] mt-[15px] tracking-[-0.04em] text-[12px] leading-[14px] text-[#6B6B6B]">
                  {room.description}
                </p>
              </div>

              <Link
                to={`/rooms/${room.type}`}
                className="uppercase lg:py-[10px] lg:px-[20px] mt lg:text-[18px] py-[8px] px-[9px]  text-[12px] border rounded-full text-[#A47762] hover:bg-[#A47762]  hover:text-white font-cofo font-semibold"
              >
                переглянути номер
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
