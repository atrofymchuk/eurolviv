import { BarComponent } from "../components/Terrase/Bar";
import { ReviewsContainer } from "../components/Restaurant/ReviewsContainer";
import { TerraseHeader } from "../components/Terrase/Header";
import { TerrasesContainer } from "../components/Terrase/TerrasesContainer";

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
