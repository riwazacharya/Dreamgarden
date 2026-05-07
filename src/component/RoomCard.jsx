import { motion } from 'framer-motion';

const RoomCard = ({ title, price, image, features }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass rounded-2xl overflow-hidden group cursor-pointer"
  >
    <div className="h-72 overflow-hidden relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-gold-muted text-xs tracking-widest">
        NPR {price} / NIGHT
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3 mb-6">
        {features.map((f, i) => (
          <span key={i} className="text-[10px] uppercase tracking-tighter text-gray-400 border border-white/10 px-2 py-1">
            {f}
          </span>
        ))}
      </div>
      <button className="w-full py-3 border border-emerald-500/30 text-emerald-400 text-xs uppercase tracking-[0.2em] hover:bg-emerald-500/10 transition">
        View Details
      </button>
    </div>
  </motion.div>
);

export default RoomCard;