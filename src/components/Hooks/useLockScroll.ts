import { useEffect } from 'react';

export const useLockScroll = (ref: React.RefObject<HTMLElement | null> | null, lock: boolean) => {
  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    if (lock) {
      const scrollTop = el.scrollTop;
      el.style.overflow = 'hidden';
      el.dataset.scrollTop = String(scrollTop); 
    } else {
      el.style.overflow = '';
      const scrollTop = el.dataset.scrollTop ? parseInt(el.dataset.scrollTop) : 0;
      el.scrollTop = scrollTop;
      delete el.dataset.scrollTop;
    }
  }, [lock, ref]);
};
