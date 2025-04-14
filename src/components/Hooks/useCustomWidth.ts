import { useState, useEffect } from "react";

export const useCustomWidth = (minWidth: number, maxWidth: number): boolean => {
  const [isCustomWidth, setIsCustomWidth] = useState(false);
  
  useEffect(() => {
    const checkWidth = () => {
      const width = window.innerWidth;
      setIsCustomWidth(width >= minWidth && width <= maxWidth);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    
    return () => {
      window.removeEventListener('resize', checkWidth);
    };
  }, [minWidth, maxWidth]);

  return isCustomWidth;
};