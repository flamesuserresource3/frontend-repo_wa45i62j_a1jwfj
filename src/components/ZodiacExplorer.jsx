import React, { useMemo, useState } from 'react';
import { Stars, Calendar, Briefcase, Heart, Sparkles } from 'lucide-react';

const ZODIACS = [
  { name: 'Aries', date: '21 Mar - 19 Apr', element: 'Api', traits: 'Berani, spontan, penuh energi.' },
  { name: 'Taurus', date: '20 Apr - 20 Mei', element: 'Tanah', traits: 'Setia, stabil, pencinta kenyamanan.' },
  { name: 'Gemini', date: '21 Mei - 20 Jun', element: 'Udara', traits: 'Cerdas, komunikatif, adaptif.' },
  { name: 'Cancer', date: '21 Jun - 22 Jul', element: 'Air', traits: 'Intuitif, lembut, protektif.' },
  { name: 'Leo', date: '23 Jul - 22 Agt', element: 'Api', traits: 'Karismatik, hangat, leader alami.' },
  { name: 'Virgo', date: '23 Agt - 22 Sep', element: 'Tanah', traits: 'Detail-oriented, rapi, logis.' },
  { name: 'Libra', date: '23 Sep - 22 Okt', element: 'Udara', traits: 'Seimbang, estetik, diplomatis.' },
  { name: 'Scorpio', date: '23 Okt - 21 Nov', element: 'Air', traits: 'Dalam, intens, transformatif.' },
  { name: 'Sagittarius', date: '22 Nov - 21 Des', element: 'Api', traits: 'Optimis, petualang, filosofis.' },
  { name: 'Capricorn', date: '22 Des - 19 Jan', element: 'Tanah', traits: 'Ambisius, disiplin, tahan banting.' },
  { name: 'Aquarius', date: '20 Jan - 18 Feb', element: 'Udara', traits: 'Visioner, unik, humanis.' },
  { name: 'Pisces', date: '19 Feb - 20 Mar', element: 'Air', traits: 'Empatik, dreamer, mistis.' },
];

const LOVE_VIBES = {
  Api: 'Cinta butuh ruang buat berapi-api sekaligus aman. Katakan apa yang kamu mau tanpa drama—jujur itu seksi.',
  Tanah: 'Slow but sure. Stabilitas jadi afrodisiakmu. Tunjukkan kehadiran nyata, bukan janji.',
  Udara: 'Flirt cerdas, chat mengalir, dan humor tipis. Otak dulu, baru hati—itu resepmu.',
  Air: 'Rasa adalah bahasamu. Pelukan, perhatian kecil, dan deep talk bikin hatimu mekar.'
};

const CAREER_VIBES = {
  Api: 'Kamu bersinar di peran leader, sales, kreator, dan pekerjaan yang butuh keberanian ambil keputusan cepat.',
  Tanah: 'Operasional, finance, arsitektur, data, agribisnis—semua yang butuh konsistensi dan ketelitian.',
  Udara: 'Marketing, media, UX, riset, edukasi—dunia yang butuh ide segar dan komunikasi luwes.',
  Air: 'Psikologi, counseling, seni, healing, service—pekerjaan yang menyentuh rasa dan manusia.'
};

