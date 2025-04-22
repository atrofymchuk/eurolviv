import { useRoomStore } from "../../store/useRoomsStore";
import { Terrase } from "./Terace";
import { useEffect } from "react";

export const TerrasesContainer = () => {
  const { terases } = useRoomStore();

  // Додаємо функцію для запобігання небажаним прокруткам на мобільних пристроях
  useEffect(() => {
    // Функція для запобігання випадковим свіпам на мобільних
    const preventUnwantedSwipes = (e: TouchEvent) => {
      // Якщо торкання почалося не в слайдері, 
      // запобігаємо стандартній поведінці браузера 
      // при певних умовах
      if (
        !(e.target as HTMLElement)?.closest('.slider-container') &&
        !(e.target as HTMLElement)?.closest('.dish-swiper')
      ) {
        // Не блокуємо звичайну прокрутку сторінки
        if (e.touches.length === 1) {
          e.stopPropagation();
        }
      }
    };

    // Додаємо обробники подій тільки на мобільних пристроях
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
      <div className="flex flex-col items-center justify-center relative ">
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
