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
  const commonProps = {
    imgStyle: {
      ammentiesImageFst: room.about.ammetiveImgStyleFst,
      ammentiesImageScd: room.about.ammetiveImgStyleScd
    },
    images: room.about.ammentiesImages,
  };

  const standardStyle = {
    bgColor: "bg-[#EDE8E5]",
    text: 'text-[#6B6B6B]',
    headerColor: 'text-black'
  };

  const luxStyle = {
    bgColor: "bg-[#A47762]",
    text: 'text-[#E1E1E1]',
    headerColor: 'text-white'
  };

  return (
    <div className="">
      {room.isLux ? (
        <>
          <ComfortsBlock
            title="зручності у вітальні"
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[commonProps.images[0], commonProps.images[1]]}
            style={luxStyle}
          />

          {icons.bedRoom && (
            <ComfortsBlock
              title="зручності в спальні"
              icons={icons.bedRoom}
              {...commonProps}
              images={[commonProps.images[2], commonProps.images[3]]}
              style={standardStyle}
            />
          )}

          <ComfortsBlock
            title="ванна кімната"
            icons={icons.bathRoom}
            {...commonProps}
            images={[commonProps.images[4], commonProps.images[5]]}
            style={standardStyle}
          />
        </>
      ) : (
        <>
          <ComfortsBlock
            title="зручності в номері"
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[commonProps.images[0], commonProps.images[1]]}
            style={standardStyle}
          />
          
          <ComfortsBlock
            title="ванна кімната"
            icons={icons.bathRoom}
            {...commonProps}
            images={[commonProps.images[2], commonProps.images[3]]}
            style={standardStyle}
          />
        </>
      )}
    </div>
  );
};
