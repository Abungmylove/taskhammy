import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D2B1F] text-[#C4A882] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-[#9E7256] rounded-3xl p-8 mb-14 text-center relative overflow-hidden">
          <div className="absolute top-4 right-8 text-4xl opacity-30 select-none">🐹</div>
          <div className="absolute bottom-4 left-8 text-3xl opacity-30 select-none rotate-12">⭐</div>
          <p className="text-3xl font-black text-white mb-2" style={{ fontFamily: 'Nunito' }}>
            Siap Bantu Tugasmu! 🐹
          </p>
          <p className="text-white/80 text-sm mb-6" style={{ fontFamily: 'Poppins' }}>
            Jangan tunda lagi. Hubungi Taskhammy sekarang dan selesaikan tugasmu dengan santai!
          </p>
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#9E7256] font-black rounded-full text-base transition-all hover:shadow-xl hover:-translate-y-1"
            style={{ fontFamily: 'Nunito' }}
          >
            <MessageCircle className="w-5 h-5" />
            Chat WA: 0851-8314-4307
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#6B4E3D]">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-3xl">🐹</span>
              <div>
                <p className="text-lg font-black text-white" style={{ fontFamily: 'Nunito' }}>Taskhammy</p>
                <p className="text-xs text-[#A08070]">Jasa Tugas & Skripsi</p>
              </div>
            </div>
            <p className="text-sm text-[#A08070] leading-relaxed" style={{ fontFamily: 'Poppins' }}>
              Taskhammy hadir sebagai teman belajarmu yang siap membantu menyelesaikan segala kebutuhan akademik dengan harga terjangkau dan hasil berkualitas.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'Nunito' }}>Navigasi</h4>
            <ul className="space-y-2.5 text-sm text-[#A08070]">
              <li><a href="#layanan" className="hover:text-[#FAD4CB] transition-colors">Layanan Kami</a></li>
              <li><a href="#spesialist" className="hover:text-[#FAD4CB] transition-colors">Spesialisasi</a></li>
              <li><a href="#harga" className="hover:text-[#FAD4CB] transition-colors">Daftar Harga</a></li>
              <li><a href="#faq" className="hover:text-[#FAD4CB] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-wider mb-4" style={{ fontFamily: 'Nunito' }}>Kontak</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285183144307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#A08070] hover:text-[#FAD4CB] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#9E7256] flex-shrink-0" />
                <span>0851-8314-4307 (WhatsApp)</span>
              </a>
              <p className="text-xs text-[#A08070] flex items-start gap-2" style={{ fontFamily: 'Poppins' }}>
                <span className="text-[#9E7256] mt-0.5">🐹</span>
                Harga fleksibel & bisa nego. Fast response!
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B4E3D]">
          <p>© {new Date().getFullYear()} Taskhammy. Semua hak dilindungi.</p>
          <p className="flex items-center gap-1.5" style={{ fontFamily: 'Nunito' }}>
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-[#F2A191] fill-[#F2A191]" /> untuk semua pejuang akademik 🐹
          </p>
        </div>

      </div>
    </footer>
  );
};
