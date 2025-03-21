import { useTranslation } from "react-i18next";
import { headerConference, headerConferenceMobile } from "../../store/exportsImg";
import { PageHeader } from "../common/HeaderPage/PageHeader";
import { useModalStore } from "../../store/useModalStore";

export const Header = () => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  
  return (
    <PageHeader 
      backgroundImage={headerConference}
      mobileSrc={headerConferenceMobile}
      title={t("conferenceService.header.title")}
      description="conferenceService.header.desc"
      showOrderButton={true}
      showConferenceMenuButton={true}
      onOrderClick={() => onOpenModal("order")}
      wrapInView={false}
    />
  );
};