import { coffee, food, sandwich } from "@/store/exportsImg";
import { MenuSection } from "@/types/entity";

export const imageArray = [
    {
      img: food,
      text: "conferenceService.conferenceMenu.menu.title",
    },
    {
      img: sandwich,
      text: "conferenceService.conferenceMenu.menu.title1",
    },
    {
      img: coffee,
      text: "conferenceService.conferenceMenu.menu.title2",
    },
  ];

  export const menuSections: MenuSection[] = [
    {
      titleKey: "conferenceService.conferenceMenu.menu.title1",
      pdfPath: "/documents/Фуршетне меню.pdf",
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title",
      pdfPath: "/documents/Обіди та вечері.pdf",
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title2",
      pdfPath: "/documents/Каво-перерва.pdf",
    },
  ];