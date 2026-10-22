"use client";

import React, { useState, useEffect } from "react";

/* =====================================================================
   CUSTOM HAND-DRAWN MARKER ICONS
===================================================================== */
const MarkerMail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 6.5 L21.5 5.5 L20.5 19.5 L3.5 18.5 Z" />
    <path d="M2.5 6.5 L12 14.5 L21.5 5.5" />
  </svg>
);

const MarkerFolder = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 7.5 L9.5 6.5 L12.5 9.5 L21.5 8.5 L20.5 20.5 L3.5 19.5 Z" />
    <path d="M2.5 11.5 L22.5 10.5" />
  </svg>
);

const MarkerBriefcase = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3.5 8.5 L20.5 7.5 L19.5 20.5 L2.5 19.5 Z" />
    <path d="M8.5 8.5 L8.5 4.5 L16.5 3.5 L15.5 7.5" />
    <path d="M3.5 13.5 L21.5 12.5" />
  </svg>
);

const MarkerGraph = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3.5 20.5 L21.5 19.5" />
    <path d="M5.5 19.5 L5.5 13.5 L9.5 13 L9.5 19.5" fill="currentColor" />
    <path d="M11.5 19.5 L11.5 8.5 L15.5 8 L15.5 19.5" fill="currentColor" />
    <path d="M17.5 19.5 L17.5 4.5 L21.5 4 L21.5 19.5" fill="currentColor" />
    <path d="M2.5 12.5 L10.5 6.5 L13.5 9.5 L19.5 2.5" />
    <path d="M16.5 2.5 L19.5 2.5 L19.5 6.5" />
  </svg>
);

const MarkerCheckmark = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3.5 13.5 L9.5 19.5 L21.5 5.5" />
  </svg>
);

const MarkerCalendar = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3.5 6.5 L21.5 5.5 L20.5 21.5 L2.5 20.5 Z" />
    <path d="M3.5 11.5 L21.5 10.5" />
    <path d="M7.5 6.5 L7.5 2.5 M17.5 5.5 L17.5 1.5" />
    <rect x="6.5" y="14.5" width="3" height="3" fill="currentColor" stroke="none" />
    <rect x="11.5" y="14.5" width="3" height="3" fill="currentColor" stroke="none" />
    <rect x="16.5" y="14.5" width="3" height="3" fill="currentColor" stroke="none" />
  </svg>
);

const MarkerCap = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 10.5 L12.5 4.5 L22.5 9.5 L12.5 15.5 Z" />
    <path d="M6.5 13.5 L6.5 18.5 C6.5 20.5, 18.5 20.5, 18.5 17.5 L18.5 12.5" />
    <path d="M22.5 9.5 L21.5 17.5" />
  </svg>
);

const MarkerStar = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2.5 L15 9.5 L22.5 9.5 L16.5 14.5 L18.5 21.5 L12 17.5 L5.5 21.5 L7.5 14.5 L1.5 9.5 L9 9.5 Z" />
  </svg>
);

