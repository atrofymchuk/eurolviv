import { useParams } from "react-router-dom";
import { About } from "../components/Room/About";
import { ComfortsBlocksWrapper } from "../components/Room/ComfortBlocksWrapper";
import { Header } from "../components/Room/Header";
import { SpecialOffers } from "../components/Room/SpecialOffers";
import { useRoomStore } from "../store/useRoomsStore";
import { MoreInfo } from "../components/Room/MoreInfo";
import { Suggestion } from "../components/Room/Suggestion";

export const Room = () => {
  const { roomType } = useParams();
  const { rooms } = useRoomStore();

  const isShowAdditionalPlace =
    roomType === "lux-two-room" || roomType === "semi-lux" ? false : true;

  const room = rooms.find((r) => r.type === roomType);
  if (!room) return <div>not found</div>;
  return (
    <div className="overflow-x-hidden">
      <Header header={room?.header}   />
      <About
        area={room.area}
        guests={room.guests}
        about={room.about}
        swiperImagesStyle={room.about.swiperImagesStyle}
        nameRoom= {room.title}
        title={room.header.title}
        size={room.header.size}
      />
      <ComfortsBlocksWrapper icons={room.icons} room={room} />
      <MoreInfo isShowAdditionalPlace={isShowAdditionalPlace} />
      <SpecialOffers />
      <Suggestion suggestion={room.suggestion} />
    </div>
  );
};
