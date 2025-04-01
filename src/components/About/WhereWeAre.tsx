import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "../../store/usePagesInfoStore";
import { LocationInfo } from "./LocationInfo";
import { MapSection } from "./MapSection";
import { InfrastructureSection } from "./InfrastructureSection";
import { PlacesNearbySection } from "./PlacesNearlySection";

export const WhereWeAre = () => {
  const { t } = useTranslation();
  const {places, infrastructure} = usePagesInfoStore();
  
  return (
    <section className="flex flex-col font-cofo " >
      <div className="grid lg:grid-cols-[48%_52%] max-w-[89.58%] mx-auto w-full container-fluid border border-t-0 border-[#c7c7c7] ">
        <LocationInfo t={t} />
        <MapSection />
      </div>

      <div className="grid lg:grid-cols-[48%_52%] w-full  border border-[#c7c7c7] border-t-0 container-fluid max-w-[89.58%] mx-auto lg:pb-[93px] pb-[48px]">
        <InfrastructureSection t={t} />
        <PlacesNearbySection t={t} places={places} infrastructure={infrastructure} />
      </div>
    </section>
  );
};