import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10">
      <Link to="/" className="text-xl font-serif tracking-[0.3em] text-white">DREAM GARDEN</Link>
      
      <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] text-gray-300 items-center">
        <Link to="/" className="hover:text-[#c5a059] transition">Home</Link>
        <Link to="/rooms" className="hover:text-[#c5a059] transition">Rooms</Link>
        <Link to="/dining" className="hover:text-[#c5a059] transition">Dining</Link>
        <Link to="/booking">
          <button className="border border-[#c5a059] text-[#c5a059] px-6 py-2 hover:bg-[#c5a059] hover:text-black transition text-[10px] uppercase tracking-widest">
            Book Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;