import React from 'react';
import logoImg from '../assets/logo.jpg';

// "7 Days Free Trial" style section — White card on pink background
export const FreeTrialBanner: React.FC = () => {
  return (
    <section className="bg-[#9E7256] py-16 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-4 left-4 text-white/20 text-5xl select-none">✦</div>
      <div className="absolute bottom-4 right-4 text-white/20 text-4xl select-none">◆</div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF9F3] border border-[#E8D5C0] rounded-3xl p-6 sm:p-10 card-cute flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">

          {/* Mascot inside card - left */}
          <div className="flex-shrink-0">
            <img
              src={logoImg}
              alt="Hamster"
              className="w-36 sm:w-48 h-auto object-contain float-anim drop-shadow-lg rounded-2xl"
            />
          </div>

          {/* Center text content */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-[#FAF0E6] text-[#9E7256] border border-[#E8D5C0] rounded-full px-3 py-1 text-xs font-bold" style={{fontFamily:'Nunito'}}>
              ⭐⭐ SPESIAL UNTUK KAMU!
            </div>
            <h3 className="font-display text-[#3D2B1F] leading-tight" style={{fontSize:'clamp(1.5rem,3.5vw,2.2rem)'}}>
              KONSULTASI GRATIS<br />SEKARANG!
            </h3>
            <p className="text-[#6B4E3D] text-sm" style={{fontFamily:'Poppins'}}>
              Ceritakan kebutuhan tugasmu dan dapatkan estimasi harga tanpa dipungut biaya apapun. Fast response!
            </p>
            <a
              href="https://wa.me/6285183144307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow inline-block text-sm mt-2"
            >
              MULAI SEKARANG
            </a>
          </div>

          {/* Right: quick benefit list */}
          <div className="flex-shrink-0 space-y-3">
            {[
              { icon: '📝', text: 'Tugas harian & mingguan' },
              { icon: '🎓', text: 'Skripsi lengkap bab 1-5' },
              { icon: '🔬', text: 'Mentoring & konsultasi' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#FAF0E6] border border-[#E8D5C0] rounded-2xl px-4 py-2.5">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-bold text-[#3D2B1F]" style={{fontFamily:'Nunito'}}>{item.text}</span>
              </div>
            ))}
            <a href="#layanan" className="block text-center mt-2 text-sm font-bold text-[#9E7256] hover:underline" style={{fontFamily:'Nunito'}}>
              Lihat semua layanan →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

