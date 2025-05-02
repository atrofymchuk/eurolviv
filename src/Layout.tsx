import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Room } from "./pages/Room";
import BaseModal from "./components/Modals/BaseModal";
import "./i18n";
import { InfinityScrollPage } from "./pages/InfinityScrollPage";
import { ConferenceService } from "./pages/ConferenceService";
import Booking from "./pages/BookRoom";
import RedirectToAdminPanel from "./components/utils/RedirectToAdminPanel";
import { OnLoadingSpin } from "./components/utils/OnLoadingSpin";
import { SpecialOffersModal } from "./components/Modals/SpecialOfferModal";
import { ScrollToTop } from "./components/utils/ScrollOnTop";
import { useState } from "react";
import { MobileBottomMenu } from "./components/MobileBottomMenu/MobileBottomMenu";
import { ContactsModal } from "./components/Modals/ContactsModal";
import { useModalStore } from "./store/useModalStore";
import { BookDirectAlert } from "./components/common/BookDirectAlert";
import { Restaurant } from "./pages/Restaurant";
import { Agreement } from "./components/common/Agreement/Agreement";
import { usePageStore } from "./store/usePageStorage";
export const Layout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeModal, url } = useModalStore();
  const { isLastComfortBlockSection } = usePageStore();
  const [isAcceptedAgreement, setIsAcceptedAgreement] = useState(
    localStorage.getItem("agreement") === "true"
  );

  if (location.pathname === "/admin") {
    RedirectToAdminPanel();
    return <OnLoadingSpin />;
  }
  const handleAgree = () => {
    localStorage.setItem("agreement", "true");
    setIsAcceptedAgreement(true);
  };

  const isBookingPage = location.pathname === "/booking";
  const isRoomPage = /^\/rooms\/[^/]+$/.test(location.pathname);
  const isRoomsPage = location.pathname === "/rooms";
  const isMobile = window.innerWidth < 768;


  const shouldShowFooter = () => {
    if (isBookingPage) return false;

    if (isRoomPage) return isLastComfortBlockSection;

    if (isRoomsPage) return true;

    return true;
  };

  return (
    <>
      {!isBookingPage && (
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      )}
      <ScrollToTop />
      <div className="relative lg:pb-0 pb-[60px]  ">
        <Routes>
          <Route
            path="/about"
            element={<InfinityScrollPage pageKey="about" />}
          />
          <Route
            path="/rooms"
            element={<InfinityScrollPage pageKey="rooms" />}
          />
          <Route path="/" element={<InfinityScrollPage pageKey="home" />} />
          <Route path="/rooms/:roomType" element={<Room />} />
          <Route
            path="/contacts"
            element={<InfinityScrollPage pageKey="contacts" />}
          />
          <Route path="/conference-service" element={<ConferenceService />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route
            path="/special-offers"
            element={<InfinityScrollPage pageKey="specialOffers" />}
          />
          <Route
            path="/special-offers/:offer"
            element={
              <>
                <InfinityScrollPage pageKey="specialOffers" />
              </>
            }
          />
          <Route
            path="/terrace"
            element={<InfinityScrollPage pageKey="terrace" />}
          />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        {(isMobile || shouldShowFooter()) && <Footer />}
        <BaseModal />
        {!isBookingPage && <MobileBottomMenu />}
        {activeModal === "contacts" && <ContactsModal />}
        {
          <>
            <BookDirectAlert delay={15000} />
          </>
        }
        {url && <SpecialOffersModal />}
        {!isAcceptedAgreement && <Agreement handleAgree={handleAgree} />}
      </div>
    </>
  );
};
