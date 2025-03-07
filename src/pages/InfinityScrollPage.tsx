import { useEffect, useRef } from "react";
import { usePageStore } from "../store/usePageStorage";

type InfinityScrollPageProps = {
  pageKey: string;
};

export const InfinityScrollPage: React.FC<InfinityScrollPageProps> = ({ pageKey }) => {
  const { sections, loadedSections, loadMore } = usePageStore();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore(pageKey);
        }
      },
      { threshold: 1 }
    );

    // Store the current observerRef value in a variable within the effect
    const currentRef = observerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadMore, pageKey]);

  return (
    <div>
      {sections[pageKey].slice(0, loadedSections[pageKey]).map((Component, index) => (
        <Component key={index} {...(pageKey === "conference" ? { item: {}, isOnTop: index === 0 } : {})} />
      ))}

      <div ref={observerRef} >
      </div>
    </div>
  );
};
