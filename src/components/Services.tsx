import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface ServiceCategory {
  emoji: string;
  title: string;
  description: string;
  items: { name: string; price: string }[];
  highlight?: boolean;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    emoji: '📝',
    title: 'Jasa Tugas Umum',
    description: 'Bantu kamu dari A sampai Z urusan akademik sehari-hari!',
    items: [
      { name: 'PPT & Naskah Presentasi', price: 'Rp 5.000/slide' },
      { name: 'Parafrase', price: 'Rp 10.000/page' },
      { name: 'Cek Turnitin', price: 'Rp 2.000/file' },
      { name: 'Makalah / Laporan / Artikel', price: 'Rp 20.000/page' },
      { name: 'Review / Resume / Esai', price: 'Rp 20.000/page' },
      { name: 'Jawab Soal', price: 'Rp 10.000/page' },
      { name: 'Ketik & Nulis', price: 'Rp 10.000/page' },
      { name: 'Layouting', price: 'Rp 10.000/page' },
    ],
  },
  {
    emoji: '🎨',
    title: 'Desain Kreatif',
    description: 'Biorander, poster, infografis — tampil kece & profesional!',
    items: [
      { name: 'Biorander', price: 'Rp 15.000/image' },
      { name: 'Poster', price: 'Rp 15.000/image' },
      { name: 'Infografis', price: 'Rp 15.000/image' },
    ],
    highlight: true,
  },
  {
    emoji: '🌍',
    title: 'Terjemahan',
    description: 'Butuh translate yang akurat? Kami siap bantu!',
    items: [
      { name: 'Inggris → Indonesia', price: 'Rp 20.000/page' },
      { name: 'Indonesia → Inggris', price: 'Rp 20.000/page' },
    ],
  },
  {
    emoji: '🎓',
    title: 'Skripsi & Tugas Akhir',
    description: 'Dari judul sampai sidang, kita temani perjalananmu!',
    items: [
      { name: 'Judul & Research Plan', price: 'Rp 100.000' },
      { name: 'Abstrak', price: 'Rp 50.000' },
      { name: 'Bab 1 Pendahuluan', price: 'Rp 500.000' },
      { name: 'Bab 2 Tinjauan Pustaka', price: 'Rp 500.000' },
      { name: 'Bab 3 Metode Penelitian', price: 'Rp 500.000' },
      { name: 'Bab 4 Hasil & Pembahasan', price: 'Rp 500.000' },
      { name: 'Bab 5 Simpulan & Saran', price: 'Rp 500.000' },
      { name: 'Formatting, Daftar Isi, Mendeley', price: 'Rp 30.000' },
    ],
    highlight: true,
  },
  {
    emoji: '🔬',
    title: 'Mentoring & Konsultasi',
    description: 'Diskusi langsung bareng mentor berpengalaman!',
    items: [
      { name: 'Skripsi Buddy (per sesi)', price: 'Mulai Rp 100.000/meet' },
      { name: 'Ambil Data Bioinformatika', price: 'Hubungi kami' },
      { name: 'Drug Discovery', price: 'Hubungi kami' },
      { name: 'Phylogenetic Tree', price: 'Hubungi kami' },
      { name: 'Analisis Mutasi Gen & SNPs', price: 'Hubungi kami' },
    ],
  },
];

export const Services: React.FC = () => {
  return (
    <section id="layanan" className="py-24 bg-[#FAF0E6] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A882]/40 to-transparent" />

      {/* Decorative dots */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 select-none">🐹</div>
      <div className="absolute bottom-10 left-10 text-6xl opacity-20 select-none rotate-12">📚</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAD4CB] border border-[#F2A191]/30 text-[#7A5540] text-sm font-bold mb-4" style={{ fontFamily: 'Nunito' }}>
            ✨ Semua Kebutuhan Akademikmu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D2B1F] leading-tight" style={{ fontFamily: 'Nunito' }}>
            Layanan Taskhammy 🐹
          </h2>
          <p className="mt-4 text-[#6B4E3D] text-base max-w-2xl mx-auto" style={{ fontFamily: 'Poppins' }}>
            Dari tugas kecil sampai skripsi besar, Taskhammy siap jadi teman belajar terbaikmu. Harga terjangkau, kualitas terjamin!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border-2 transition-all hover-bounce card-shadow flex flex-col ${
                cat.highlight
                  ? 'bg-[#9E7256] border-[#7A5540] text-white'
                  : 'bg-white border-[#E8D5C0] text-[#3D2B1F]'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                  cat.highlight ? 'bg-white/20' : 'bg-[#FAD4CB]'
                }`}>
                  {cat.emoji}
                </div>
                <div>
                  <h3 className={`text-lg font-black leading-tight ${cat.highlight ? 'text-white' : 'text-[#3D2B1F]'}`} style={{ fontFamily: 'Nunito' }}>
                    {cat.title}
                  </h3>
                </div>
              </div>

              <p className={`text-xs mb-4 leading-relaxed ${cat.highlight ? 'text-white/80' : 'text-[#6B4E3D]'}`} style={{ fontFamily: 'Poppins' }}>
                {cat.description}
              </p>

              {/* Items */}
              <div className="space-y-2 flex-1">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between py-2 px-3 rounded-xl text-xs gap-2 ${
                      cat.highlight
                        ? 'bg-white/10 border border-white/20'
                        : 'bg-[#FDF6EE] border border-[#E8D5C0]'
                    }`}
                  >
                    <span className={`font-semibold ${cat.highlight ? 'text-white' : 'text-[#3D2B1F]'}`} style={{ fontFamily: 'Nunito' }}>
                      {item.name}
                    </span>
                    <span className={`font-bold whitespace-nowrap text-[11px] ${cat.highlight ? 'text-[#FAD4CB]' : 'text-[#9E7256]'}`} style={{ fontFamily: 'Nunito' }}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`mt-4 pt-3 border-t ${cat.highlight ? 'border-white/20' : 'border-[#E8D5C0]'}`}>
                <p className={`text-[11px] font-bold text-center ${cat.highlight ? 'text-[#FAD4CB]' : 'text-[#A08070]'}`} style={{ fontFamily: 'Nunito' }}>
                  💬 Harga fleksibel, bisa nego!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 bg-white rounded-3xl p-8 border-2 border-[#E8D5C0] card-shadow text-center">
          <p className="text-2xl font-black text-[#3D2B1F] mb-2" style={{ fontFamily: 'Nunito' }}>
            Ada tugas lain yang butuh bantuan? 🐹
          </p>
          <p className="text-[#6B4E3D] mb-6 text-sm" style={{ fontFamily: 'Poppins' }}>
            Taskhammy bisa bantu hampir semua jenis tugas akademikmu! Hubungi kami dulu untuk diskusi kebutuhan dan negosiasi harga.
          </p>
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#9E7256] hover:bg-[#7A5540] text-white font-black rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-base"
            style={{ fontFamily: 'Nunito' }}
          >
            <MessageCircle className="w-5 h-5" />
            Konsultasi Gratis via WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
