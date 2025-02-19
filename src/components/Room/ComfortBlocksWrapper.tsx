import { IconsState, Room } from "../../store/types";
import { ComfortsBlock } from "./ComfotsBlock";

type ComfortsBlockToProps = {
  icons: IconsState;
  room: Room;
};

export const ComfortsBlocksWrapper = ({
  icons,
  room,
}: ComfortsBlockToProps) => {
  return (
    <div>
      {room.isLux || (
        <>
          <ComfortsBlock
            title="зручності в номері"
            icons={icons.ammentiesInRoom}
            imgStyle={{ammentiesImageFst:room.about.ammetiveImgStyleFst, ammentiesImageScd:room.about.ammetiveImgStyleScd }}
            images={[
              room.about.ammentiesImages[0],
              room.about.ammentiesImages[1],
            ]}
            style={{bgColor:"bg-[#EDE8E5]",text:'text-[#6B6B6B]', headerColor:'text-black' }}
          />
          <ComfortsBlock
            title="ванна кімната"
            icons={icons.bathRoom}
            imgStyle={{ammentiesImageFst:room.about.ammetiveImgStyleFst, ammentiesImageScd:room.about.ammetiveImgStyleScd }}
            images={[
              room.about.ammentiesImages[2],
              room.about.ammentiesImages[3],
            ]}
            style={{bgColor:"bg-[#EDE8E5]",text:'text-[#6B6B6B]', headerColor:'text-black' }}

          />{" "}
        </>
      )}
      {room.isLux && (
        <>
          <ComfortsBlock
            title="зручності у вітальні"
            icons={icons.ammentiesInRoom}
            imgStyle={{ammentiesImageFst:room.about.ammetiveImgStyleFst, ammentiesImageScd:room.about.ammetiveImgStyleScd }}
            images={[
              room.about.ammentiesImages[0],
              room.about.ammentiesImages[1],
            ]}
            style={{bgColor:"bg-[#A47762]",text:'text-[#E1E1E1]', headerColor:'text-white' }}

          />

           {icons.bedRoom && <ComfortsBlock
            title="зручноті  в спальні"
            icons={icons.bedRoom}
            imgStyle={{ammentiesImageFst:room.about.ammetiveImgStyleFst, ammentiesImageScd:room.about.ammetiveImgStyleScd }}
            images={[
              room.about.ammentiesImages[2],
              room.about.ammentiesImages[3],
            ]}
            style={{bgColor:"bg-[#EDE8E5]",text:'text-[#6B6B6B]', headerColor:'text-black' }}

          />}
          <ComfortsBlock
            title="ванна кімната"
            icons={icons.bathRoom}
            imgStyle={{ammentiesImageFst:room.about.ammetiveImgStyleFst, ammentiesImageScd:room.about.ammetiveImgStyleScd }}
            images={[
              room.about.ammentiesImages[4],
              room.about.ammentiesImages[5],
            ]}
            style={{bgColor:"bg-[#EDE8E5]",text:'text-[#6B6B6B]', headerColor:'text-black' }}

          />
        </>
      )}
    </div>
  );
};
