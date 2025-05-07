  import { AboutHome } from "@/components/Home/AboutHome";
  import { ConferenceService } from "@/components/Home/ConferenceService";
  import { HeaderHome } from "@/components/Home/HeaderHome";
  import { RoofService } from "@/components/Home/RoofService";
  import { RoomsHome } from "@/components/Home/Rooms";
  import { SpecialOffers } from "@/components/Room/SpecialOffers";

  export const Home = () => {
    return <div className="overflow-x-hidden">
    <HeaderHome/>
    <AboutHome />
    <RoomsHome />
    <ConferenceService />
    <RoofService />
    <SpecialOffers />
    </div>;
  };
