import React from 'react';
import { Plus } from 'lucide-react';

const SERVICES = [
  {
    emoji: '📝',
    title: 'TUGAS\nUMUM',
    desc: 'PPT, makalah, laporan, parafrase, jawab soal, terjemahan & lebih banyak lagi!',
    price: 'Mulai Rp 2.000',
    color: '#FAF0E6',
    border: '#E8D5C0',
  },
  {
    emoji: '🎓',
    title: 'SKRIPSI\nLENGKAP',
    desc: 'Dari judul, abstrak, hingga Bab 1–5. Spesialis sains & kesehatan.',
    price: 'Mulai Rp 50.000',
    color: '#FAF0E6',
    border: '#E8D5C0',
  },
  {
    emoji: '🔬',
    title: 'MENTORING\n& KONSULTASI',
    desc: 'Skripsi Buddy, ambil data bioinformatika, drug discovery & phylogenetic tree.',
    price: 'Mulai Rp 100.000/sesi',
    color: '#FAF0E6',
    border: '#E8D5C0',
    hasGift: true,
  },
];

interface ServicesProps {
  onOpenOrder: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrder }) => {
  return (
    <section id="layanan" className="py-20 bg-[#FFF9F3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <p className="text-[#9E7256] text-sm font-bold uppercase tracking-widest mb-2" style={{fontFamily:'Nunito'}}>
            ✦ APA YANG KAMI TAWARKAN
          </p>
          <h2 className="font-display text-[#3D2B1F]" style={{fontSize:'clamp(2rem,5vw,3.5rem)'}}>
            LAYANAN<br />TASKHAMMY 🐹
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="relative rounded-3xl p-6 border-2 hover:-translate-y-2 transition-transform duration-200 card-cute group flex flex-col"
              style={{ backgroundColor: svc.color, borderColor: svc.border }}
            >
              {/* Gift decoration for mentoring */}
              {svc.hasGift && (
                <div className="absolute -top-6 -right-4 text-4xl bounce-gentle select-none">🎁</div>
              )}

              {/* Icon box */}
              <div className="w-14 h-14 rounded-2xl bg-[#9E7256]/15 flex items-center justify-center text-3xl mb-4">
                {svc.emoji}
              </div>

              <h3 className="font-display text-[#3D2B1F] text-xl mb-2 whitespace-pre-line leading-tight">
                {svc.title}
              </h3>
              <p className="text-[#6B4E3D] text-sm mb-5 leading-relaxed" style={{fontFamily:'Poppins'}}>
                {svc.desc}
              </p>

              {/* Price + CTA row */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#E8D5C0]">
                <span className="font-bold text-[#9E7256] text-sm" style={{fontFamily:'Nunito'}}>
                  {svc.price}
                </span>
                <button
                  onClick={() => onOpenOrder(i === 0 ? 'ppt' : i === 1 ? 'bab1' : 'skripsi_buddy')}
                  className="px-3.5 py-1.5 rounded-full bg-[#9E7256] flex items-center gap-1 text-white hover:bg-[#7A5540] transition-colors shadow-md text-xs font-bold cursor-pointer"
                  style={{ fontFamily: 'Nunito' }}
                >
                  <Plus className="w-3.5 h-3.5" /> Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* All services detail link */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onOpenOrder()}
            className="btn-yellow text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>🛒</span> BUKA KALKULATOR & ORDER
          </button>
          <a
            href="#harga"
            className="btn-white text-sm border border-[#E8D5C0]"
          >
            LIHAT SEMUA HARGA →
          </a>
        </div>

      </div>
    </section>
  );
};

