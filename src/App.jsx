import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Schema from './components/Schema';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.style.cssText = 'width:8px;height:8px;background:#00e5a0;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform .1s;mix-blend-mode:difference;';
    document.body.appendChild(dot);
    const move = e => { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; };
    window.addEventListener('mousemove', move);
    return () => { window.removeEventListener('mousemove', move); if (dot.parentNode) document.body.removeChild(dot); };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Schema />
        <div className="noise" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
