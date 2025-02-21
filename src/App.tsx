import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import Footer from "./components/Footer";
import { Contacts } from "./pages/Contacts";
import { Rooms } from "./pages/Rooms";
import OrderModal from "./components/Modals/OrderModal";
import { Room } from "./pages/Room";
import { SpecialOffers } from "./pages/SpecialOffers";
function App() {
  return (
    <>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/" element={<Rooms/>} />
          <Route path="/rooms/:roomType" element={<Room/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/special-offers" element={<SpecialOffers/>} />
          <Route path="/special-offers/:offer" element={<SpecialOffers />} />
        
        </Routes>
        <Footer />
        <OrderModal />
      </Router>
    </>
  );
}

export default App;
