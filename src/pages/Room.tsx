import { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { About } from "../components/Room/About";
import { ComfortsBlocksWrapper } from "../components/Room/ComfortBlocksWrapper";
import { Header } from "../components/Room/Header";
import { SpecialOffers } from "../components/Room/SpecialOffers";
import { useRoomStore } from "../store/useRoomsStore";
import { Suggestion } from "../components/Room/Suggestion";
import { MoreInfo } from "../components/Room/MoreInfo";

export const Room = () => {
  const { roomType } = useParams();
  const { rooms } = useRoomStore();
  const [loadedSections, setLoadedSections] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useRef<HTMLDivElement | null>(null);

  const room = rooms.find((r) => r.type === roomType);

  const sections = [
    <About
      key="about"
      area={room?.area || 0}
      guests={room?.guests || ""}
      about={room?.about}
      swiperImagesStyle={room?.about?.swiperImagesStyle || ""}
      nameRoom={room?.title || ""}
      title={room?.header.title || ""}
      size={room?.header.size || ""}
    />,
    <ComfortsBlocksWrapper key="comforts" icons={room?.icons } room={room} />,
    <MoreInfo
      key="moreInfo"
    />,
    <SpecialOffers key="specialOffers" />,
    <Suggestion key="suggestion" suggestion={room?.suggestion} />,
  ];

  const loadMore = useCallback(() => {
    setLoadedSections((prev) => (prev < sections.length ? prev + 1 : prev));
  }, [sections.length]);

  useEffect(() => {
    if (!lastElementRef.current) return;
  
  
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) loadMore();
    });
  
    observer.observe(lastElementRef.current);
    observerRef.current = observer;
  
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, loadedSections, sections.length]);  
  

  return (
    <div className="overflow-x-hidden">
      <Header header={room?.header} />
      {sections.slice(0, loadedSections).map((Component, index) => (
        <div key={index} ref={index === loadedSections - 1 ? lastElementRef : null}>
          {Component}
        </div>
      ))}
    </div>
  );
};
