import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Room } from "./pages/Room";
import BaseModal from "./components/Modals/BaseModal";
import './i18n';
import { InfinityScrollPage } from "./pages/InfinityScrollPage";
import { ConferenceService } from "./pages/ConferenceService";
import { ScrollToTop } from "./components/ScrollOnTop";
import { registerServiceWorker } from "./utils/registerServiceWorker";
function App() {
    registerServiceWorker()
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/about" element={<InfinityScrollPage pageKey="about" />} />
          <Route path="/rooms" element={<InfinityScrollPage pageKey="rooms" />} />
          <Route path="/" element={<InfinityScrollPage pageKey="home" />} />
          <Route path="/rooms/:roomType" element={<Room />} />
          <Route path="/contacts" element={<InfinityScrollPage pageKey="contacts" />} />
          <Route path="/conference-service" element={<ConferenceService />} />
          <Route path="/restaurant" element={<InfinityScrollPage pageKey="restaurant" />} />
          <Route path="/special-offers" element={<InfinityScrollPage pageKey="specialOffers" />} />
          <Route path="/special-offers/:offer" element={<InfinityScrollPage pageKey="specialOffers" />} />
          <Route path="/terrase" element={<InfinityScrollPage pageKey="terrase" />} />
        </Routes>
        <Footer />
        <BaseModal />
      </Router>
    </>
  );
}

export default App;
