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
    <section className="flex flex-col font-cofo">
      <div className="grid lg:grid-cols-[1fr_1fr] max-w-[89.58%] mx-auto w-full container-fluid border border-t-0 border-[#c7c7c7]">
        <LocationInfo t={t} />
        <MapSection />
      </div>

      <div className="grid lg:grid-cols-2 w-full border border-[#c7c7c7] border-t-0 container-fluid max-w-[89.58%] mx-auto">
        <InfrastructureSection t={t} />
        <PlacesNearbySection t={t} places={places} infrastructure={infrastructure} />
      </div>
    </section>
  );
};