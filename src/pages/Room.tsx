import { useParams } from "react-router-dom";
import { About } from "../components/Room/About";
import { ComfortsBlocksWrapper } from "../components/Room/ComfortBlocksWrapper";
import { Header } from "../components/Room/Header";
import { SpecialOffers } from "../components/Room/SpecialOffers";
import { useRoomStore } from "../store/useRoomsStore";
import { Suggestion } from "../components/Room/Suggestion";
import { MoreInfo } from "../components/Room/MoreInfo";
import { usePageStore } from "../store/usePageStorage";

export const Room = () => {
  const { roomType } = useParams();
  const { rooms } = useRoomStore();
  const { isLastComfortBlockSection, setIsLastComfortBlockSection } = usePageStore();

  const room = rooms.find((r) => r.type === roomType);

  const sections = [
    <MoreInfo
      key="moreInfo"
    />,
    <SpecialOffers key="specialOffers" />,
    <Suggestion key="suggestion" suggestion={room?.suggestion} />,
  ];

  return (
    <div className="overflow-x-hidden">
      <Header header={room?.header} />
      <About
      key="about"
      area={room?.area || 0}
      guests={room?.guests || ""}
      about={room?.about}
      swiperImagesStyle={room?.about?.swiperImagesStyle || ""}
      nameRoom={room?.title || ""}
      type={room?.type || ""}
      title={room?.header.title || ""}
      size={room?.header.size || ""}
    />
    <ComfortsBlocksWrapper key="comforts" icons={room?.icons} room={room} setIsLastComfortBlockSection={setIsLastComfortBlockSection} />
      {isLastComfortBlockSection && sections.map((Component, index) => (
        <div key={index}>
          {Component}
        </div>
      ))}
    </div>
  );
};
