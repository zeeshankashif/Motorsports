import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowDown, Zap, HelpCircle } from 'lucide-react';

export default function HeroSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Spotlight tracking coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [initialized, setInitialized] = useState(false);

  // Spring animations for background text parallax
  const mxRef = useMotionValue(0);
  const myRef = useMotionValue(0);
  const springX = useSpring(mxRef, { stiffness: 40, damping: 15 });
  const springY = useSpring(myRef, { stiffness: 40, damping: 15 });

  useEffect(() => {
    // Initial coords (centered)
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: rect.width / 2,
        y: rect.height / 2,
      });
      setInitialized(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Parallax values for kinetic typography
    const px = (e.clientX - (rect.left + rect.width / 2)) / 30;
    const py = (e.clientY - (rect.top + rect.height / 2)) / 30;
    mxRef.set(px);
    myRef.set(py);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly drift hotspot back to center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
    mxRef.set(0);
    myRef.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleScrollClick = () => {
    const nextSection = document.getElementById('spec-sheet');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mask string for Webkit and standard mask image
  const maskStyle = initialized
    ? `radial-gradient(circle 250px at ${coords.x}px ${coords.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
    : 'radial-gradient(circle 250px at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)';

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between items-center overflow-hidden pt-24 pb-12 cursor-none select-none"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-transparent to-black pointer-events-none z-10" />

      {/* Abstract Grid Gridline Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Kinetic Interactive Background Typography */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="text-[14vw] md:text-[18vw] font-display font-extrabold tracking-[0.08em] select-none text-zinc-900/15 leading-none transition-all duration-300">
          MACH 1
        </h1>
      </motion.div>

      {/* Hero Header overlay info */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center mt-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[10px] font-mono tracking-widest uppercase mb-4"
        >
          <Zap className="w-3 h-3 text-green-400 animate-pulse" />
          <span>The Sovereign Electric Series</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight text-white uppercase"
        >
          VELOCITY <span className="text-zinc-500">APEX</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 text-xs sm:text-sm text-zinc-400 font-mono tracking-[0.2em] uppercase max-w-xl"
        >
          An engineering genesis. 1920 Horsepower. 0-60 in 1.85 seconds.
        </motion.p>
      </div>

      {/* Center Image Module with dual container spotlight action */}
      <div className="relative w-full max-w-4xl h-[45vh] md:h-[50vh] flex items-center justify-center px-4 z-20">
        {/* Spotlight Circle Visual Indicator */}
        {initialized && (
          <div
            className="absolute rounded-full border border-green-500/10 pointer-events-none mix-blend-screen transition-opacity duration-300 z-30"
            style={{
              left: `${coords.x}px`,
              top: `${coords.y}px`,
              width: '260px',
              height: '260px',
              transform: 'translate(-50%, -50%)',
              opacity: isHovered ? 0.35 : 0.05,
              background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 80%)',
            }}
          />
        )}

        {/* Layer 1: Shadows Base - Dark car overlay (Subtle ambient lines) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 saturate-50 blur-[1px]">
          <img
            src="/src/assets/images/hero_supercar_1779548492367.png"
            alt="Base Shadow"
            className="w-full max-w-3xl object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Layer 2: Fully Illuminated car overlay - Masked by current cursor coords */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none"
          style={{
            WebkitMaskImage: maskStyle,
            maskImage: maskStyle,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        >
          <img
            src="/src/assets/images/hero_supercar_1779548492367.png"
            alt="Spotlight Surface"
            className="w-full max-w-3xl object-contain drop-shadow-[0_25px_60px_rgba(34,197,94,0.15)]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Footer Meta Details / Interactive Controls */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center border-t border-zinc-900/40 pt-6 z-20 text-xs text-zinc-500 font-mono tracking-wider gap-4">
        <div className="flex items-center gap-4">
          <span>COORDINATES: {Math.round(coords.x)}, {Math.round(coords.y)}</span>
          <span className="hidden sm:inline text-zinc-800">|</span>
          <span className="text-zinc-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            ACTIVE SPOTLIGHT OVERLAY
          </span>
        </div>

        <div className="text-zinc-400 hidden lg:block text-center max-w-sm border border-zinc-800/80 px-4 py-2 bg-black/60 rounded-md">
          Move your cursor over the supercar above to cast the precision studio spotlight.
        </div>

        <button
          onClick={handleScrollClick}
          className="flex items-center gap-2 group text-zinc-400 hover:text-green-400 transition-colors duration-300"
        >
          <span>EXPLORE PERFORMANCE</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-green-400" />
        </button>
      </div>
    </section>
  );
}
