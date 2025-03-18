import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const RedirectToAdminPanel = () => {
    const location = useLocation()
    useEffect(() => {
          window.location.href = "https://extranet.rooms-wizard.com";

      }, [location.pathname]);
    
  return null; 
};

export default RedirectToAdminPanel;
