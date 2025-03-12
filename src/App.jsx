import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Propiedades from "./pages/Propiedades"
import Contacto from "./pages/Contcato"
import { Footer } from "./components/Footer";
import { Acerca } from "./components/Acerca";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propiedades" element={<Propiedades />} />
        <Route path="/acerca" element={<Acerca/>}/>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

