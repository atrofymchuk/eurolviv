import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
