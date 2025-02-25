import { AboutHome } from "../components/Home/AboutHome";
import { ConferenceService } from "../components/Home/ConferenceService";
import { HeaderHome } from "../components/Home/HeaderHome";
import { RoomsHome } from "../components/Home/Rooms";

export const Home = () => {
  return <>
  <HeaderHome/>
  <AboutHome />
  <RoomsHome />
  <ConferenceService />
  </>;
};
