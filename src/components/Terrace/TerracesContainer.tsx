import { useRoomStore } from "@/store/useRoomsStore";
import { Terrase } from "@/components/Terrace/Terace";
import { useEffect } from "react";

export const TerrasesContainer = () => {
  const { terases } = useRoomStore();

  useEffect(() => {
    const preventUnwantedSwipes = (e: TouchEvent) => {
     
      if (
        !(e.target as HTMLElement)?.closest('.slider-container') &&
        !(e.target as HTMLElement)?.closest('.dish-swiper')
      ) {
        if (e.touches.length === 1) {
          e.stopPropagation();
        }
      }
    };

    if (window.innerWidth <= 768) {
      document.addEventListener('touchmove', preventUnwantedSwipes, { passive: false });
    }

    return () => {
      document.removeEventListener('touchmove', preventUnwantedSwipes);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center relative 0"></div>
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        {terases.map((el, index) => (
          <div
            className="flex flex-col items-center justify-center relative max-w-screen"
            key={index}
          >
            <Terrase terase={el} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};
