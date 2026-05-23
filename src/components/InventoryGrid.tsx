import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VEHICLES } from '../data';
import { Vehicle, FilterCategory } from '../types';
import { ShieldCheck, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';

interface InventoryGridProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export default function InventoryGrid({ onSelectVehicle }: InventoryGridProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories: { label: string; value: FilterCategory }[] = [
    { label: 'ALL COLLECTIONS', value: 'all' },
    { label: 'HYPERCAR SERIES', value: 'hypercar' },
    { label: 'GT COUPE', value: 'gt-coupe' },
    { label: 'SUPER SUV', value: 'suv' },
  ];

  const filteredVehicles = VEHICLES.filter(
    (v) => activeCategory === 'all' || v.category === activeCategory
  );

  return (
    <section
      id="inventory"
      className="bg-[#f3f4f6] text-black py-24 px-6 md:px-12 md:py-32 relative"
    >
      {/* Absolute high-end layout grids in background (soft gray rules) */}
      <div className="absolute inset-x-0 top-0 h-px bg-zinc-300 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block with high-end typography spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-300 pb-12 mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 tracking-[0.3em] uppercase block mb-1">
              THE VEHICLE INVENTORY
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight leading-none uppercase">
              SELECT YOUR <br />
              <span className="text-zinc-500">PROPULSION</span>
            </h2>
          </div>

          <div className="max-w-md text-zinc-600 font-sans text-xs md:text-sm leading-relaxed flex flex-col gap-3">
            <p>
              Each Velocity machine is forged bespoke, using liquid metal layering, active computational dampers, and high-energy solid-state thermal cores.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono mt-1 text-black">
              <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
              <span>CLICK TO INTERACTIVELY TAILOR COMPONENT TRIMS</span>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12" id="filter_bar_row">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`relative px-6 py-2.5 rounded-full text-[10px] font-mono tracking-widest font-semibold uppercase cursor-pointer transition-all duration-300 ${
                activeCategory === cat.value
                  ? 'bg-black text-white shadow-lg shadow-black/10'
                  : 'bg-white text-zinc-700 hover:text-black hover:bg-zinc-200'
              }`}
            >
              {cat.label}
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute -inset-0.5 rounded-full border border-black/10 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Responsive Grid of Cards - Using layout flag for layout-morphs */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((car, index) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="p-6 bg-[#f9fafb] relative flex items-center justify-center min-h-[260px] cursor-pointer" onClick={() => onSelectVehicle(car)}>
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2 py-0.5 bg-black/5 rounded-full text-[9px] font-mono tracking-wider font-semibold">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>BESPOKE BUILD AVAILABLE</span>
                  </div>

                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-[90%] object-contain max-h-[160px] group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out py-4"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Specs Section (Quick Peek) */}
                <div className="px-6 py-4 bg-[#f8fafc] border-y border-zinc-100 grid grid-cols-3 text-center gap-1">
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400">0-60 MPH</div>
                    <div className="text-xs font-mono font-bold text-black">{car.acceleration}</div>
                  </div>
                  <div className="border-x border-zinc-200">
                    <div className="text-[10px] font-mono text-zinc-400">PEAK SPEED</div>
                    <div className="text-xs font-mono font-bold text-black">{car.speed}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400">POWER</div>
                    <div className="text-xs font-mono font-bold text-black">{car.power}</div>
                  </div>
                </div>

                {/* Info and Actions */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl tracking-tight text-zinc-950 uppercase">
                      {car.name}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1 uppercase tracking-wider">
                      {car.tagline}
                    </p>
                    <p className="text-xs font-sans text-zinc-600 mt-3 leading-relaxed">
                      {car.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-100">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wide block">
                        EST. STANDARD INTEGRITY
                      </span>
                      <span className="text-lg font-mono font-extrabold text-zinc-900">
                        {car.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectVehicle(car)}
                      className="group flex items-center gap-1 px-4 py-2 bg-black hover:bg-green-500 hover:text-black rounded-full text-white text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      <span>BUILD CAR</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quality indicator banner */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between border-t border-zinc-200 pt-8 text-xs text-zinc-400 font-mono gap-4">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span>EVERY MACHINE SHIPS WITH ULTRALIGHT COMPOSITE BATTERIES & 8-YEAR GLOBAL ACTIVE ASSISTANCE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>ISO 9001 QUALIFIED CORES</span>
            <span>CRITICAL THERMAL RATED</span>
          </div>
        </div>

      </div>
    </section>
  );
}
