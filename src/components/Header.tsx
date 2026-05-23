import { useState, useEffect } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header_nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-5 ${
        scrolled
          ? 'bg-[#0d0d0c]/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 group"
          id="brand_logo"
        >
          <div className="w-8 h-8 rounded-full border border-green-500/30 flex items-center justify-center bg-black/50 overflow-hidden relative group-hover:border-green-400/60 transition-colors duration-300">
            <span className="text-[10px] font-mono text-green-400 group-hover:scale-110 transition-transform duration-300">⚡</span>
          </div>
          <span className="font-display font-bold tracking-[0.25em] text-sm text-white group-hover:text-green-400 transition-colors duration-300">
            ZEXAN
          </span>
        </div>

        {/* Minimal Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8"
            id="nav_btn_hero"
          >
            01 / APEX ZERO
          </button>
          <button
            onClick={() => scrollToSection('spec-sheet')}
            className="hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8"
            id="nav_btn_specs"
          >
            02 / SPECS
          </button>
          <button
            onClick={() => scrollToSection('inventory')}
            className="hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8"
            id="nav_btn_inventory"
          >
            03 / INVENTORY
          </button>
          <button
            onClick={() => scrollToSection('booking')}
            className="hover:text-white transition-colors duration-300 hover:underline hover:underline-offset-8"
            id="nav_btn_booking"
          >
            04 / EXPERIENCE
          </button>
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('booking')}
          className="group relative px-5 py-2 overflow-hidden rounded-full bg-white text-black text-xs font-mono font-semibold tracking-wider transition-all duration-300 hover:bg-green-400 flex items-center gap-2 shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-pointer"
          id="cta_book_now"
        >
          <span>BOOK AN EXPERIENCE</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </header>
  );
}