export default function Home() {
  // Modal & Verification State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    videos.forEach((v) => {
      v.play().catch((err) => console.log("Autoplay waiting for user interaction:", err));
    });
  }, []);

  // Handlers for Modal
  const openVerificationModal = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setCaptchaAnswer("");
    setCaptchaError(false);
    setIsModalOpen(true);
  };

  const closeVerificationModal = () => {
    setIsModalOpen(false);
  };

  const handleVerify = () => {
    if (parseInt(captchaAnswer) === num1 + num2) {
      window.open("YOUR_GOOGLE_DRIVE_LINK_HERE", "_blank");
      setIsModalOpen(false);
    } else {
      setCaptchaError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#14230a] text-slate-100 selection:bg-[#3C6B1F] selection:text-white overflow-x-hidden font-sans sm:rounded-3xl relative">
      
      {/* Hand-drawn marker SVG filter to create the doodle aesthetic */}
      <svg className="w-0 h-0 absolute pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="doodle" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* =====================================================================
          HUMAN VERIFICATION MODAL
      ===================================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-[#14230a] border border-[#3C6B1F] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-slate-100">
            <h3 className="font-black text-xl sm:text-2xl uppercase tracking-wider text-emerald-300 mb-4">
              Human Verification Required
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light mb-6 tracking-wide">
              Please solve this simple math problem to access the project portfolio.
            </p>
            <div className="mb-6">
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-400 mb-2">
                What is {num1} + {num2}?
              </label>
              <input
                type="number"
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
                className="w-full bg-[#1b2f0e] border border-[#3C6B1F] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                placeholder="Enter your answer"
                autoFocus
              />
              {captchaError && (
                <p className="text-red-400 text-[10px] sm:text-xs mt-2 uppercase tracking-wider font-semibold">
                  Incorrect answer. Please try again.
                </p>
              )}
            </div>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={closeVerificationModal}
                className="flex-1 px-3 sm:px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleVerify}
                className="flex-1 px-3 sm:px-5 py-3 rounded-xl bg-[#3C6B1F] hover:bg-[#2d5217] text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-colors border border-emerald-500/30"
              >
                Verify & Open
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          STICKY TOP BAR 
      ===================================================================== */}
      <header className="sticky top-0 z-50 bg-[#14230a]/95 backdrop-blur-md border-b border-[#3C6B1F]/40 shadow-sm rounded-b-2xl sm:rounded-b-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#profile" className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#3C6B1F] text-white font-bold text-sm sm:text-lg flex items-center justify-center tracking-tighter shadow-md shrink-0">
              MO
            </div>
            <div className="hidden sm:block">
              <span className="font-black text-white text-base tracking-widest block uppercase leading-none">
                Maurice Okeyo
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                Junior Energy Engineer
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-slate-200">
            <a href="#introduction" className="hover:text-emerald-400 transition-colors">Introduction</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Work Experience</a>
            <a href="#responsibilities" className="hover:text-emerald-400 transition-colors">Responsibilities</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#problem-solving" className="hover:text-emerald-400 transition-colors">Problem Solving</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Technical Skills</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={openVerificationModal}
              className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#3C6B1F] hover:bg-[#2d5217] text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md border border-emerald-500/30"
            >
              <MarkerFolder size={16} className="-rotate-3" />
              <span>View Portfolio</span>
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          SLIDE 1: PROFESSIONAL CAREER PROFILE 
      ===================================================================== */}
      <section
        id="profile"
        className="relative min-h-[550px] sm:min-h-[650px] overflow-hidden border-b-8 border-[#14230a] shadow-sm flex items-center bg-slate-950 text-white rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8"
      >
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
          <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover scale-105 opacity-80 rounded-3xl">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/90 via-[#14230a]/70 to-transparent rounded-3xl" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center text-center sm:text-left">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
                Junior Energy Engineer • Professional Portfolio
              </p>
              <h1 className="font-black text-4xl sm:text-7xl uppercase tracking-tighter leading-[0.95]">
                <span className="text-emerald-300 block">Professional</span>
                <span className="text-white block mt-1 sm:mt-2">Career Profile</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-200 font-light tracking-wide leading-relaxed max-w-lg mx-auto sm:mx-0">
                Engineering Solutions for Modern Industry &amp; Building Efficiency
              </p>
            </div>

            <div className="pt-2">
              <div className="inline-block rounded-2xl bg-[#3C6B1F] text-white px-6 sm:px-8 py-3 sm:py-3.5 shadow-xl border border-emerald-500/30">
                <span className="font-black text-xl sm:text-3xl tracking-widest uppercase">
                  Maurice Okeyo
                </span>
              </div>
              <p className="mt-2 sm:mt-3 text-xs sm:text-base font-bold uppercase tracking-widest text-emerald-300">
                Junior Energy Engineer | Geospatial Engineer
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-col items-center sm:items-start gap-4">
              <a href="mailto:okeyootieno@outlook.com" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-[#3C6B1F] text-white flex items-center justify-center shadow-sm">
                  <MarkerMail size={18} className="rotate-2" />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide">okeyootieno@outlook.com</span>
              </a>
              <a href="mailto:motieno@kawikenya.com" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-sm border border-slate-600">
                  <MarkerBriefcase size={18} className="-rotate-2" />
                </span>
                <span className="text-xs sm:text-sm font-medium tracking-wide">motieno@kawikenya.com</span>
              </a>
              
              {/* ABSTRACT CORP. LOGO & COMING SOON HOVER */}
              <div className="flex items-center gap-3 sm:gap-4 text-slate-200 transition-colors group cursor-default mt-2">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#3C6B1F]/30 opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  <img src="/company-logo.png" alt="Abstract Corp Logo" className="relative w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  <span className="inline-block group-hover:hidden transition-all duration-300">ABSTRACT CORP.</span>
                  <span className="hidden group-hover:inline-block text-emerald-400 italic font-bold tracking-widest drop-shadow-md transition-all duration-300">Coming soon...</span>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 sm:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-md h-[350px] sm:h-[520px] overflow-hidden group">
              <div className="absolute inset-0 bg-[#3C6B1F]/10 blur-3xl rounded-full" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img src="/IMG-20250417-WA0064_2.jpg" alt="Maurice Okeyo" className="w-full h-full object-cover object-top opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14230a] via-[#14230a]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#14230a]/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#14230a]/40 via-transparent to-[#14230a]/40" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 2: A BRIEF INTRODUCTION
      ===================================================================== */}
      <section
        id="introduction"
        className="relative bg-[#182a0e] text-slate-100 overflow-hidden border-b-8 border-[#14230a] py-14 sm:py-20 scroll-mt-20 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm border border-[#3C6B1F]/30"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center relative z-20">
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center sm:text-left">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
                The Beginning &amp; Journey
              </p>
              <h2 className="font-black text-3xl sm:text-6xl uppercase tracking-tighter leading-[0.95]">
                <span className="text-emerald-300 block">A Brief</span>
                <span className="text-white block mt-1">Introduction</span>
              </h2>
            </div>

            <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed text-left sm:text-justify tracking-wide">
              &ldquo;Innovative Energy &amp; Geospatial Engineer dedicated to optimizing building performance through comprehensive energy auditing and precise M&amp;V protocols. Adept at translating complex spatial and thermal datasets into actionable conservation strategies, utilizing advanced modeling tools alongside AI and machine learning to drive sustainable, cost-effective engineering solutions.&rdquo;
            </p>

            <div className="inline-block rounded-xl sm:rounded-2xl bg-slate-900 text-white px-5 sm:px-6 py-2 shadow border border-[#3C6B1F]">
              <span className="font-bold text-xs sm:text-lg tracking-widest uppercase text-emerald-300">
                As Energy &amp; Geospatial Engineer
              </span>
            </div>

            <ul className="space-y-3 sm:space-y-4 text-slate-200 text-xs sm:text-base tracking-wide pl-5 text-left list-disc marker:text-emerald-400 font-light">
              <li>Analytical engineer with strong problem-solving skills in building energy simulation (DesignBuilder, EnergyPlus) and M&amp;V inspection protocols.</li>
              <li>Experienced in multi-family and commercial energy efficiency projects, ASHRAE Level II audits, EPRA Investment Grade Audits (IGA), and GIS spatial modeling.</li>
              <li>Adaptable, detail-oriented, and innovation-driven—actively exploring AI, Machine Learning, and Blockchain/Cryptography applications.</li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative flex items-center justify-center mt-4 sm:mt-0">
            <div className="w-full h-[250px] sm:h-[420px] rounded-3xl bg-slate-900 overflow-hidden shadow-xl border-4 border-[#3C6B1F]/50 relative">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-3xl opacity-80">
                <source src="/skills-bg.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] rounded-3xl" />
              <div className="absolute inset-0 bg-[#3C6B1F]/20 rounded-3xl" />
            </div>

            <div className="hidden sm:flex absolute -left-6 w-52 h-52 rounded-full border-4 border-[#3C6B1F] shadow-2xl overflow-hidden bg-[#14230a] items-center justify-center">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" alt="Energy & Spatial Engineering" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 3: WORK EXPERIENCE 
      ===================================================================== */}
      <section
        id="experience"
        className="relative bg-slate-950 text-white overflow-hidden border-b-8 border-[#14230a] py-14 sm:py-20 scroll-mt-20 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm"
      >
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
          <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover scale-105 opacity-55 rounded-3xl">
            <source src="/technical-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950 via-[#14230a]/80 to-slate-950/40 rounded-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center relative z-20">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
                Professional Background
              </p>
              <h2 className="font-black text-3xl sm:text-6xl uppercase tracking-tighter leading-[0.95]">
                <span className="text-emerald-300 block">Career</span>
                <span className="text-white block mt-1">Experience</span>
              </h2>
            </div>

            <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed max-w-2xl tracking-wide text-left sm:text-left">
              Delivering energy efficiency solutions for residential, multi-family, and
              industrial buildings alongside precision cadastral and topographical geospatial
              surveys.
            </p>

            <div className="space-y-4 sm:space-y-5 pt-2 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-12 rounded-3xl bg-[#1b2f0e]/90 backdrop-blur-sm text-white shadow-xl overflow-hidden border border-[#3C6B1F]/60">
                <div className="sm:col-span-4 h-[140px] sm:min-h-[160px] bg-slate-900 relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Kawi Kenya Energy Engineering" className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-8 p-5 sm:p-6 space-y-2 flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg text-white uppercase tracking-wide">
                    Junior Energy Engineer — Kawi Kenya Ltd
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-200 font-light leading-relaxed tracking-wide">
                    Engineered data pipelines for processing utility interval data and field parameters, conducting systematic M&amp;V inspections to ensure compliance with stringent Con Edison (NY) incentive program requirements. Executed thermodynamic load analyses and HVAC baseline calculations utilizing DesignBuilder, directly supporting the delivery of robust EPRA Investment Grade and ASHRAE Level II audit reports for commercial properties like Vasudev Heights.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 rounded-3xl bg-[#1b2f0e]/90 backdrop-blur-sm text-white shadow-xl overflow-hidden border border-[#3C6B1F]/60">
                <div className="sm:col-span-4 h-[140px] sm:min-h-[160px] bg-slate-900 relative">
                  <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Geospatial Surveying" className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-8 p-5 sm:p-6 space-y-2 flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg text-white uppercase tracking-wide">
                    Assistant Land Surveyor — Opiyo Land Surveyors&apos; Ltd
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-200 font-light leading-relaxed tracking-wide">
                    Conducted high-precision cadastral, topographical, and sectional property surveys, ensuring strict compliance with regional spatial standards. Engineered robust data visualization workflows utilizing AutoCAD and ArcGIS to translate complex geospatial and topographical datasets into actionable mapping models.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hidden sm:block">
            <div className="h-[440px] rounded-3xl border-4 border-[#3C6B1F]/50 shadow-2xl overflow-hidden bg-slate-900 relative">
              <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80" alt="Engineering Field Inspection" className="w-full h-full object-cover rounded-3xl" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#14230a] to-transparent p-6 text-white rounded-b-3xl">
                <p className="font-bold text-base uppercase tracking-wide">ASHRAE Level II &amp; EPRA IGA Auditing</p>
                <p className="text-xs text-emerald-300 tracking-widest font-semibold uppercase mt-1">Pre- &amp; Post-Inspection Verification • Building Simulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 4: KEY RESPONSIBILITIES
      ===================================================================== */}
      <section
        id="responsibilities"
        className="relative bg-slate-950 text-white py-14 sm:py-20 border-b-8 border-[#14230a] scroll-mt-20 overflow-hidden rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm"
      >
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
          <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover scale-105 opacity-40 rounded-3xl">
            <source src="/technical-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] rounded-3xl" />
          <div className="absolute inset-0 bg-[#14230a]/80 rounded-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-20">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
              Core Capabilities
            </p>
            <h2 className="font-black text-3xl sm:text-6xl uppercase tracking-tighter">
              Key <span className="text-emerald-300">Responsibilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              {
                title: "Energy Modeling & Simulation",
                subtitle: "DesignBuilder, EnergyPlus & HVAC load analysis",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
                Icon: MarkerGraph,
              },
              {
                title: "Project Coordination",
                subtitle: "ASHRAE Level II & EPRA IGA multi-building audits",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
                Icon: MarkerBriefcase,
              },
              {
                title: "M&V & Inspections",
                subtitle: "Con Edison NY pre- and post-inspection verification",
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
                Icon: MarkerCheckmark,
              },
              {
                title: "Geospatial & Data Reporting",
                subtitle: "ArcGIS, AutoCAD & Excel quantitative visualization",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
                Icon: MarkerCalendar,
              },
            ].map(({ title, subtitle, img, Icon }) => (
              <div key={title} className="flex flex-col rounded-3xl shadow-xl border border-[#3C6B1F]/40 bg-slate-900 overflow-hidden group">
                <div className="h-40 sm:h-48 w-full overflow-hidden bg-slate-950 relative rounded-t-3xl">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-3xl" />
                </div>
                <div className="relative bg-[#1b2f0e]/90 backdrop-blur-sm text-white pt-10 sm:pt-12 pb-6 sm:pb-8 px-5 text-center flex-1 flex flex-col justify-between rounded-b-3xl border-t border-[#3C6B1F]/40">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#14230a] border-4 border-[#3C6B1F] text-emerald-300 flex items-center justify-center mx-auto -mt-16 sm:-mt-20 shadow-lg">
                    <Icon size={28} className="rotate-3 sm:w-8 sm:h-8" />
                  </div>
                  <div className="space-y-2 mt-2 sm:mt-2">
                    <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide leading-snug">{title}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 font-light leading-relaxed tracking-wide">{subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 5: HIGHLIGHTED PROJECTS
      ===================================================================== */}
      <section
        id="projects"
        className="bg-[#182a0e] text-slate-100 border-b-8 border-[#14230a] py-14 sm:py-20 scroll-mt-20 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm border border-[#3C6B1F]/30"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-3xl overflow-hidden border border-[#3C6B1F]/40">
            <div className="lg:col-span-4 flex flex-col rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
              <div className="bg-[#3C6B1F] text-white p-8 sm:p-12 text-center sm:text-left">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-200 mb-2">
                  Portfolio Works
                </p>
                <h2 className="font-black text-3xl sm:text-5xl uppercase tracking-tighter leading-tight">
                  Highlighted
                  <br className="hidden sm:block" /> Projects
                </h2>
                <p className="text-[10px] sm:text-xs text-emerald-200 uppercase tracking-widest mt-2 sm:mt-4 font-semibold">
                  Energy Audits • M&amp;V • Urban GIS
                </p>
              </div>
              <div className="flex-1 min-h-[200px] sm:min-h-[320px] bg-[#14230a] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80" alt="Building Energy Audit Fieldwork" className="w-full h-full object-cover opacity-90" />
              </div>
            </div>

            <div className="lg:col-span-8 bg-[#14230a] p-6 sm:p-12 flex flex-col justify-between space-y-8 sm:space-y-10 rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="md:col-span-6 space-y-2 text-center sm:text-left">
                  <p className="text-sm sm:text-xl text-slate-200 font-light leading-relaxed tracking-wide">
                    &ldquo;Building Energy Optimization &amp; Field Validation: Conducted rigorous investment-grade and ASHRAE Level II audits, utilizing heat transfer principles and psychrometric analysis to identify and model critical HVAC and baseload energy conservation measures (ECMs).&rdquo;
                  </p>
                </div>

                <div className="md:col-span-6 flex flex-col items-center">
                  <div className="relative w-48 h-24 sm:w-64 sm:h-36 flex items-end justify-center">
                    <svg viewBox="0 0 200 110" className="w-full h-full overflow-visible">
                      <path d="M 20 95 A 80 80 0 0 1 180 95" fill="none" stroke="#2d5217" strokeWidth="26" strokeLinecap="round" />
                      <path d="M 20 95 A 80 80 0 0 1 55 32" fill="none" stroke="#3C6B1F" strokeWidth="26" strokeLinecap="round" />
                    </svg>
                    <span className="absolute bottom-1 font-black text-3xl sm:text-4xl tracking-tighter text-white">
                      5+ Audits
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300 mt-1">
                    ASHRAE Level II &amp; EPRA IGA Portfolio
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <div className="h-40 sm:h-52 rounded-2xl bg-slate-900 overflow-hidden shadow-md border border-[#3C6B1F]/30">
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80" alt="Vasudev Heights & Con Edison M&V" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3C6B1F] text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md z-10 border border-emerald-400/40">01</div>
                    <div className="rounded-r-2xl bg-[#1b2f0e] text-white py-2 sm:py-3 px-4 sm:px-5 -ml-3 flex-1 shadow border border-l-0 border-[#3C6B1F]/40">
                      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">Vasudev Heights IGA</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-300 font-light tracking-wide truncate">EPRA Investment Grade Audit</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-40 sm:h-52 rounded-2xl bg-slate-900 overflow-hidden shadow-md border border-[#3C6B1F]/30">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80" alt="Juja Sub-County Urban Sprawl GIS" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3C6B1F] text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md z-10 border border-emerald-400/40">02</div>
                    <div className="rounded-r-2xl bg-[#1b2f0e] text-white py-2 sm:py-3 px-4 sm:px-5 -ml-3 flex-1 shadow border border-l-0 border-[#3C6B1F]/40">
                      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">Juja Urban Sprawl GIS</p>
                      <p className="text-[10px] sm:text-[11px] text-slate-300 font-light tracking-wide truncate">UoN Spatial Research</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 6: ENGINEERING PROBLEM SOLVING
      ===================================================================== */}
      <section
        id="problem-solving"
        className="bg-[#182a0e] text-slate-100 py-14 sm:py-20 border-b-8 border-[#14230a] scroll-mt-20 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm border border-[#3C6B1F]/30"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center md:text-right mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
              Diagnostic Methodology
            </p>
            <h2 className="font-black text-3xl sm:text-6xl uppercase tracking-tighter leading-tight">
              <span className="text-white block">Engineering</span>
              <span className="text-emerald-300 block mt-1">Problem Solving</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { num: "01", label: "Identify Baseline & Issues" },
              { num: "02", label: "Analyze Spatial & Meter Data" },
              { num: "03", label: "Model ECM Solutions" },
            ].map((step) => (
              <div key={step.num} className="flex items-center w-full sm:w-auto">
                <div className="rounded-2xl bg-gradient-to-r from-[#3C6B1F] to-[#14230a] text-white font-bold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-3 sm:py-4 shadow-md flex-1 sm:min-w-[210px] border border-emerald-500/30">
                  {step.label}
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#14230a] text-emerald-300 font-black text-lg sm:text-xl tracking-tighter flex items-center justify-center -ml-3 sm:-ml-4 shadow-lg border-2 border-[#3C6B1F] shrink-0">
                  {step.num}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            {[
              { num: "04", label: "M&V Field Validation" },
              { num: "05", label: "Continuous Optimization" },
            ].map((step) => (
              <div key={step.num} className="flex items-center w-full sm:w-auto">
                <div className="rounded-2xl bg-gradient-to-r from-[#3C6B1F] to-[#14230a] text-white font-bold text-[11px] sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-3 sm:py-4 shadow-md flex-1 sm:min-w-[210px] border border-emerald-500/30">
                  {step.label}
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#14230a] text-emerald-300 font-black text-lg sm:text-xl tracking-tighter flex items-center justify-center -ml-3 sm:-ml-4 shadow-lg border-2 border-[#3C6B1F] shrink-0">
                  {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#14230a] rounded-3xl shadow-xl overflow-hidden border border-[#3C6B1F]/40">
            <div className="lg:col-span-5 bg-gradient-to-r from-[#1b2f0e] to-[#3C6B1F] p-8 sm:p-10 text-white flex flex-col justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none text-center sm:text-left">
              <h3 className="font-bold text-lg sm:text-2xl uppercase tracking-wide">
                End-to-End Audit &amp; Survey Methodology
              </h3>
              <p className="text-[10px] sm:text-xs text-emerald-200 mt-2 uppercase tracking-widest font-semibold">
                ASHRAE • IPMVP • ArcGIS Spatial Standards
              </p>
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 flex items-center rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
              <p className="text-slate-200 text-xs sm:text-base font-light leading-relaxed tracking-wide max-w-2xl text-center sm:text-left">
                Every engineering engagement follows a structured 5-stage diagnostic workflow:
                establishing accurate baseline energy or cadastral conditions, processing field
                and utility interval data in Excel/ArcGIS, simulating retrofits in DesignBuilder
                and EnergyPlus, verifying pre-/post-installation compliance, and optimizing
                long-term building performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SLIDE 7: TECHNICAL SKILLS + BAR CHART
      ===================================================================== */}
      <section
        id="skills"
        className="relative bg-[#182a0e] pb-14 sm:pb-20 border-b-8 border-[#14230a] scroll-mt-20 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm border border-[#3C6B1F]/30"
      >
        <div className="relative pt-12 sm:pt-16 pb-20 sm:pb-24 px-5 sm:px-6 overflow-hidden bg-slate-950 text-white rounded-t-3xl">
          <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-60 rounded-t-3xl">
            <source src="/skills-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px] rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#14230a]/80 to-slate-900 rounded-t-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block rounded-2xl bg-[#14230a]/90 border border-[#3C6B1F] px-6 sm:px-10 py-2.5 sm:py-3 shadow-xl">
                <h2 className="font-black text-3xl sm:text-6xl uppercase tracking-tighter text-white">
                  Technical <span className="text-emerald-300">Skills</span>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                { title: "Energy Simulation", desc: "Building energy modeling, HVAC systems analysis, and dynamic thermal simulation using DesignBuilder and EnergyPlus." },
                { title: "Auditing & M&V", desc: "ASHRAE Level II Energy Audits, EPRA Investment Grade Audits (IGA), and Con Edison NY M&V inspection protocols." },
                { title: "Geospatial & CAD", desc: "Cadastral, topographical, and sectional surveys; spatial analysis and cartography using ArcGIS and AutoCAD." },
                { title: "Data, AI & Web3", desc: "Advanced Excel data visualization alongside research in Artificial Intelligence, Machine Learning, and Blockchain." },
              ].map((card) => (
                <div key={card.title} className="rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#3C6B1F]/50 bg-slate-900/80 backdrop-blur-sm">
                  <div className="bg-[#1b2f0e] text-white py-3 px-4 text-center rounded-t-3xl border-b border-[#3C6B1F]/40">
                    <h3 className="font-bold text-sm sm:text-base uppercase tracking-wide">{card.title}</h3>
                  </div>
                  <div className="bg-[#3C6B1F] text-white p-5 sm:p-6 text-center text-[11px] sm:text-sm font-light leading-relaxed tracking-wide flex-1 flex items-center justify-center rounded-b-3xl">
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swipeable Bar Chart for Mobile */}
        <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-4">
          <div className="bg-[#14230a] rounded-3xl p-5 sm:p-8 border border-[#3C6B1F]/40 shadow-xl text-slate-100 w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="min-w-[450px] sm:min-w-0">
              <div className="grid grid-cols-12 items-end gap-2 sm:gap-4 h-52 sm:h-64 pt-6 pb-2 border-b-2 border-[#3C6B1F]/40 relative">
                <div className="col-span-1 h-full flex flex-col justify-between text-right pr-2 text-[10px] sm:text-xs font-bold text-emerald-300">
                  <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                </div>

                {[
                  { label: "Audits & M&V", height: "h-[92%]" },
                  { label: "GIS & Survey", height: "h-[88%]" },
                  { label: "Energy Model", height: "h-[84%]" },
                  { label: "AI & Web3", height: "h-[78%]" },
                ].map((bar) => (
                  <div key={bar.label} className="col-span-2 sm:col-span-2 flex flex-col items-center justify-end h-full mx-auto w-full max-w-[60px] sm:max-w-[90px]">
                    <div className={`w-full ${bar.height} rounded-t-xl sm:rounded-t-2xl bg-[#3C6B1F] hover:bg-[#2d5217] transition-all shadow-md border border-emerald-400/30`} />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-12 gap-2 sm:gap-4 pt-3 text-center">
                <div className="col-span-1" />
                {[
                  "Audits & M&V", "GIS & Survey", "Energy Model", "AI & Web3",
                ].map((label) => (
                  <div key={label} className="col-span-2 font-bold text-[9px] sm:text-xs uppercase tracking-wider text-slate-200">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EDUCATION, ACCREDITATIONS & CONTACT FOOTER 
      ===================================================================== */}
      <section className="bg-[#14230a] text-white py-12 sm:py-16 rounded-3xl my-2 sm:my-4 mx-2 sm:mx-8 shadow-sm border border-[#3C6B1F]/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          <div className="space-y-4">
            <h3 className="font-black text-base sm:text-lg uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <MarkerCap size={24} className="rotate-2 sm:w-7 sm:h-7" /> Academic Background
            </h3>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1b2f0e] border border-[#3C6B1F]/40 space-y-1">
              <p className="font-bold text-sm sm:text-base uppercase tracking-wide">
                B.Sc. in Geospatial Engineering (2024)
              </p>
              <p className="text-[10px] sm:text-xs text-emerald-300 font-semibold uppercase tracking-wider">University of Nairobi</p>
              <p className="text-[10px] sm:text-xs text-slate-300 font-light pt-1 sm:pt-2 tracking-wide">
                Research Project: Effects of Urban Sprawl in Juja Sub-County, Kiambu County.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#1b2f0e] border border-[#3C6B1F]/40">
              <p className="font-bold text-xs sm:text-sm uppercase tracking-wide">
                KCSE — Ringa Boys&apos; High School (2018)
              </p>
              <p className="text-[10px] sm:text-xs text-emerald-300 font-semibold tracking-widest uppercase">Grade: B+ (72 Points)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-black text-base sm:text-lg uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <MarkerStar size={24} className="-rotate-2 sm:w-7 sm:h-7" /> Accreditations
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="p-3 sm:p-4 rounded-2xl bg-[#1b2f0e] border border-[#3C6B1F]/40">
                <strong className="block text-white uppercase tracking-wide">Institution of Engineers of Kenya</strong>
                <span className="text-[10px] sm:text-xs text-emerald-300 font-semibold uppercase tracking-widest">Graduate Member</span>
              </li>
              <li className="p-3 sm:p-4 rounded-2xl bg-[#1b2f0e] border border-[#3C6B1F]/40">
                <strong className="block text-white uppercase tracking-wide">Institution of Surveyors of Kenya</strong>
                <span className="text-[10px] sm:text-xs text-emerald-300 font-semibold uppercase tracking-widest">Graduate Member</span>
              </li>
              <li className="p-3 sm:p-4 rounded-2xl bg-[#1b2f0e] border border-[#3C6B1F]/40">
                <strong className="block text-white uppercase tracking-wide">Elimisha Charity Campaign (2019)</strong>
                <span className="text-[10px] sm:text-xs text-slate-300 font-light tracking-wide block mt-1">
                  Partnering with UoN students to improve education access in marginalized communities.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-black text-base sm:text-lg uppercase tracking-wider text-emerald-300 flex items-center gap-2">
              <MarkerMail size={24} className="-rotate-1 sm:w-7 sm:h-7" /> Contact
            </h3>
            <div className="p-5 sm:p-6 rounded-3xl bg-[#1b2f0e] border border-[#3C6B1F]/50 space-y-4 shadow-xl">
              <a href="mailto:okeyootieno@outlook.com" className="block text-xs sm:text-sm font-semibold hover:underline text-emerald-300 tracking-wide truncate">
                okeyootieno@outlook.com
              </a>
              <a href="mailto:motieno@kawikenya.com" className="block text-xs sm:text-sm font-semibold hover:underline text-emerald-300 tracking-wide truncate">
                motieno@kawikenya.com
              </a>
              
              <button
                onClick={openVerificationModal}
                className="mt-2 w-full py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[#3C6B1F] hover:bg-[#2d5217] text-white font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors border border-emerald-400/30 shadow-md"
              >
                <MarkerFolder size={16} className="-rotate-1 sm:w-5 sm:h-5" /> View Project Portfolio
              </button>

              <p className="text-[9px] sm:text-[11px] text-slate-300 font-light italic border-l-2 border-[#3C6B1F] pl-2 sm:pl-3 tracking-wide">
                Referees from Kawi Energies Group, UoN, and Opiyo Land Surveyors available upon request.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-[#3C6B1F]/40 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-400">
          © 2026 Maurice Okeyo. All rights reserved.
        </div>
      </section>
    </div>
  );
}