import { useEffect, useState, useRef, useCallback } from "react";
import { About } from "../components/ConferesceService/About";
import { ConferenceMenu } from "../components/ConferesceService/ConferenceMenu";
import { ConferenceMenuContent } from "../components/ConferesceService/ConferenceMenuContent";
import { Equipment } from "../components/ConferesceService/Equipment";
import { Header } from "../components/ConferesceService/Header";
import { RoomSliderContainer } from "../components/ConferesceService/RoomSliderContainer";
import { useRoomStore } from "../store/useRoomsStore";

export const ConferenceService = () => {
  const { halls } = useRoomStore();
  const [loadedSections, setLoadedSections] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const sections = halls.flatMap((el, index) => [
    <About key={`about-${index}`} item={el} isOnTop={index === 0} />, 
    <Equipment key={`equipment-${index}`} icons={el.icons} price={el.price} />, 
    <RoomSliderContainer key={`slider-${index}`} images={el.showcaseSwiperImages} />
  ]);

  sections.push(<ConferenceMenu key="menu" />, <ConferenceMenuContent key="content" />);

  const loadMore = useCallback(() => {
    setLoadedSections((prev) => (prev < sections.length ? prev + 1 : prev));
  }, [sections.length]);

  useEffect(() => {
    if (!lastElementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    }, { threshold: 0.1, rootMargin: "100px" });

    observer.observe(lastElementRef.current);
    observerRef.current = observer;

    return () => observerRef.current?.disconnect();
  }, [loadMore, loadedSections]);

  return (
    <div>
      <Header />
      {sections.slice(0, loadedSections).map((Component, index) => {
        const isLast = index === loadedSections - 1;
        return (
          <div key={index} ref={isLast ? lastElementRef : null}>
            {Component}
          </div>
        );
      })}
    </div>
  );
};