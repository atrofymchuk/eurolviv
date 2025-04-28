import { useTranslation } from "react-i18next";
import { headerConference,  headerMobile } from "../../store/exportsImg";
import { PageHeader } from "../common/HeaderPage/PageHeader";
import { useModalStore } from "../../store/useModalStore";

export const Header = () => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();
  
  return (
    <PageHeader 
      backgroundImage={headerConference}
      mobileSrc={headerMobile}
      title={t("conferenceService.header.title")}
      description="conferenceService.header.desc"
      showOrderButton={true}
      showConferenceMenuButton={true}
      onOrderClick={() => onOpenModal("order")}
      wrapInView={false}
    />
  );
};