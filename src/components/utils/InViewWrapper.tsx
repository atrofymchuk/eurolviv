import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type InViewWrapperProps = {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  onEnter?: () => void;
};

export const InViewWrapper = ({
  children,
  threshold = 0.1,
  rootMargin = "100px",
  className = "",
  onEnter,
}: InViewWrapperProps) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  if (inView && onEnter) {
    onEnter();
  }

  return (
    <span ref={ref} className={className} style={{ display: "contents" }}>
      {children}
    </span>
  );
};
