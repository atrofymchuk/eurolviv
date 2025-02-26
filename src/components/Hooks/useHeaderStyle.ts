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

  let styles, iconLogoStyle, logo, link, rightMenu;

  function isActiveLink(path: string) {
    if (location.pathname === path) {
      return scrolled ? "text-[#252526]" : "text-[#FFFFFF]"; // Зміна кольору лінки при скролі
    }
    return scrolled ? "text-[#252526]/62 hover:text-[#252526]" : "text-[#FFFFFF]/62 hover:text-[#FFFFFF]";
  }

  switch (location.pathname) {
    case "/contacts":
      styles = scrolled ? "bg-[#252526] text-white" : "bg-[#8C331B] text-white";
      iconLogoStyle = "filter invert";
      link = isActiveLink(location.pathname);
      rightMenu = scrolled ? "text-[#252526]/62" : "text-[#252526]";
      logo = defaultLogo;
      break;

    case "/restaurant":
      styles = scrolled ? "bg-[#252526] text-white" : "bg-white text-[#8C331B]";
      iconLogoStyle = scrolled ? "" : "invert";
      link = isActiveLink(location.pathname);
      rightMenu = scrolled ? "text-[#252526]/62" : "text-[#FFFFFF]";
      logo = ruffLogo;
      break;

    case "/terrase":
      styles = scrolled ? "bg-[#252526] text-white" : "bg-white text-[#8C331B]";
      iconLogoStyle = scrolled ? "" : "invert";
      link = isActiveLink(location.pathname);
      rightMenu = scrolled ? "text-[#252526]/62" : "text-[#FFFFFF]";
      logo = ruffLogo;
      break;

    default:
      styles = scrolled ? "bg-[#252526] text-white" : "bg-white text-[#8C331B]";
      iconLogoStyle = scrolled ? "filter invert" : "";
      link = isActiveLink(location.pathname);
      rightMenu = scrolled ? "text-[#252526]" : "text-[#FFFFFF]/62 hover:text-[#FFFFFF]";
      logo = defaultLogo;
      break;
  }

  return {
    styles,
    iconLogoStyle,
    logo,
    link,
    rightMenu,
    scrolled,
    isShowRooms,
    setIsShowRooms,
    isActiveLink
  };
};

export default useNavbarStyles;
