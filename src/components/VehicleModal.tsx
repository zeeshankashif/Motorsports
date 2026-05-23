import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Vehicle } from '../types';
import { X, Check, ShieldAlert, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onApplyToBooking: (customSpec: string) => void;
}

export default function VehicleModal({ vehicle, onClose, onApplyToBooking }: VehicleModalProps) {
  if (!vehicle) return null;

  // Selected state options
  const [selectedColor, setSelectedColor] = useState(vehicle.colors[0]);
  const [selectedWheel, setSelectedWheel] = useState(vehicle.wheels[0]);
  const [carbonPackage, setCarbonPackage] = useState(false);
  const [trackTrackers, setTrackTrackers] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Helper to parse base price from e.g. "$2,450,000" to number
  const getBasePrice = () => {
    return parseInt(vehicle.price.replace(/[$,]/g, ''), 10);
  };

  // Recalculate price whenever choices change
  useEffect(() => {
    let price = getBasePrice();
    price += selectedWheel.price;
    if (carbonPackage) price += 35000;
    if (trackTrackers) price += 18000;
    setTotalPrice(price);
  }, [selectedWheel, carbonPackage, trackTrackers, vehicle]);

  const formatPrice = (num: number) => {
    return '$' + num.toLocaleString();
  };

  const handleApply = () => {
    const specSummary = `Model: ${vehicle.name} | Paint: ${selectedColor.name} | Wheels: ${selectedWheel.name} | Carbon Aero: ${carbonPackage ? 'Yes' : 'No'} | Track Tech: ${trackTrackers ? 'Yes' : 'No'} | Est Total: ${formatPrice(totalPrice)}`;
    onApplyToBooking(specSummary);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          className="relative w-full max-w-5xl bg-[#121211] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
        >
          {/* Close Action */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-750 text-zinc-400 hover:text-white transition-all z-20 cursor-pointer"
            id="close_modal_btn"
          >
            <X className="w-4 h-4" />
          </button>

          {/* LEFT COLUMN: The Visual Stage (7 cols) */}
          <div className="md:col-span-7 bg-[#050505] p-6 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800 relative">
            
            {/* Ambient Background Glow matching selected paint color */}
            <div 
              className="absolute inset-0 opacity-15 filter blur-[100px] pointer-events-none transition-all duration-1000"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${selectedColor.hex} 0%, transparent 70%)`
              }}
            />

            <div>
              <span className="text-[10px] font-mono text-green-400 tracking-wider">CREATIVE AUTOLAB CONFIGURATOR</span>
              <h2 className="text-3xl font-display font-medium text-white uppercase mt-1">
                {vehicle.name}
              </h2>
              <p className="text-xs text-zinc-500 font-mono tracking-wider mt-1 uppercase">
                {vehicle.tagline}
              </p>
            </div>

            {/* Configured Vehicle Master Image */}
            <div className="my-10 flex items-center justify-center relative min-h-[220px]">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full max-w-md object-contain drop-shadow-[0_20px_50px_rgba(34,197,94,0.15)] transition-all duration-500"
                style={{
                  filter: `drop-shadow(0 25px 40px ${selectedColor.hex}22)`
                }}
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay Accent representing selected swatch paint reflection */}
              <div 
                className="absolute w-3.5 h-3.5 rounded-full border-2 border-white pointer-events-none"
                style={{
                  backgroundColor: selectedColor.hex,
                  top: '40%',
                  right: '30%',
                  boxShadow: `0 0 20px 4px ${selectedColor.hex}`
                }}
              />
            </div>

            {/* Quick Specs indicators */}
            <div className="grid grid-cols-4 gap-2 border-t border-zinc-900 pt-6 font-mono text-center">
              <div>
                <span className="text-[9px] text-zinc-500 block">RANGE</span>
                <span className="text-xs text-white font-medium block mt-0.5">{vehicle.details.range.split(' ')[0]} MI</span>
              </div>
              <div className="border-l border-zinc-900">
                <span className="text-[9px] text-zinc-500 block">POWER</span>
                <span className="text-xs text-white font-medium block mt-0.5">{vehicle.power}</span>
              </div>
              <div className="border-l border-zinc-900">
                <span className="text-[9px] text-zinc-500 block">LAUNCH</span>
                <span className="text-xs text-white font-medium block mt-0.5">{vehicle.acceleration}</span>
              </div>
              <div className="border-l border-zinc-900">
                <span className="text-[9px] text-zinc-500 block">BATTERY</span>
                <span className="text-xs text-white font-medium block mt-0.5">{vehicle.battery}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Custom Controls (5 cols) */}
          <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
            <div className="space-y-8">
              {/* Option Class 1: Paint Customizer */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase mb-3">
                  01 / BESPOKE LIQUID PAINT
                </span>
                <div className="flex flex-wrap gap-3">
                  {vehicle.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${
                        selectedColor.name === color.name ? 'scale-110 ring-2 ring-green-400 ring-offset-4 ring-offset-[#121211]' : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <Check className="w-4 h-4 text-white absolute inset-0 m-auto filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-2">
                  CURRENT: <span className="text-white font-bold">{selectedColor.name}</span>
                </div>
              </div>

              {/* Option Class 2: High Performance Wheels */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase mb-3">
                  02 / ULTRALIGHT CARBON WHEELS
                </span>
                <div className="space-y-2.5">
                  {vehicle.wheels.map((wheel) => (
                    <button
                      key={wheel.name}
                      onClick={() => setSelectedWheel(wheel)}
                      className={`w-full text-left p-3.5 rounded-xl border font-mono text-xs flex justify-between items-center transition-all duration-300 cursor-pointer ${
                        selectedWheel.name === wheel.name
                          ? 'border-green-500/40 bg-green-500/5 text-white'
                          : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-white'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">{wheel.name}</span>
                        <span className="text-[10px] text-zinc-500 mt-0.5">COMPOSITE MANGANESE WEIGHT-SAVING</span>
                      </div>
                      <span className="text-zinc-300 font-bold">
                        {wheel.price === 0 ? 'INCLUDED' : `+${formatPrice(wheel.price)}`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option Class 3: Carbon Aerodynamic packages */}
              <div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider block uppercase mb-3">
                  03 / ADAPTIVE PACKAGE ADDS
                </span>
                <div className="space-y-2">
                  <button
                    onClick={() => setCarbonPackage(!carbonPackage)}
                    className={`w-full text-left p-3 rounded-xl border font-mono text-xs flex justify-between items-center transition-all duration-300 cursor-pointer ${
                      carbonPackage ? 'border-sky-500/40 bg-sky-500/5 text-white' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
                    }`}
                  >
                    <div>
                      <span className="font-medium block">Stage-3 Carbon aero Splitter Package</span>
                      <span className="text-[10px] text-zinc-500 block mt-0.5">Provides +45% stability downforce at v-max</span>
                    </div>
                    <span className="font-bold">+$35,000</span>
                  </button>

                  <button
                    onClick={() => setTrackTrackers(!trackTrackers)}
                    className={`w-full text-left p-3 rounded-xl border font-mono text-xs flex justify-between items-center transition-all duration-300 cursor-pointer ${
                      trackTrackers ? 'border-sky-500/40 bg-sky-500/5 text-white' : 'border-zinc-800 bg-zinc-900/50 text-zinc-400'
                    }`}
                  >
                    <div>
                      <span className="font-medium block">Velocity Track telemetry ECU upgrade</span>
                      <span className="text-[10px] text-zinc-500 block mt-0.5">Dual-frequency active slip vector monitors</span>
                    </div>
                    <span className="font-bold">+$18,000</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Total Summary and Check out Integration */}
            <div className="border-t border-zinc-800 pt-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-500 uppercase">ESTIMATED TOTAL CONTEXT</span>
                <div className="text-right">
                  <span className="text-2xl font-mono font-extrabold text-[#22c55e] block">
                    {formatPrice(totalPrice)}
                  </span>
                  <span className="text-[9px] text-zinc-500 block">BASE: {vehicle.price}</span>
                </div>
              </div>

              <button
                onClick={handleApply}
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-green-500/10"
                id="apply_custom_spec_btn"
              >
                <span>APPLY CONFIG TO TEST DRIVE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[9px] text-zinc-600 block text-center mt-2 font-mono">
                SECURE WITH BESPOKE ASSIGNMENT. NON-BINDING RESERVATION CAPABLE.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
