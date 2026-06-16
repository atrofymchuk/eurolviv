import { coffee, food, sandwich } from "@/store/exportsImg";
import { MenuSection } from "@/types/entity";
import { MENU_DOCUMENTS } from "@/Constants/MenuDocuments";

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
      pdfPath: MENU_DOCUMENTS.buffet,
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title",
      pdfPath: MENU_DOCUMENTS.businessLunch,
    },
    {
      titleKey: "conferenceService.conferenceMenu.menu.title2",
      pdfPath: MENU_DOCUMENTS.coffeeBreak,
    },
  ];