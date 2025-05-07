import { BarComponent } from "@/components/Terrace/Bar";
import { ReviewsContainer } from "@/components/Restaurant/ReviewsContainer";
import { TerraseHeader } from "@/components/Terrace/Header";
import { TerrasesContainer } from "@/components/Terrace/TerracesContainer";

export const Terrase = () => {
  return (
    <div>
      <TerraseHeader />
      <TerrasesContainer />
      <BarComponent />
      <ReviewsContainer />
    </div>
  );
};
