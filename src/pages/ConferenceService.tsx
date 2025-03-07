import { About } from "../components/ConferesceService/About";
import { ConferenceMenu } from "../components/ConferesceService/ConferenceMenu";
import { ConferenceMenuContent } from "../components/ConferesceService/ConferenceMenuContent";
import { Equipment } from "../components/ConferesceService/Equipment";
import { Header } from "../components/ConferesceService/Header";
import { RoomSliderContainer } from "../components/ConferesceService/RoomSliderContainer";
import { useRoomStore } from "../store/useRoomsStore";

export const ConferenceService = () => {
  const { halls } = useRoomStore();

  return (
    <div>
      <Header />
      {halls.map((el, index) => (
        <div key={index}>
          <About item={el} isOnTop={index === 0 ? true : false} />
          <Equipment icons={el.icons} price={el.price} />
          <RoomSliderContainer images={el.showcaseSwiperImages} />
        </div>
      ))}
      <div >

      <ConferenceMenu />
      <ConferenceMenuContent />
      </div>
    </div>
  );
};
