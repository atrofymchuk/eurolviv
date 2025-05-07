import { useTranslation } from "react-i18next";
import { headerContacts, headerContactsMobile } from "@/store/exportsImg";
import { PageHeader } from "@/components/common/HeaderPage/PageHeader";

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <PageHeader 
      isContacts={true}
      backgroundImage={headerContacts}
      mobileSrc={headerContactsMobile}
      gradientStyle="contacts"
      textColor="black"
      title={t("contacts.header.title")}
      description="contacts.header.desc"
      wrapInView={true}
    />
  );
};