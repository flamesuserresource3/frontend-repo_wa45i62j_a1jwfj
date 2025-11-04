import React, { useMemo, useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ZODIACS = [
  'Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
];

const ELEMENTS = {
  Aries: 'Api', Leo: 'Api', Sagittarius: 'Api',
  Taurus: 'Tanah', Virgo: 'Tanah', Capricorn: 'Tanah',
  Gemini: 'Udara', Libra: 'Udara', Aquarius: 'Udara',
  Cancer: 'Air', Scorpio: 'Air', Pisces: 'Air'
};

function scoreCompatibility(a, b) {
  if (!a || !b) return 0;
  if (a === b) return 88; // mirroring feels comfy
  const ea = ELEMENTS[a];
  const eb = ELEMENTS[b];
  if (ea === eb) return 92; // element match
  const harmonyPairs = [
    ['Api','Udara'], ['Udara','Api'],
    ['Air','Tanah'], ['Tanah','Air']
  ];
  const isHarmonic = harmonyPairs.some(([x,y]) => x===ea && y===eb);
  if (isHarmonic) return 84;
  return 72; // learn-and-grow vibe
}

function buildNarrative(a, b) {
  if (!a || !b) return '';
  const s = scoreCompatibility(a,b);
  const tones = s >= 90
    ? 'Kalian kayak lagu favorit yang auto-repeat — vibes nyambung tanpa banyak kata.'
    : s >= 80
    ? 'Ada magnet halus yang narik satu sama lain. Dengan komunikasi jujur, relasi ini bisa makin solid.'
    : 'Perbedaan bukan penghalang — justru jadi bahan bakar buat tumbuh bareng. Kuncinya: dengerin, bukan debat.';
  const spark = `Ketertarikan awal: ${Math.min(99, Math.round(s*0.95))}%. Potensi jangka panjang: ${Math.min(99, Math.round(s*1.02))}%.`;
  return `${a} x ${b}. ${tones} ${spark}`;
}

export default function CompatibilityChecker() {
  const [a, setA] = useState('Aries');
  const [b, setB] = useState('Libra');
  const s = useMemo(()=>scoreCompatibility(a,b),[a,b]);
  const text = useMemo(()=>buildNarrative(a,b),[a,b]);

  return (
    <section className="relative mx-auto mt-14 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20">
          <Heart className="h-5 w-5 text-pink-300" />
        </div>
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Pencocokan Zodiak</h2>
          <p className="text-sm text-white/70">Uji chemistry dua zodiak dan lihat percikan semestanya.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm text-white/70">Zodiak Pertama</label>
          <select value={a} onChange={e=>setA(e.target.value)} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white">
            {ZODIACS.map(z=> <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/70">Zodiak Kedua</label>
          <select value={b} onChange={e=>setB(e.target.value)} className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white">
            {ZODIACS.map(z=> <option key={z} value={z}>{z}</option>)}
          </select>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
              <p className="text-xs text-white/60">Skor Kecocokan</p>
              <p className="text-2xl font-extrabold text-pink-300">{s}%</p>
            </div>
            <Sparkles className="h-6 w-6 text-yellow-300" />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/80">
        {text}
      </div>
    </section>
  );
}
