import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import Footer from "./components/Footer";
import { Contacts } from "./pages/Contacts";
import { Rooms } from "./pages/Rooms";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/rooms" element={<Rooms/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
