import React from 'react';

const SPECIALIZATIONS = [
  { emoji: '🧬', label: 'Mata Pelajaran Umum' },
  { emoji: '🔢', label: 'Mata Pelajaran MIPA' },
  { emoji: '📚', label: 'Mata Kuliah Umum' },
  { emoji: '🌿', label: 'Biologi & Bioteknologi' },
  { emoji: '⚗️', label: 'Kimia' },
  { emoji: '🏥', label: 'Kedokteran' },
  { emoji: '💊', label: 'Farmasi' },
  { emoji: '🥗', label: 'Gizi & Kesehatan' },
  { emoji: '✝️', label: 'Agama Katolik & Kristen' },
  { emoji: '🖥️', label: 'PPT & Canva Editing' },
  { emoji: '🇬🇧', label: 'Bahasa Inggris' },
  { emoji: '🇩🇪', label: 'Bahasa Jerman' },
  { emoji: '🗾', label: 'Bahasa Jawa' },
  { emoji: '🇯🇵', label: 'Bahasa Jepang' },
];

export const Specialist: React.FC = () => {
  return (
    <section id="spesialist" className="py-24 bg-[#FDF6EE] relative overflow-hidden">
      {/* Wave top from previous section */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A882]/40 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-16 left-8 text-4xl opacity-20 rotate-[-15deg] select-none">🌸</div>
      <div className="absolute bottom-16 right-8 text-4xl opacity-20 rotate-12 select-none">🌟</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAD4CB] border border-[#F2A191]/30 text-[#7A5540] text-sm font-bold" style={{ fontFamily: 'Nunito' }}>
              🎓 Keahlian Kami
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3D2B1F] leading-tight" style={{ fontFamily: 'Nunito' }}>
              Spesialisasi
              <br />
              <span className="text-[#9E7256]">Taskhammy</span> 🐹
            </h2>

            <p className="text-[#6B4E3D] text-base leading-relaxed" style={{ fontFamily: 'Poppins' }}>
              Kami tidak hanya jago satu bidang aja! Taskhammy punya tim yang tersebar di berbagai mata kuliah dan bahasa, jadi apapun tugasmu, kami bisa bantu.
            </p>

            <div className="bg-[#9E7256] rounded-3xl p-6 text-white">
              <p className="text-lg font-black mb-2" style={{ fontFamily: 'Nunito' }}>
                🔬 Spesialis Bioinformatika
              </p>
              <p className="text-sm text-white/80 mb-3" style={{ fontFamily: 'Poppins' }}>
                Layanan khusus untuk mahasiswa biologi, bioteknologi, kimia, farmasi, kedokteran, dan gizi.
              </p>
              <div className="space-y-1.5">
                {['Drug Discovery', 'Phylogenetic Tree', 'Analisis Mutasi Gen & SNPs', 'Skripsi Buddy (Bab 1–5)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="w-1.5 h-1.5 bg-[#FAD4CB] rounded-full flex-shrink-0" />
                    <span style={{ fontFamily: 'Nunito' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Specialization Grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SPECIALIZATIONS.map((spec, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-3 border-2 border-[#E8D5C0] flex items-center gap-2.5 hover-bounce card-shadow transition-all cursor-default"
                >
                  <span className="text-xl flex-shrink-0">{spec.emoji}</span>
                  <span className="text-xs font-bold text-[#6B4E3D] leading-tight" style={{ fontFamily: 'Nunito' }}>
                    {spec.label}
                  </span>
                </div>
              ))}

              {/* Extra "Dan Lainnya" card */}
              <div className="col-span-2 sm:col-span-3 bg-[#FAD4CB] rounded-2xl p-4 border-2 border-[#F2A191]/40 text-center">
                <p className="font-black text-[#7A5540] text-sm" style={{ fontFamily: 'Nunito' }}>
                  🐹 Butuh bidang lain? Hubungi kami! Harga fleksibel, bisa nego! WA: 0851-8314-4307
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
