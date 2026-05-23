import { useState } from 'react';
import Header from './components/Header';
import HeroSpotlight from './components/HeroSpotlight';
import SpecBento from './components/SpecBento';
import InventoryGrid from './components/InventoryGrid';
import VehicleModal from './components/VehicleModal';
import TestDrivePortal from './components/TestDrivePortal';
import { Vehicle } from './types';
import { ShieldCheck, Mail, Pin, HelpCircle } from 'lucide-react';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [customSpec, setCustomSpec] = useState<string>('');

  const handleApplyToBooking = (specSummary: string) => {
    // Save selected specifications to state
    setCustomSpec(specSummary);
    // Close the visual studio modal
    setSelectedVehicle(null);
    // Smooth scroll down to the test drive portal
    const element = document.getElementById('booking');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0c] text-white selection:bg-green-500 selection:text-black antialiased overflow-x-hidden">
      {/* 1. Header & Minimal Navbar */}
      <Header />

      {/* 2. Hero Section: Dark spotlight with cursor vector illumination */}
      <HeroSpotlight />

      {/* 3. Specs Section: Bento blocks with upward ticking counters */}
      <SpecBento />

      {/* 4. Active Inventory Grid with category classification morphs */}
      <InventoryGrid onSelectVehicle={(v) => setSelectedVehicle(v)} />

      {/* 5. Fluid configuration details modal */}
      {selectedVehicle && (
        <VehicleModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onApplyToBooking={handleApplyToBooking}
        />
      )}

      {/* 6. Contact and Booking Portal with magnetic Pilot submit */}
      <TestDrivePortal customSpec={customSpec} />

      {/* 7. Footer: Minimal luxury signature layout */}
      <footer className="bg-black text-zinc-500 py-16 px-6 md:px-12 border-t border-zinc-900 font-mono text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo brand & licensing */}
          <div className="space-y-4">
            <span className="font-display font-bold text-white tracking-[0.2em] text-sm block">
              ZEXAN MOTORSPORTS
            </span>
            <p className="text-zinc-600 font-sans leading-relaxed max-w-sm">
              An award-winning luxury creative technology concept representing the future of raw electric kinetic engineering, active slip vector controllers, and carbon designs.
            </p>
            <span className="block text-[10px] text-zinc-700">
              © 2026 ZEXAN MOTORSPORTS AG. ALL RESERVATIONS PROTECTED.
            </span>
          </div>

          {/* Logistics & Locations */}
          <div>
            <span className="text-white block font-bold mb-4 uppercase tracking-wider text-[10px]">
              CORPORATE LOGISTICS
            </span>
            <ul className="space-y-2 text-zinc-500">
              <li>MONTEREY LAB: 121 Edge-Way Drive, Monterey CA</li>
              <li>STUTTGART HEAD ASSEMBLY: Am Kessel 45, Germany</li>
              <li>TOKYO R&D ATELIER: Shinagawa Heights 12B, Tokyo</li>
            </ul>
          </div>

          {/* Quick legal guidelines */}
          <div>
            <span className="text-white block font-bold mb-4 uppercase tracking-wider text-[10px]">
              LEGAL CODES
            </span>
            <ul className="space-y-2 text-zinc-650">
              <li>RESERVATION COMPLIANCE 902.1B</li>
              <li>CARBON FIBER LIFE RATING CERTIFICATE</li>
              <li>ACTIVE AIR VECTOR REGULATIONS</li>
              <li>PRIVACY SCHEMES POLICY</li>
            </ul>
          </div>

          {/* Secure channels */}
          <div className="space-y-4">
            <span className="text-white block font-bold uppercase tracking-wider text-[10px]">
              HIGH-FREQUENCY ENCRYPTION
            </span>
            <p className="text-zinc-650 font-sans">
              Enter secure pilot channels for direct allocations or high-speed track testing bookings.
            </p>
            <div className="flex items-center gap-2 text-zinc-400">
              <Mail className="w-4 h-4 text-green-500" />
              <span>concierge@zexanmotorsports.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
