import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="mx-auto mt-16 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/70 backdrop-blur">
      <p className="text-sm">Terhubung dengan semesta itu sederhana: hadir penuh, bernapas dalam, dan percaya proses. Stay cosmic, stay authentic.</p>
      <p className="mt-2 text-xs">© {new Date().getFullYear()} Zodiac Flow — Ramalan berbahasa hipnoterapi untuk generasi modern.</p>
    </footer>
  );
}
