import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

type PricingTab = 'tugas' | 'skripsi' | 'mentoring';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PricingTab>('tugas');

  const tabs: { key: PricingTab; label: string; emoji: string }[] = [
    { key: 'tugas', label: 'Tugas Umum', emoji: '📝' },
    { key: 'skripsi', label: 'Skripsi', emoji: '🎓' },
    { key: 'mentoring', label: 'Mentoring', emoji: '🔬' },
  ];

  const priceData: Record<PricingTab, { name: string; price: string; note?: string }[]> = {
    tugas: [
      { name: 'PPT', price: 'Rp 5.000/slide' },
      { name: 'Naskah Presentasi', price: 'Rp 5.000/slide' },
      { name: 'Parafrase', price: 'Rp 10.000/page' },
      { name: 'Cek Turnitin', price: 'Rp 2.000/file' },
      { name: 'Makalah / Laporan / Artikel', price: 'Rp 20.000/page' },
      { name: 'Review / Resume / Esai', price: 'Rp 20.000/page' },
      { name: 'Jawab Soal', price: 'Rp 10.000/page' },
      { name: 'Ketik & Nulis', price: 'Rp 10.000/page' },
      { name: 'Layouting', price: 'Rp 10.000/page' },
      { name: 'Biorander / Poster / Infografis', price: 'Rp 15.000/image' },
      { name: 'Terjemahan (Inggris ↔ Indonesia)', price: 'Rp 20.000/page' },
    ],
    skripsi: [
      { name: 'Judul & Research Plan', price: 'Rp 100.000' },
      { name: 'Abstrak', price: 'Rp 50.000' },
      { name: 'Bab 1 Pendahuluan', price: 'Rp 500.000' },
      { name: 'Bab 2 Tinjauan Pustaka', price: 'Rp 500.000' },
      { name: 'Bab 3 Metode Penelitian', price: 'Rp 500.000' },
      { name: 'Bab 4 Hasil & Pembahasan', price: 'Rp 500.000' },
      { name: 'Bab 5 Simpulan & Saran', price: 'Rp 500.000' },
      { name: 'Formatting', price: 'Rp 30.000' },
      { name: 'Daftar Isi & Mendeley', price: 'Rp 30.000' },
      { name: 'PPT Sidang', price: 'Rp 150.000' },
      { name: 'Naskah Presentasi Sidang', price: 'Rp 100.000' },
    ],
    mentoring: [
      { name: 'Skripsi Buddy (per sesi)', price: 'Mulai Rp 100.000', note: 'Bimbingan Bab 1–5' },
      { name: 'Drug Discovery', price: 'Hubungi Kami', note: 'Bioinformatika' },
      { name: 'Phylogenetic Tree', price: 'Hubungi Kami', note: 'Bioinformatika' },
      { name: 'Analisis Mutasi Gen & SNPs', price: 'Hubungi Kami', note: 'Bioinformatika' },
    ],
  };

  return (
    <section id="harga" className="py-20 bg-[#FAF0E6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <p className="text-[#9E7256] text-sm font-bold uppercase tracking-widest mb-2" style={{fontFamily:'Nunito'}}>💰 TRANSPARAN & TERJANGKAU</p>
          <h2 className="font-display text-[#3D2B1F]" style={{fontSize:'clamp(2rem,5vw,3rem)'}}>
            DAFTAR HARGA 🐹
          </h2>
          <p className="mt-3 text-[#6B4E3D] text-sm" style={{fontFamily:'Poppins'}}>
            Harga di bawah adalah harga mulai. Semua bisa negosiasi!
          </p>
        </div>

        {/* Tab */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === tab.key
                  ? 'bg-[#9E7256] text-white shadow-md'
                  : 'bg-white text-[#3D2B1F] border-2 border-[#E8D5C0] hover:border-[#9E7256]'
              }`}
              style={{fontFamily:'Nunito'}}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Price Table */}
        <div className="bg-[#FFF9F3] rounded-3xl border-2 border-[#E8D5C0] card-cute overflow-hidden">
          <div className="px-6 py-4 bg-[#9E7256] flex justify-between">
            <span className="font-display text-white text-sm">LAYANAN</span>
            <span className="font-display text-white text-sm">HARGA MULAI</span>
          </div>
          <div className="divide-y divide-[#E8D5C0]/60">
            {priceData[activeTab].map((item, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-[#FAF0E6] transition-colors">
                <div>
                  <p className="font-bold text-[#3D2B1F] text-sm" style={{fontFamily:'Nunito'}}>{item.name}</p>
                  {item.note && <p className="text-[11px] text-[#A08070]">{item.note}</p>}
                </div>
                <span className="font-display text-[#9E7256] text-sm whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 bg-[#FAF0E6] border-t border-[#E8D5C0] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-bold text-[#3D2B1F] text-sm" style={{fontFamily:'Nunito'}}>🐹 Harga fleksibel, bisa nego!</p>
            <a
              href="https://wa.me/6285183144307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4" /> CHAT & NEGO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

