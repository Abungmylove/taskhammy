import React from 'react';
import { MessageCircle, CheckCircle, Star, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 flex items-center overflow-hidden bg-[#FDF6EE]">
      {/* Background polka dots */}
      <div className="absolute inset-0 bg-polka opacity-50 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#F2A191]/20 rounded-full blur-3xl pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#C4A882]/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-[#FAD4CB]/30 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAD4CB] border border-[#F2A191]/30 text-[#7A5540] text-sm font-bold" style={{ fontFamily: 'Nunito' }}>
              🐹 Teman Belajar Andalanmu!
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#3D2B1F] leading-tight tracking-tight" style={{ fontFamily: 'Nunito' }}>
              Tugas Numpuk?
              <br />
              <span className="text-[#9E7256] relative">
                Taskhammy
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#F2A191]/40 rounded-full -z-10" />
              </span>{' '}
              Siap Bantu!
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#6B4E3D] leading-relaxed max-w-lg mx-auto lg:mx-0" style={{ fontFamily: 'Poppins' }}>
              Dari tugas harian hingga skripsi, kami bantu kamu selesaikan dengan tuntas. Harga terjangkau, hasil berkualitas, bisa nego! 🌸
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/6285183144307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-[#9E7256] hover:bg-[#7A5540] text-white font-black rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 text-base"
                style={{ fontFamily: 'Nunito' }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp Sekarang
              </a>
              <a
                href="#layanan"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#FAF0E6] text-[#9E7256] font-bold rounded-full border-2 border-[#C4A882] transition-all flex items-center justify-center gap-2 text-base"
                style={{ fontFamily: 'Nunito' }}
              >
                Lihat Layanan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2 text-sm text-[#6B4E3D]">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#9E7256]" />
                <span>Harga Mulai 2.000/file</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#9E7256]" />
                <span>Bisa Nego & Fleksibel</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#9E7256]" />
                <span>Fast Response</span>
              </div>
            </div>
          </div>

          {/* Right: Cute Hero Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 card-shadow border border-[#E8D5C0] max-w-sm w-full">
                {/* Hamster Mascot */}
                <div className="flex justify-center mb-6">
                  <div className="w-36 h-36 rounded-full bg-[#FAD4CB]/40 flex items-center justify-center text-8xl animate-bounce" style={{ animationDuration: '2s' }}>
                    🐹
                  </div>
                </div>

                <h3 className="text-xl font-black text-center text-[#3D2B1F] mb-4" style={{ fontFamily: 'Nunito' }}>
                  Kenapa Pilih Taskhammy?
                </h3>

                <div className="space-y-3">
                  {[
                    { icon: '📝', text: 'Bantu tugas sekolah & kuliah' },
                    { icon: '🎓', text: 'Bimbingan skripsi lengkap' },
                    { icon: '🌍', text: 'Terjemahan 4 bahasa' },
                    { icon: '💰', text: 'Harga murah & bisa nego' },
                    { icon: '⚡', text: 'Pengerjaan cepat & berkualitas' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDF6EE] border border-[#E8D5C0]">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-[#6B4E3D]" style={{ fontFamily: 'Nunito' }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* WA Button in card */}
                <a
                  href="https://wa.me/6285183144307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full py-3 bg-[#F2A191] hover:bg-[#E8937F] text-white font-black rounded-full flex items-center justify-center gap-2 text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ fontFamily: 'Nunito' }}
                >
                  0851-8314-4307 🐹
                </a>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#F2A191] rounded-full flex items-center justify-center text-xl shadow-md animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.2s' }}>
                ⭐
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#C4A882] rounded-full flex items-center justify-center text-xl shadow-md animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '1.8s' }}>
                📚
              </div>
            </div>
          </div>

        </div>

        {/* Rating Strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 card-shadow border border-[#E8D5C0]">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="font-bold text-[#3D2B1F] text-sm" style={{ fontFamily: 'Nunito' }}>
              4.9 / 5 dari pelanggan setia kami
            </span>
          </div>
          <div className="bg-[#FAD4CB] rounded-full px-5 py-2.5 border border-[#F2A191]/30">
            <span className="font-bold text-[#7A5540] text-sm" style={{ fontFamily: 'Nunito' }}>
              🐹 100+ Tugas Selesai Bulan Ini!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
