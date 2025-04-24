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

export const Layout = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { activeModal } = useModalStore();

  if (location.pathname === "/admin") {
    RedirectToAdminPanel();
    return <OnLoadingSpin />;
  }

  const isBookingPage = location.pathname === "/booking";

  return (
    <>
      {!isBookingPage && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <ScrollToTop />
      <div className="relative lg:pb-0 pb-[60px]  ">
        <Routes>
          <Route path="/about" element={<InfinityScrollPage pageKey="about" />} />
          <Route path="/rooms" element={<InfinityScrollPage pageKey="rooms" />} />
          <Route path="/" element={<InfinityScrollPage pageKey="home" />} />
          <Route path="/rooms/:roomType" element={<Room />} />
          <Route
            path="/contacts"
            element={<InfinityScrollPage pageKey="contacts" />}
          />
          <Route path="/conference-service" element={<ConferenceService />} />
          <Route
            path="/restaurant"
            element={<InfinityScrollPage pageKey="restaurant" />}
          />
          <Route
            path="/special-offers"
            element={<InfinityScrollPage pageKey="specialOffers" />}
          />
          <Route
            path="/special-offers/:offer"
            element={
              <>
                <InfinityScrollPage pageKey="specialOffers" />
                <SpecialOffersModal />
              </>
            }
          />
          <Route
            path="/terrace"
            element={<InfinityScrollPage pageKey="terrace" />}
          />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        {!isBookingPage && <Footer />}
        <BaseModal />
        {!isBookingPage && <MobileBottomMenu/>}
        {activeModal === "contacts" && <ContactsModal />}
      </div>
    </>
  );
};
