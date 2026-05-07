import React from 'react';
import { motion } from 'framer-motion';
import RoomCard from '../components/RoomCard';

const rooms = [
  {
    title: "Mountain View Suite",
    price: "12,000",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    features: ["Private Balcony", "King Bed", "Mini Bar", "AC"]
  },
  {
    title: "Garden Family Cottage",
    price: "18,500",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
    features: ["Kitchenette", "2 Bedrooms", "Fireplace", "Garden Access"]
  }
];

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505] z-10" />
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Resort" />
        </div>
        <div className="relative z-20 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#c5a059] tracking-[0.5em] uppercase text-xs mb-4">Dream Garden Resort</motion.p>
          <h1 className="text-6xl md:text-9xl font-serif">Serenity <span className="italic font-light text-gray-400">Defined</span></h1>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h3 className="text-4xl font-serif mb-12">Featured Accommodations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {rooms.map((room, idx) => (
            <RoomCard key={idx} {...room} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;