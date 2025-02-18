import { IconsState, Room } from "../../store/types";
import { ComfortsBlock } from "./ComfotsBlock";

type ComfortsBlockToProps = {
  icons: IconsState;
  room: Room;
}

export const ComfortsBlocksWrapper = ({icons, room} :ComfortsBlockToProps) => {
  

  return (
    <div>
       <ComfortsBlock title="зручності в номері" icons={icons.ammentiesInRoom} imgStyle={room.about.ammetiveImgStyle} images={[room.about.ammentiesImages[0],room.about.ammentiesImages[1] ]}  />
       <ComfortsBlock title="ванна кімната" icons={icons.bathRoom} imgStyle={room.about.ammetiveImgStyle} images={[room.about.ammentiesImages[2],room.about.ammentiesImages[3] ]}  />
      
    </div>
  );
};
