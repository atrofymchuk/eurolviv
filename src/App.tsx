import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import { Contacts } from "./pages/Contacts";
import { Rooms } from "./pages/Rooms";
import { Room } from "./pages/Room";
import { SpecialOffers } from "./pages/SpecialOffers";
import { ConferenceService } from "./pages/ConferenceService";
import { Restaurant } from "./pages/Restaurant";
import { Terrase } from "./pages/Terrase";
import BaseModal from "./components/Modals/BaseModal";
import './i18n';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:roomType" element={<Room />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/conference-service" element={<ConferenceService />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/special-offers" element={<SpecialOffers />} />
          <Route path="/special-offers/:offer" element={<SpecialOffers />} />
          <Route path="/terrase" element={<Terrase />} />
        </Routes>
        <Footer />
        <BaseModal />
      </Router>
    </>
  );
}

export default App;
