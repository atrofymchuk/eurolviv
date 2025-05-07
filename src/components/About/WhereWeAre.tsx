import { useTranslation } from "react-i18next";
import { usePagesInfoStore } from "@/store/usePagesInfoStore";
import { LocationInfo } from "@/components/About/LocationInfo";
import { MapSection } from "@/components/About/MapSection";
import { InfrastructureSection } from "@/components/About/InfrastructureSection";
import { PlacesNearbySection } from "@/components/About/PlacesNearlySection";

export const WhereWeAre = () => {
  const { t, i18n } = useTranslation();
  const {places, infrastructure} = usePagesInfoStore();
  
  return (
    <section className="flex flex-col font-cofo " >
      <div className="grid lg:grid-cols-[48%_52%] max-w-[89.6%] mx-auto w-full container-fluid border border-t-0 border-[#c7c7c7] ">
        <LocationInfo t={t} />
        <MapSection />
      </div>

      <div className="grid lg:grid-cols-[48%_52%] w-full  border border-[#c7c7c7] border-t-0 container-fluid max-w-[89.6%] mx-auto lg:pb-[93px] pb-[48px]">
        <InfrastructureSection t={t} />
        <PlacesNearbySection t={t} i18n={i18n} places={places} infrastructure={infrastructure} />
      </div>
    </section>
  );
};