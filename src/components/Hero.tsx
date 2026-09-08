import React from 'react';
import logoImg from '../assets/logo.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="bg-pink-section min-h-[100dvh] pt-16 relative overflow-hidden flex items-center">

      {/* ---- Decorative floating shapes ---- */}
      {/* Top-right cloud */}
      <div className="absolute top-16 right-8 w-32 h-20 opacity-60 pointer-events-none select-none">
        <svg viewBox="0 0 128 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="64" cy="56" rx="60" ry="24" fill="white" fillOpacity="0.25"/>
          <ellipse cx="40" cy="44" rx="28" ry="22" fill="white" fillOpacity="0.25"/>
          <ellipse cx="84" cy="40" rx="32" ry="26" fill="white" fillOpacity="0.25"/>
        </svg>
      </div>
      {/* Small cloud left */}
      <div className="absolute top-32 left-4 w-20 h-14 opacity-40 pointer-events-none select-none">
        <svg viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="40" rx="36" ry="16" fill="white" fillOpacity="0.3"/>
          <ellipse cx="24" cy="30" rx="18" ry="15" fill="white" fillOpacity="0.3"/>
          <ellipse cx="54" cy="26" rx="20" ry="18" fill="white" fillOpacity="0.3"/>
        </svg>
      </div>
      {/* Stars */}
      <div className="absolute top-24 left-1/3 text-yellow-300 text-2xl bounce-gentle pointer-events-none select-none">✦</div>
      <div className="absolute bottom-32 left-12 text-white/40 text-3xl bounce-gentle pointer-events-none select-none" style={{animationDelay:'0.5s'}}>★</div>
      <div className="absolute top-40 right-1/3 text-white/30 text-xl spin-slow pointer-events-none select-none">◆</div>
      {/* Planet */}
      <div className="absolute bottom-24 right-16 text-4xl spin-slow pointer-events-none select-none opacity-70">🪐</div>
      <div className="absolute top-20 right-1/4 text-2xl bounce-gentle pointer-events-none select-none opacity-60" style={{animationDelay:'1s'}}>⭐</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text Content */}
          <div className="text-left space-y-6">
            {/* Eyebrow */}
            <p className="text-white/70 text-sm uppercase tracking-widest font-bold" style={{ fontFamily: 'Nunito' }}>
              ✦ TEMAN BELAJAR TERBAIKMU
            </p>

            {/* Bold Headline */}
            <h1 className="font-display text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              TUGAS<br />
              NUMPUK?<br />
              <span className="text-[#FFD700]">SANTAI AJA!</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/80 text-base leading-relaxed max-w-md" style={{ fontFamily: 'Poppins' }}>
              Taskhammy siap bantu kamu dari tugas harian sampai skripsi lengkap. Harga terjangkau, hasil terpercaya, bisa nego! 🐹
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/6285183144307"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow text-base"
              >
                CHAT SEKARANG
              </a>
              <a
                href="#layanan"
                className="btn-white text-sm border-2 border-white"
              >
                Lihat Layanan →
              </a>
            </div>

            {/* Slider dots like reference */}
            <div className="flex items-center gap-2 pt-4">
              <span className="w-6 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
              <span className="w-2 h-2 rounded-full bg-white/40" />
            </div>
          </div>

          {/* Right: Big 3D Mascot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing circle behind mascot */}
              <div className="absolute inset-0 rounded-full bg-[#FF6FB7]/20 blur-3xl scale-110" />
              <img
                src={logoImg}
                alt="Taskhammy Mascot"
                className="relative z-10 float-anim drop-shadow-2xl rounded-3xl"
                style={{ width: 'clamp(260px, 40vw, 420px)', height: 'auto', objectFit: 'contain' }}
              />
              {/* Floating badge on mascot */}
              <div className="absolute top-8 -left-4 bg-white rounded-2xl px-3 py-2 card-cute bounce-gentle z-20" style={{animationDelay:'0.3s'}}>
                <p className="font-display text-[#E91E8C] text-sm">⭐ 4.9/5</p>
                <p className="text-[10px] text-gray-500 font-heading">100+ Tugas Selesai</p>
              </div>
              <div className="absolute bottom-12 -right-4 bg-[#FFD700] rounded-2xl px-3 py-2 card-cute bounce-gentle z-20" style={{animationDelay:'0.8s'}}>
                <p className="font-display text-[#1A1A2E] text-xs">🐹 Fast Response!</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{width:'100%',display:'block'}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

