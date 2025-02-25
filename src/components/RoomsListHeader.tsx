import area from "../assets/icons/Rooms/squareWhite.svg";
import guest from "../assets/icons/Rooms/guestWhite.svg";
import { Room } from "../store/types";
import { Link } from "react-router-dom";

type RoomsListHeaderToProps = {
  room:Room
  index:number
}

export   const RoomsListHeader = ({room, index}:RoomsListHeaderToProps) =>{

    return(
     
        <div className={`flex flex-col  border-[#FFFFFF33] items-center justify-center  ${index === 0 ? 'border-x' : 'border-e'}  ${index == 2 ? 'lg-border-e border-x':'' } p-2`}>
          <Link to={`/rooms/${room.type}`}>
          <div>
            <img
              src={room.header.previewImage}
              alt="preview"
              className="lg:w-[394px] lg:h-[304px]  "
            />
            <div className="flex justify-between w-full lg:mt-3.5 mt-1">
              <div className="flex items-center">
                <img src={area} alt="area icon" className="lg:w-5 lg:h-5 w-4  me-2" />
                <p className="text-[#FFFFFF] uppercase lg:text-[16px] text-[10px] ">площа: {room.area}</p>
              </div>
              <div className="flex items-center">
                <img src={guest} alt="area icon" className="lg:w-5 lg:h-5 w-4 me-2" />
                <p className="text-[#FFFFFF] uppercase lg:text-[16px] text-[10px] ">гостей: {room.guests}</p>
              </div>
            </div>
  
            <h1 className="uppercase text-[#FFFFFF] lg:text-[36px] text-[14px] mt-2 tracking-[-6%] font-semibold text-center lg:leading-[30px] mx-auto leading-[15px] lg:w-[320px] lg:mt-[38px]">
              {room.title}
            </h1>
            <p className="uppercase text-[#FFFFFF] text-center lg:text-[18px] mt-2 text-[10px] leading-[-2%] max-w-[310px] mx-auto lg:mt-[15px]">
             {room.description}
            </p>
          </div>
          </Link>
    </div>
    )
 }