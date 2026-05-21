import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import HowWeWork from "@/pages/HowWeWork";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

function App() {
  return (
    <Router>
      <style>{`
        :root {
          --navy: #0B1F3B;
          --orange: #F57C00;
        }
        .text-navy { color: var(--navy); }
        .bg-navy { background-color: var(--navy); }
        .border-navy { border-color: var(--navy); }
        .text-orange { color: var(--orange); }
        .bg-orange { background-color: var(--orange); }
        .border-orange { border-color: var(--orange); }
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-body { font-family: 'Roboto', sans-serif; }
        .hero-overlay {
          background: linear-gradient(to right, rgba(11, 31, 59, 0.9), rgba(11, 31, 59, 0.4));
        }
      `}</style>
      <div className="flex flex-col min-h-screen font-body">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;