import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

type Tab = 'tugas' | 'skripsi' | 'mentoring' | 'spesialist';

const TAB_CONTENT: Record<Tab, { title: string; desc: string; items: string[]; price: string }> = {
  tugas: {
    title: 'JASA TUGAS UMUM',
    desc: 'Kami bantu kamu selesaikan berbagai tugas akademik harian. Dari PPT sampai laporan panjang, semua bisa kami kerjakan dengan cepat dan berkualitas!',
    items: ['PPT & Naskah Presentasi', 'Parafrase & Turnitin Check', 'Makalah / Laporan / Artikel', 'Jawab Soal & Nulis', 'Layouting & Ketik', 'Poster, Biorander & Infografis'],
    price: 'Mulai Rp 2.000/file',
  },
  skripsi: {
    title: 'SKRIPSI & TUGAS AKHIR',
    desc: 'Spesialisasi di bidang sains & kesehatan (Biologi, Bioteknologi, Kimia, Farmasi, Kedokteran, Gizi). Dari judul sampai sidang, kami temani!',
    items: ['Judul & Research Plan', 'Abstrak', 'Bab 1 – Bab 5 Lengkap', 'Formatting & Daftar Isi', 'Daftar Pustaka Mendeley', 'PPT & Naskah Sidang'],
    price: 'Mulai Rp 50.000',
  },
  mentoring: {
    title: 'MENTORING & KONSULTASI',
    desc: 'Bimbingan langsung one-on-one bareng mentor berpengalaman. Cocok untuk kamu yang butuh arahan dalam pengerjaan skripsi atau penelitian bioinformatika.',
    items: ['Skripsi Buddy (Bab 1–5)', 'Drug Discovery', 'Phylogenetic Tree Analysis', 'Analisis Mutasi Gen & SNPs', 'Konsultasi Metodologi', 'Review & Feedback Bab'],
    price: 'Mulai Rp 100.000/sesi',
  },
  spesialist: {
    title: 'BIDANG SPESIALISASI',
    desc: 'Tim kami tersebar di banyak bidang ilmu dan bahasa. Apapun mata kuliah atau bahasa yang kamu butuhkan, kami punya ahlinya!',
    items: ['Biologi, Bioteknologi, Kimia', 'Farmasi, Kedokteran, Gizi', 'Bahasa Inggris & Jerman', 'Bahasa Jawa & Jepang', 'Agama Katolik & Kristen', 'PPT Editing & Canva'],
    price: 'Harga sesuai kebutuhan',
  },
};

interface HowItWorksProps {
  onOpenOrder: (serviceId?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenOrder }) => {
  const [activeTab, setActiveTab] = useState<Tab>('tugas');
  const content = TAB_CONTENT[activeTab];

  const tabs: { key: Tab; label: string }[] = [
    { key: 'tugas', label: 'Tugas' },
    { key: 'skripsi', label: 'Skripsi' },
    { key: 'mentoring', label: 'Mentoring' },
    { key: 'spesialist', label: 'Spesialist' },
  ];

  const getServiceIdForTab = (tab: Tab) => {
    switch (tab) {
      case 'tugas': return 'makalah';
      case 'skripsi': return 'bab1';
      case 'mentoring': return 'skripsi_buddy';
      default: return 'ppt';
    }
  };

  return (
    <section id="spesialist" className="bg-brown-section py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-8 left-8 text-white/20 text-5xl select-none bounce-gentle">◆</div>
      <div className="absolute bottom-12 left-1/4 text-white/10 text-6xl select-none spin-slow">✦</div>
      <div className="absolute top-20 right-8 text-3xl select-none bounce-gentle opacity-60" style={{animationDelay:'0.5s'}}>🌸</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2" style={{fontFamily:'Nunito'}}>
            ✦ KENALI LEBIH JAUH
          </p>
          <h2 className="font-display text-white" style={{fontSize:'clamp(2rem,5vw,3.5rem)'}}>
            LAYANAN KAMI<br />SELENGKAPNYA?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Tab Buttons (like the reference sidebar) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-3 rounded-2xl font-bold text-sm text-left transition-all ${
                  activeTab === tab.key
                    ? 'bg-[#F5A623] text-[#3D2B1F] shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                style={{fontFamily:'Nunito'}}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center: Content Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFF9F3] border border-[#E8D5C0] rounded-3xl p-6 sm:p-8 card-cute">
              <div className="inline-flex items-center gap-1 bg-[#FAF0E6] text-[#9E7256] border border-[#E8D5C0] rounded-full px-3 py-1 text-xs font-bold mb-4" style={{fontFamily:'Nunito'}}>
                ⭐⭐ TERPERCAYA
              </div>

              <h3 className="font-display text-[#3D2B1F] text-2xl sm:text-3xl mb-3 leading-tight">
                {content.title}
              </h3>
              <p className="text-[#6B4E3D] text-sm mb-5 leading-relaxed" style={{fontFamily:'Poppins'}}>
                {content.desc}
              </p>

              <ul className="space-y-2.5 mb-6">
                {content.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm" style={{fontFamily:'Nunito'}}>
                    <span className="w-5 h-5 rounded-full bg-[#9E7256] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    <span className="font-semibold text-[#3D2B1F]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8D5C0]">
                <div>
                  <p className="text-xs text-[#A08070] mb-0.5" style={{fontFamily:'Poppins'}}>Harga Mulai</p>
                  <p className="font-display text-[#9E7256] text-xl">{content.price}</p>
                </div>
                <button
                  onClick={() => onOpenOrder(getServiceIdForTab(activeTab))}
                  className="btn-yellow flex items-center gap-2 text-sm cursor-pointer"
                >
                  Pesan & Hitung Biaya <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Big mascot */}
          <div className="hidden lg:flex lg:col-span-3 items-end justify-center">
            <img
              src={logoImg}
              alt="Hamster mascot"
              className="w-full max-w-[220px] object-contain float-anim drop-shadow-2xl rounded-3xl"
            />
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:'100%',display:'block'}}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

