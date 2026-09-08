import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = [
  { q: 'Bagaimana cara pesan layanan Taskhammy?', a: 'Gampang banget! Langsung chat kami di WhatsApp 0851-8314-4307, ceritakan kebutuhan tugasmu, kami kasih estimasi harga + deadline. Harga bisa nego! 🐹' },
  { q: 'Berapa lama waktu pengerjaannya?', a: 'Untuk tugas ringan (parafrase, ketik) biasanya 1-2 hari. Skripsi per bab 3-7 hari. Deadline bisa didiskusikan saat konsultasi!' },
  { q: 'Apakah hasilnya original dan bebas plagiat?', a: 'Tentu! Semua dikerjakan secara original dari awal. Kami juga punya layanan cek Turnitin Rp 2.000/file untuk memastikan hasilnya bersih.' },
  { q: 'Harga bisa ditawar?', a: 'BISA BANGET! 🎉 Taskhammy sangat terbuka untuk negosiasi. Kami percaya semua pelajar berhak mendapat bantuan berkualitas sesuai budget mereka.' },
  { q: 'Bidang apa saja yang bisa dibantu?', a: 'Banyak! MIPA, biologi, bioteknologi, kimia, farmasi, kedokteran, gizi, bahasa Inggris/Jerman/Jawa/Jepang, dan agama. Kalau ragu, tanya dulu!' },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#FFF9F3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-[#9E7256] text-sm font-bold uppercase tracking-widest mb-2" style={{fontFamily:'Nunito'}}>✦ ADA PERTANYAAN?</p>
          <h2 className="font-display text-[#3D2B1F]" style={{fontSize:'clamp(2rem,5vw,3rem)'}}>
            PERTANYAAN UMUM 🐹
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border-2 border-[#E8D5C0] overflow-hidden bg-[#FAF0E6] transition-all">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-[#3D2B1F] text-sm sm:text-base" style={{fontFamily:'Nunito'}}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#9E7256] flex-shrink-0 transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 text-sm text-[#6B4E3D] border-t border-[#E8D5C0] pt-3" style={{fontFamily:'Poppins'}}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            TANYA LANGSUNG KE KAMI!
          </a>
        </div>

      </div>
    </section>
  );
};

