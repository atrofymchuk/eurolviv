import { useRoomStore } from "../../store/useRoomsStore";
import { Terrase } from "./Terace";
export const TerrasesContainer = () => {
  const { terases } = useRoomStore();

  return (
    <>
      <div className="flex flex-col  items-center justify-center relative 0"></div>
      <div className="flex flex-col items-center justify-center relative ">
        {terases.map((el, index) => (
          <div
            className="flex flex-col items-center justify-center relative  max-w-screen"
            key={index}
          >
            <Terrase terase={el} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};
