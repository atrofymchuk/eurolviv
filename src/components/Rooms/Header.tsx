import { useTranslation } from "react-i18next";
import { headerPhoto } from "@/store/exportsImg";
import { PageHeader } from "@/components/common/HeaderPage/PageHeader";

export const Header = () => {
  const { t } = useTranslation();
  
  return (
    <PageHeader 
      backgroundImage={headerPhoto}
      title={t("rooms.header.title")}
      description="rooms.header.desc"
      showBookButton={true}
      wrapInView={true}
    />
  );
};