import { useTranslation } from "react-i18next";
import { headerContacts } from "../../store/exportsImg";
import { PageHeader } from "../common/HeaderPage/PageHeader";

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <PageHeader 
      backgroundImage={headerContacts}
      gradientStyle="contacts"
      textColor="black"
      title={t("contacts.header.title")}
      description="contacts.header.desc"
      wrapInView={true}
    />
  );
};