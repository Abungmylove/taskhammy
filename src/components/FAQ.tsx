import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Bagaimana cara pesan layanan Taskhammy?',
    a: 'Gampang banget! Langsung hubungi kami via WhatsApp di 0851-8314-4307. Ceritakan kebutuhan tugasmu, lalu kami akan kasih estimasi harga dan waktu pengerjaan. Harga bisa negosiasi ya! 🐹'
  },
  {
    q: 'Berapa lama waktu pengerjaannya?',
    a: 'Tergantung jenis dan kompleksitas tugas. Untuk tugas ringan seperti parafrase atau ketik biasanya 1-2 hari. Untuk skripsi per bab bisa 3-7 hari. Kamu bisa diskusikan deadline saat konsultasi!'
  },
  {
    q: 'Apakah hasil tugasnya original dan tidak plagiat?',
    a: 'Tentu! Semua pengerjaan kami lakukan secara original dan dari awal. Bahkan kami punya layanan cek Turnitin untuk memastikan hasil tulisan bebas plagiat. Kualitas adalah prioritas kami!'
  },
  {
    q: 'Apakah harga bisa ditawar?',
    a: 'BISA BANGET! 🎉 Taskhammy sangat terbuka untuk negosiasi harga. Kami percaya semua siswa dan mahasiswa berhak mendapat bantuan berkualitas dengan harga yang sesuai budget.'
  },
  {
    q: 'Bidang apa saja yang bisa dibantu?',
    a: 'Banyak banget! Mulai dari pelajaran umum, MIPA, mata kuliah biologi, bioteknologi, kimia, farmasi, kedokteran, gizi, bahasa Inggris/Jerman/Jawa/Jepang, hingga agama Katolik & Kristen. Kalau ragu, tanya dulu saja!'
  },
  {
    q: 'Apakah ada layanan untuk skripsi lengkap?',
    a: 'Ada! Kami bisa bantu mulai dari pembuatan judul & research plan, abstrak, hingga Bab 1-5 skripsi lengkap. Tersedia juga layanan Skripsi Buddy untuk mentoring langsung dengan harga Rp 100.000/sesi.'
  },
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#FDF6EE] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A882]/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAD4CB] border border-[#F2A191]/30 text-[#7A5540] text-sm font-bold mb-4" style={{ fontFamily: 'Nunito' }}>
            ❓ Ada yang Ingin Ditanyakan?
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#3D2B1F]" style={{ fontFamily: 'Nunito' }}>
            Pertanyaan Umum 🐹
          </h2>
          <p className="mt-3 text-[#6B4E3D] text-sm" style={{ fontFamily: 'Poppins' }}>
            Masih penasaran? Coba cek dulu pertanyaan yang sering ditanyakan di bawah ini.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-[#E8D5C0] overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-[#3D2B1F] text-sm sm:text-base leading-snug" style={{ fontFamily: 'Nunito' }}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#9E7256] flex-shrink-0 transition-transform duration-200 ${openIdx === i ? 'rotate-180' : ''}`}
                />
              </button>

              {openIdx === i && (
                <div className="px-5 pb-5 pt-1 text-sm text-[#6B4E3D] leading-relaxed border-t border-[#E8D5C0]/50" style={{ fontFamily: 'Poppins' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#6B4E3D] mb-4 text-sm" style={{ fontFamily: 'Poppins' }}>
            Masih ada pertanyaan yang belum terjawab? 🌸
          </p>
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#9E7256] hover:bg-[#7A5540] text-white font-black rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-sm"
            style={{ fontFamily: 'Nunito' }}
          >
            <MessageCircle className="w-4 h-4" />
            Tanya Langsung ke Kami!
          </a>
        </div>

      </div>
    </section>
  );
};
