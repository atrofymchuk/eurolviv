import { Dishes } from "./Dishes";
import {
  tableWithFlowers,
  table,
  tableTwo,
  pink,
  fish,
  golubtsi,
  pasta,
  pie,
  steak,
} from "../../store/exportsImg";

export const Services = () => {
  const menuContent = {
    title: "terrase.dishes.title",
    desc: "terrase.dishes.desc",
    heading: "terrase.dishes.heading",
    button: "buttons.menu",
    isMenu: true,
  };

  const celebrationContent = {
    title: "terrase.celebration.title",
    titleTwo: "terrase.celebration.title2",
    desc: "terrase.celebration.desc",
    heading: "terrase.celebration.heading",
    button: "buttons.celebrationMenu",
  };

  const dishSlides = [table, pink, tableTwo, tableWithFlowers];
  const slides = [fish, golubtsi, pasta, pie, steak];
  return (
    <div>
      <div className="">
        <Dishes slides={slides} content={menuContent}  />
      </div>
      <div className="">

        <Dishes slides={dishSlides} content={celebrationContent} />
      </div>
    </div>
  );
};
