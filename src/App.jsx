import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Consultation from "./pages/Consultation/Consultation";
import Home from "./pages/Home/Home";
// import ServiceDetails from "./pages/Services/ServiceDetails";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/services/:serviceSlug" element={<ServiceDetails />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<Consultation />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

