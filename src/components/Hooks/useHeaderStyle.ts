import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ruffLogo from "../../assets/ruffLogo.svg";
import defaultLogo from "../../assets/logo.svg";

const useNavbarStyles = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isShowRooms, setIsShowRooms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setIsShowRooms(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  function isActiveLink(path: string) {
    if (location.pathname === "/contacts") {
      return location.pathname === path
        ? "text-[#252526]" 
        : "text-[#252526]/62 hover:text-[#252526]"; 
    }
    return location.pathname === path
      ? scrolled
        ? "text-[#252526]"
        : "text-[#FFFFFF]"
      : scrolled
      ? "text-[#252526]/62 hover:text-[#252526]"
      : "text-[#FFFFFF]/62 hover:text-[#FFFFFF]";
  }

  let styles, iconLogoStyle, logo, rightMenu;

  switch (location.pathname) {
    case "/restaurant":
    case "/terrase":
      styles = scrolled ? "bg-[#252526] text-white" : "bg-white text-[#8C331B]";
      iconLogoStyle = scrolled ? "" : "invert";
      rightMenu = scrolled ? "text-[#252526]/62" : "text-[#FFFFFF]";
      logo = ruffLogo;
      break;

    case "/contacts":
      styles = scrolled ? "bg-[#252526] text-white" : "bg-[#8C331B] text-white";
      iconLogoStyle = "filter invert";
      rightMenu = scrolled ? "text-[#252526]/62" : "text-[#252526]";
      logo = defaultLogo;
      break;

    default:
      styles = scrolled ? "bg-[#252526] text-white" : "bg-white text-[#8C331B]";
      iconLogoStyle = scrolled ? "filter invert" : "";
      rightMenu = scrolled ? "text-[#252526]" : "text-[#FFFFFF]/62 hover:text-[#FFFFFF]";
      logo = defaultLogo;
      break;
  }

  return {
    styles,
    iconLogoStyle,
    logo,
    rightMenu,
    scrolled,
    isShowRooms,
    setIsShowRooms,
    isActiveLink,
    pathname: location.pathname,
  };
};

export default useNavbarStyles;
