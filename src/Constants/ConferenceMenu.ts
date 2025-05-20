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
      pdfPath: "/documents/Buffet_Menu.pdf",
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title",
      pdfPath: "/documents/Lunches_and_Dishes.pdf",
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title2",
      pdfPath: "/documents/Coffee_Break.pdf",
    },
  ];