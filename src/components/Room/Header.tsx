import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/common/HeaderPage/PageHeader";
import { RoomHeader } from "@/types/types";

interface RoomHeaderToProps {
  header?: RoomHeader;
}

export const Header: React.FC<RoomHeaderToProps> = ({ header }) => {
  const { t } = useTranslation();
  
  if (!header) return null;
  
  const {
    title,
    arriveTime,
    count,
    description,
    leaveTime,
    size,
    view,
    previewImage,
    descriptionMobile
  } = header;
  
  return (
    <PageHeader 
      backgroundImage={previewImage}
      title={t(title)}
      description={description}
      descriptionMobile={descriptionMobile}
      size={size}
      showBackLink={true}
      backLinkTo="/rooms"
      backLinkText="room.roomNavigation"
      roomInfo={{
        count:count.toString(),
        view,
        arriveTime,
        leaveTime
      }}
    />
  );
};