function seeded(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function luckyNumbers(name, dateKey) {
  const base = name.split('').reduce((a,c)=>a+c.charCodeAt(0),0) + dateKey;
  const set = new Set();
  while (set.size < 3) {
    const n = Math.floor(seeded(base + set.size) * 89) + 10; // 10-99
    set.add(n);
  }
  return Array.from(set);
}

function buildGeneral(name, element) {
  const tones = {
    Api: 'Energi kamu lagi on-fire. Fokuskan ke satu tujuan biar alam semesta ngasih shortcut yang manis.',
    Tanah: 'Grounding terasa kuat. Konsistensi kecil-kecil bikin progress gede tanpa kamu sadar.',
    Udara: 'Ide menetes kayak hujan meteor. Catat, pilah, eksekusi—jangan semua dipegang sekaligus.',
    Air: 'Intuisi lagi tajam. Dengar bisikan hati, itu GPS paling akurat hari ini.'
  };
  return `${name}, ${tones[element]}`;
}

function buildTomorrow(name) {
  const d = new Date();
  const tomorrow = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
  const locale = tomorrow.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  return `Ramalan Hari Esok (${locale}): Semesta menyiapkan momen sinkronitas kecil untukmu. Peka, karena tanda-tanda akan muncul di waktu yang tidak kamu duga.`;
}

function mantra(name) {
  const list = [
    'Aku selaras dengan ritme semesta.',
    'Setiap langkahku dipandu intuisi yang jernih.',
    'Aku magnet untuk peluang yang tepat.',
    'Cintaku tumbuh dari kejujuran dan keberanian.',
    'Aku menerima dan aku berkembang.'
  ];
  const idx = name.length % list.length;
  return `Mantra: “${list[idx]}”`;
}

export default function ZodiacExplorer() {
  const [active, setActive] = useState('Aries');
  const [birthdate, setBirthdate] = useState('');

  const data = useMemo(()=>ZODIACS.find(z=>z.name===active),[active]);
  const dateKey = useMemo(()=>{
    if(!birthdate) return new Date().getDate();
    const d = new Date(birthdate);
    if (isNaN(d.getTime())) return new Date().getDate();
    return d.getDate();
  },[birthdate]);

  const numbers = useMemo(()=>luckyNumbers(active, dateKey),[active, dateKey]);
  const general = useMemo(()=>buildGeneral(active, data.element),[active, data]);
  const love = useMemo(()=>LOVE_VIBES[data.element], [data]);
  const career = useMemo(()=>CAREER_VIBES[data.element], [data]);
  const tomorrow = useMemo(()=>buildTomorrow(active),[active]);

  return (
    <section className="relative mx-auto -mt-10 w-full max-w-6xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold sm:text-2xl">Ramalan Zodiak</h2>
          <p className="text-sm text-white/70">Pilih zodiakmu dan rasakan bisikan semesta yang relevan dan relatable.</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="date" value={birthdate} onChange={e=>setBirthdate(e.target.value)} className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm"/>
          <span className="text-xs text-white/60">(opsional) Tanggal lahirmu untuk vibes yang lebih personal</span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <div className="col-span-2 space-y-3 sm:col-span-1">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            {ZODIACS.map((z)=> (
              <button key={z.name} onClick={()=>setActive(z.name)} className={`rounded-xl border px-3 py-2 text-left transition ${active===z.name? 'border-purple-400 bg-purple-400/20':'border-white/10 bg-black/30 hover:bg-white/10'}`}>
                <div className="text-sm font-semibold">{z.name}</div>
                <div className="text-xs text-white/60">{z.date}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2 space-y-4 sm:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-5">
            <div className="mb-2 flex items-center gap-2 text-purple-200">
              <Stars className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">{data.name} • {data.element} • {data.date}</span>
            </div>
            <p className="text-lg leading-relaxed">{general}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-pink-200">
                <Heart className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">Ramalan Jodoh</span>
              </div>
              <p className="text-sm text-white/90">{love}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-emerald-200">
                <Briefcase className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">Ramalan Pekerjaan</span>
              </div>
              <p className="text-sm text-white/90">{career}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-sky-200">
                <Calendar className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">Ramalan Hari Esok</span>
              </div>
              <p className="text-sm text-white/90">{tomorrow}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-yellow-200">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">Ramalan Lainnya</span>
              </div>
              <ul className="text-sm text-white/90">
                <li>Angka Keberuntungan: <span className="font-semibold">{numbers.join(' • ')}</span></li>
                <li>Vibes Warna: <span className="font-semibold">{['Ungu','Emas','Biru','Hitam','Jingga','Hijau'][(active.length)%6]}</span></li>
                <li>Emosi Dominan: <span className="font-semibold">{['Tenang','Berani','Reflektif','Optimis','Magnetik','Peka'][(active.charCodeAt(0))%6]}</span></li>
                <li className="mt-1 text-white/80">{mantra(active)}</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-white/60">Catatan: Ramalan ini bersifat hiburan dan refleksi. Gunakan sebagai kompas, bukan borgol. Kamu tetap sutradara hidupmu.</p>
        </div>
      </div>
    </section>
  );
}
