import { locationWhite } from "@/store/exportsIcons";
import { callUs } from "@/store/exportsIcons";
import { calendarBooking } from "@/store/exportsIcons";
import { menu } from "@/store/exportsIcons";
import { links } from "./Links";
import { map } from "./map";
import { useTranslation } from "react-i18next";
import { useModalStore } from "@/store/useModalStore";

export const useMenuItems = () => {
  const { t } = useTranslation();
  const { onOpenModal } = useModalStore();

  const menuItems = [
    {
      icon: <img src={menu} alt="menu" />,
      label: t("phoneBottomMenu.menu"),
      path: links.menu,
      external: true,
    },
    {
      icon: <img src={calendarBooking} alt="calendar" />,
      label: t("phoneBottomMenu.book"),
      path: links.bookTable,
      external: true,
    },
    {
      icon: <img src={callUs} alt="call" />,
      label: t("phoneBottomMenu.callUs"),
      onClick: () => onOpenModal("contacts"),
    },
    {
      icon: <img src={locationWhite} alt="location" />,
      label: t("phoneBottomMenu.route"),
      path: map.address,
      external: true,
    },
  ];
  return menuItems;
};
