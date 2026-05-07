import React from 'react';
import RoomCard from '../components/RoomCard';

const RoomsPage = () => {
  return (
    <div className="pt-32 pb-20 px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-serif mb-12 text-center">Our Accommodations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Map your rooms array here */}
      </div>
    </div>
  );
};
export default RoomsPage;