import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Sections/Home";
import Services from "./Components/Sections/Services";
import About from "./Components/Sections/About";
import Contact from "./Components/Sections/Contact";
import WebDev from "./Components/Sections/WebDev";
import MobileApps from "./Components/Sections/MobileApps";
import GraphicDesign from "./Components/Sections/GraphicDesign";
import NotFound from "./Components/Sections/NotFound";
import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdevelopment&design" element={<WebDev />} />
        <Route path="/mobileapps" element={<MobileApps />} />
        <Route path="/graphicdesign" element={<GraphicDesign />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;