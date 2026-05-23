import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, Phone, Compass, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';

interface TestDrivePortalProps {
  customSpec: string;
}

export default function TestDrivePortal({ customSpec }: TestDrivePortalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('VIP Apex Track Drive');
  const [notes, setNotes] = useState('');
  const [reservationDate, setReservationDate] = useState('2026-06-15');
  const [submitted, setSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Auto-update notes field when customSpec is passed or updated
  useEffect(() => {
    if (customSpec) {
      setNotes(`Applied Config Specifications:\n${customSpec}`);
    }
  }, [customSpec]);

  // Magnetic Button Logic
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;

      // Distance from mouse to button center
      const distanceX = e.clientX - btnX;
      const distanceY = e.clientY - btnY;
      const distance = Math.hypot(distanceX, distanceY);

      const threshold = 90; // Active sticky zone

      if (distance < threshold) {
        setIsMagnetic(true);
        // Translate button towards mouse using a spring damping effect
        // Sucks directly, but slightly dampened
        const translateX = distanceX * 0.45;
        const translateY = distanceY * 0.45;
        setTransform({ x: translateX, y: translateY });
      } else {
        setIsMagnetic(false);
        setTransform({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    return () => window.removeEventListener('mousemove', handlePointerMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      return alert("Please fill in Name and Corporate Email fields.");
    }

    // Generate random booking order identifier
    const randCode = 'VEL-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randCode);
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setSubmitted(false);
  };

  return (
    <section
      id="booking"
      className="bg-[#050505] text-white py-24 px-6 md:px-12 md:py-32 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto text-center mb-16 relative z-10">
        <span className="text-xs font-mono text-green-400 tracking-[0.3em] uppercase">
          04 / PILOT RECONNAISSANCE
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white uppercase mt-2">
          BOOK AN OMNI EXPERIENCE
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-sm text-zinc-500 font-mono tracking-wide leading-relaxed mt-4">
          Reserve your slots on our carbon circuits. Let your spec choice come active in high-resolution real hardware.
        </p>
      </div>

      <div className="w-full max-w-4xl bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 md:p-12 shadow-2xl relative z-10" ref={containerRef}>
        
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="booking-form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Alert custom spec connected */}
              {customSpec && (
                <div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5 flex items-center justify-between gap-3 text-xs font-mono text-green-400">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-green-400 shrink-0" />
                    <span>Applied Spec detected! Ready to compile and submit.</span>
                  </div>
                  <span className="text-[10px] py-0.5 px-2 bg-green-500/10 text-green-400 rounded-md">
                    CUSTOM SPEC INCLUDED
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Field 1: Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-600" />
                    <span>01 / PILOT FULL NAME *</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all placeholder-zinc-700"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-zinc-600" />
                    <span>02 / CORPORATE EMAIL ADDRESS *</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all placeholder-zinc-700"
                  />
                </div>

                {/* Field 3: Phone */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-zinc-600" />
                    <span>03 / DIRECT SECURE CONTACT PHONE</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 012-3456"
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all placeholder-zinc-700"
                  />
                </div>

                {/* Field 4: Target Reservation Date */}
                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    <span>04 / TARGET ESCORT DATE</span>
                  </label>
                  <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all text-zinc-400"
                  />
                </div>

                {/* Field 5: Experience */}
                <div className="col-span-1 md:col-span-2 flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-zinc-600" />
                    <span>05 / FLIGHT PROFILE RATING</span>
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all text-zinc-400"
                  >
                    <option value="VIP Apex Track Drive">VIP APEX TRACK EXPERIENCE (QUAD-MOTOR MAX OUTFLIGHT)</option>
                    <option value="Corporate Concierge Tour">SUPERVISED CONTINENTAL TOURING</option>
                    <option value="Zero G Grand Tour">URBAN STRUCTURAL DEMONSTRATION</option>
                  </select>
                </div>

                {/* Field 6: Notes */}
                <div className="col-span-1 md:col-span-2 flex flex-col space-y-2">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-600" />
                    <span>06 / PHYSICAL SPECIFICATIONS CONFIG SUMMARY</span>
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Paste or enter custom telemetry expectations, custom paint lists, or wheel options..."
                    className="w-full bg-black border border-zinc-800 focus:border-green-500/50 rounded-xl px-4 py-3.5 font-mono text-xs text-white focus:outline-none focus:ring-1 focus:ring-green-500/20 transition-all placeholder-zinc-700"
                  />
                </div>
              </div>

              {/* Massive Magnetic Circle Button Container */}
              <div className="pt-8 flex justify-center items-center h-[200px] relative">
                <button
                  type="submit"
                  ref={buttonRef}
                  id="magnetic_submit_btn"
                  className="rounded-full flex flex-col items-center justify-center font-display font-black text-center text-black bg-white select-none relative uppercase cursor-pointer transition-shadow"
                  style={{
                    width: '150px',
                    height: '150px',
                    transform: `translate(${transform.x}px, ${transform.y}px)`,
                    // Use standard CSS transition for absolute buttery physics when resetting, but disable when active for zero lag
                    transition: isMagnetic ? 'none' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s',
                    boxShadow: isMagnetic
                      ? '0 10px 40px rgba(34,197,94,0.3), inset 0 0 10px rgba(34,197,94,0.1)'
                      : '0 4px 15px rgba(255,255,255,0.05)',
                    border: isMagnetic ? '1px solid #22c55e' : '1px solid transparent',
                  }}
                >
                  <span className="text-[11px] font-mono font-bold tracking-widest leading-none block mb-1">
                    SUBMIT
                  </span>
                  <span className="text-xl leading-none">
                    PILOT
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest leading-none block mt-1">
                    BESPOKE
                  </span>
                  
                  {isMagnetic && (
                    <motion.div
                      layoutId="magneticCircleRing"
                      className="absolute -inset-2.5 rounded-full border border-green-400"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-20 h-20 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>

              <div>
                <span className="text-[10px] font-mono text-green-400 tracking-wider uppercase block">
                  EXPERIENCE RESERVATION INITIATED
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-1 uppercase">
                  PILOT LOGGED SECURELY
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-2 uppercase">
                  CONFIRMATION CODE: <span className="text-white font-bold">{bookingCode}</span>
                </p>
              </div>

              <div className="max-w-md mx-auto text-xs font-sans text-zinc-500 leading-relaxed bg-[#0c0c0b] border border-zinc-900 p-6 rounded-2xl">
                <p className="font-semibold text-zinc-300">Hello {name},</p>
                <p className="mt-2 text-zinc-400">
                  Your customized <span className="text-green-400">Velocity {experience}</span> on <span className="text-zinc-300">{reservationDate}</span> is cataloged. A secure private key has been dispatched to <span className="text-zinc-300">{email}</span> containing credentials for the high-frequency circuit gates.
                </p>
              </div>

              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-zinc-900 hover:bg-zinc-850 rounded-full border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white transition-all cursor-pointer"
                id="reset_booking_form_btn"
              >
                BOOK ANOTHER EXPERIENCE
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
