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
  const {t} = useTranslation()
  if(!icons || !room) return null;

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
            title={t('room.comfortBlock.title')}
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[commonProps.images[0], commonProps.images[1]]}
            style={luxStyle}
          />

          {icons.bedRoom && (
            <ComfortsBlock
              title={t('room.comfortBlock.title2')}
              icons={icons.bedRoom}
              {...commonProps}
              images={[commonProps.images[2], commonProps.images[3]]}
              style={standardStyle}
            />
          )}

          <ComfortsBlock
            title={t('room.comfortBlock.title3')}
            icons={icons.bathRoom}
            {...commonProps}
            images={[commonProps.images[4], commonProps.images[5]]}
            style={standardStyle}
          />
        </>
      ) : (
        <>
          <ComfortsBlock
            title={t('room.comfortBlock.title4')}
            icons={icons.ammentiesInRoom}
            {...commonProps}
            images={[commonProps.images[0], commonProps.images[1]]}
            style={standardStyle}
          />
          
          <ComfortsBlock
            title={t('room.comfortBlock.title3')}
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
