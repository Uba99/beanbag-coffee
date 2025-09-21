import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journeys from "./pages/Journeys";
import JourneyDetail from "./pages/JourneyDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact  from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/journeys/:slug" element={<JourneyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
