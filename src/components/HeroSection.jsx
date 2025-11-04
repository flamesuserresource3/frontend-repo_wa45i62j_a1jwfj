import React from 'react';
import { Sparkles, Stars, Moon } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6y-1b0sGg8f0Cw1p/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-yellow-200">Zodiac Flow</span>
        </div>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Buka Portal Zodiakmu
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Tarik napas. Tenangkan pikiran. Biarkan semesta membisikkan arah. Di sini kamu akan nemuin ramalan cinta, karier, kecocokan, dan vibes hari esok—semuanya dengan sentuhan hipnotik ala Gen Z.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Stars className="h-4 w-4 text-sky-300" />
            Frekuensi Semesta Aktif
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
            <Moon className="h-4 w-4 text-purple-300" />
            Mode Intuisi: ON
          </div>
        </div>
      </div>
    </section>
  );
}
