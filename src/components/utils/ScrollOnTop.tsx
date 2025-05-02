import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  const getHeaderHeight = (): number => {
    const width = window.innerWidth;
    
    if (width >= 1536) { 
      return width * 0.0693; 
    } else if (width >= 1024) { 
      return width * 0.0908; 
    } else {
      return width * 0.2533; 
    }
  };

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const headerHeight = getHeaderHeight();
        
        const offset = 20;
        
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: elementPosition - headerHeight - offset,
          behavior: "smooth"
        });
      } else {
        setTimeout(() => {
          const delayedElement = document.getElementById(hash.substring(1));
          if (delayedElement) {
            const headerHeight = getHeaderHeight();
            const offset = 20;
            const elementPosition = delayedElement.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
              top: elementPosition - headerHeight - offset,
              behavior: "smooth"
            });
          } else {
            window.scrollTo(0, 0);
          }
        }, 500);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}; 