import { IconsState, Room } from "../../types/types";
import { ComfortsBlock } from "./ComfotsBlock";
import { useTranslation } from "react-i18next";
type ComfortsBlockToProps = {
  icons?: IconsState;
  room?: Room;
};

export const ComfortsBlocksWrapper = ({
  icons,
  room,
}: ComfortsBlockToProps) => {
  const { t } = useTranslation();
  if (!icons || !room) return null;

  const commonProps = {
    imgStyle: {
      ammentiesImageFst: room.about.ammetiveImgStyleFst,
      ammentiesImageScd: room.about.ammetiveImgStyleScd,
    },
    mobileImages: room.about.ammentiesMobileImages
  };

  const standardStyle = {
    bgColor: "bg-[#EDE8E5]",
    text: "text-[#6B6B6B]",
    headerColor: "text-black",
  };

  const luxStyle = {
    bgColor: "bg-[#A47762]",
    text: "text-[#E1E1E1]",
    headerColor: "text-white",
    
  };


  return (
    <div className="">
      {room.isLux ? (
        <>
          <ComfortsBlock
            title={t("room.comfortBlock.title")}
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[room.about.ammentiesImages[0], room.about.ammentiesImages[1], room.about.ammentiesMobileImages[0]]}
            style={luxStyle}
          />

          {icons.bedRoom && (
            <ComfortsBlock
              title={t("room.comfortBlock.title2")}
              icons={icons.bedRoom}
              {...commonProps}
              images={[room.about.ammentiesImages[2], room.about.ammentiesImages[3], room.about.ammentiesMobileImages[1]]}
              style={standardStyle}
            />
          )}

          <ComfortsBlock
            title={t("room.comfortBlock.title3")}
            icons={icons.bathRoom}
            {...commonProps}
            images={[room.about.ammentiesImages[4], room.about.ammentiesImages[5], room.about.ammentiesMobileImages[2]]}
            style={standardStyle}
          />
        </>
      ) : (
        <>
          <ComfortsBlock
            title={t("room.comfortBlock.title4")}
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[room.about.ammentiesImages[0], room.about.ammentiesImages[1], room.about.ammentiesMobileImages[0]]}
            style={standardStyle}
          />
      
          <ComfortsBlock
            title={t("room.comfortBlock.title3")}
            icons={icons.bathRoom}
            {...commonProps}
            images={[room.about.ammentiesImages[2], room.about.ammentiesImages[3], room.about.ammentiesMobileImages[1]]}
            style={standardStyle}
          />
        
        </>
      )}
    </div>
  );
};
