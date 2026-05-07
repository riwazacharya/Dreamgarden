import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';

// Simple placeholder for other pages
const RoomsPage = () => <div className="pt-40 text-center h-screen font-serif text-5xl">Our Luxury Rooms</div>;
const DiningPage = () => <div className="pt-40 text-center h-screen font-serif text-5xl">Fine Dining & BBQ</div>;

function App() {
  return (
    <Router>
      <div className="bg-[#050505] min-h-screen text-white selection:bg-[#c5a059] selection:text-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/dining" element={<DiningPage />} />
        </Routes>

        <footer className="bg-[#030303] pt-20 pb-10 px-8 border-t border-white/5 text-center">
          <h2 className="text-xl font-serif tracking-widest mb-4">DREAM GARDEN</h2>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Dream Garden Resort Nepal. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;