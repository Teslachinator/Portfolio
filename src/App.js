import "./Styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

import Footer from "./Components/footer/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Projectt from "./Pages/Projectt";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Projectt />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
