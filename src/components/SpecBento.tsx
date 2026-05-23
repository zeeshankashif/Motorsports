import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Drill, Gauge, BatteryCharging, Wind } from 'lucide-react';

export default function SpecBento() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Counter states
  const [hp, setHp] = useState(0);
  const [accel, setAccel] = useState(4.0);
  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Window scroll event listener to scale the supercar container fluidly
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far into the viewport this section is
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const totalHeight = rect.height + viewportHeight;
        const currentScrolled = viewportHeight - rect.top;
        const progress = Math.min(Math.max(currentScrolled / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Supercar specs ticking counter animations when in viewport
  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds

    const animateCounters = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Interpolations
      setHp(Math.floor(progress * 1920));
      setSpeed(Math.floor(progress * 258));
      setBattery(Math.floor(progress * 120));
      setAccel(Number((4.0 - progress * (4.0 - 1.85)).toFixed(2)));

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    requestAnimationFrame(animateCounters);
  }, [isInView]);

  // Interpolated visual characteristics based on scroll
  const imageScale = 1.15 - scrollProgress * 0.25; // Scale from 1.15 down to 0.90
  const imageOpacity = Math.min(scrollProgress * 2.5, 1);

  return (
    <section
      ref={sectionRef}
      id="spec-sheet"
      className="relative min-h-screen bg-[#0d0d0c] px-6 py-24 md:px-12 md:py-32 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Absolute Decorative Background Vector */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Grid structure heading */}
      <div className="w-full max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono text-green-400 tracking-[0.3em] uppercase">
            SPECIFICATION ENGINE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white uppercase mt-2">
            ARCHITECTURAL BENTO
          </h2>
        </div>
        <p className="max-w-md text-xs md:text-sm text-zinc-400 font-mono tracking-wide leading-relaxed">
          Watch as the carbon supercar scales down fluidly into our modular matrix, releasing absolute telemetry benchmarks in real-time.
        </p>
      </div>

      {/* Main Grid: The Bento layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
        
        {/* LARGE SPAN CARD - The Supercar Scaling Cage */}
        <div className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-[#121211] border border-zinc-900/80 p-6 flex flex-col justify-between overflow-hidden relative shadow-2xl">
          <div className="absolute top-6 left-6 z-10">
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider">APEX ZERO // AERO POSITIONING</span>
            <h3 className="text-lg font-display text-white mt-1 uppercase font-bold tracking-wide">
              AERODYNAMIC MATRIX CONTROL
            </h3>
          </div>

          {/* Fully Interactive Fluid Visual Supercar scaling box */}
          <div className="absolute inset-0 flex items-center justify-center p-6 mt-12 bg-radial-gradient from-zinc-900/20 to-transparent">
            <div 
              className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
              style={{
                transform: `scale(${Math.max(0.85, Math.min(1.3, imageScale))})`,
                opacity: imageOpacity,
              }}
            >
              <img
                src="/images/hero_supercar_1779548492367.png"
                alt="Bento Scaled Supercar"
                className="w-[85%] md:w-[75%] object-contain drop-shadow-[0_20px_40px_rgba(34,197,94,0.1)] hover:rotate-2 transition-transform duration-700 rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Lower layout indicator */}
          <div className="z-10 flex justify-between items-center text-xs font-mono text-zinc-500 mt-auto">
            <span>SCROLL MATRIX INFLUENCE: {Math.round(scrollProgress * 100)}%</span>
            <span>CELL ACTIVE STATUS: LOCKED</span>
          </div>
        </div>

        {/* BENTO CARD 1: 0-60 MPH Acceleration */}
        <div className="rounded-3xl bg-[#121211] border border-zinc-900/80 p-6 flex flex-col justify-between hover:border-green-500/20 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-green-400 tracking-wider uppercase">LAUNCH BENCHMARK</span>
            <Gauge className="w-5 h-5 text-green-500 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <div className="text-5xl font-mono font-bold tracking-tighter text-white">
              {accel}s
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-2 uppercase tracking-wide">
              0 - 60 MPH ACCELERATION
            </p>
          </div>
          <div className="text-[10px] font-mono text-zinc-600">
            RAPID TORQUE DISTRIBUTION
          </div>
        </div>

        {/* BENTO CARD 2: HP Output */}
        <div className="rounded-3xl bg-[#121211] border border-zinc-900/80 p-6 flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300 relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-bl-full pointer-events-none" />
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase">PEAK PERFORMANCE</span>
            <Wind className="w-5 h-5 text-sky-400 group-hover:-translate-y-1 transition-transform" />
          </div>
          <div>
            <div className="text-5xl font-mono font-bold tracking-tighter text-white">
              {hp} HP
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-2 uppercase tracking-wide">
              QUAD-MOTOR COMBINED ENERGY
            </p>
          </div>
          <div className="text-[10px] font-mono text-zinc-600">
            SILICON MANGANESE ROTORS
          </div>
        </div>

        {/* BENTO CARD 3: Battery capacity */}
        <div className="col-span-1 rounded-3xl bg-[#121211] border border-zinc-900/80 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-all duration-300 relative group overflow-hidden">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">ENERGY CELL</span>
            <BatteryCharging className="w-5 h-5 text-zinc-500" />
          </div>
          <div>
            <div className="text-5xl font-mono font-bold tracking-tighter text-white">
              {battery} kWh
            </div>
            <p className="text-xs text-zinc-400 font-mono mt-2 uppercase tracking-wide">
              LI-ION STRUCTURAL SHELL
            </p>
          </div>
          <div className="text-[10px] font-mono text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>COOLANT OPTIMIZED</span>
          </div>
        </div>

        {/* BENTO CARD 4: TOP SPEED */}
        <div className="col-span-1 md:col-span-2 rounded-3xl bg-linear-to-r from-[#121211] to-[#1a1a19] border border-zinc-900/80 p-6 flex flex-col justify-between hover:border-green-400/20 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-full bg-green-500/5 rotate-12 filter blur-3xl pointer-events-none" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-green-400 tracking-wider uppercase">V-MAX TELEMETRY</span>
            <span className="text-[10px] font-mono text-zinc-600">LATENCY: LOW</span>
          </div>

          <div className="z-10 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="text-6xl font-mono font-bold tracking-tighter text-white">
                {speed} <span className="text-xl text-green-400 font-sans">MPH</span>
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-1 uppercase tracking-widest">
                CERTIFIED V-MAX LIMITER CAP
              </p>
            </div>
            <p className="text-zinc-500 font-sans text-xs max-w-sm mt-3 md:mt-0 leading-relaxed">
              Electronically modulated active cooling and carbon-shrouded rotors maintain stability past terminal velocities.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
