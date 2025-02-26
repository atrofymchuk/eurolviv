import { ReviewsContainer } from "../components/Restaurant/ReviewsContainer";
import { Additionally } from "../components/Terrase/Additionally";
import { TerraseHeader } from "../components/Terrase/Header";
import { TerrasesContainer } from "../components/Terrase/TerrasesContainer";

export const Terrase = () => {
  return (
    <div>
      <TerraseHeader />
      <TerrasesContainer />
      <Additionally />
      <ReviewsContainer isTerrasePage={true} />
    </div>
  );
};
