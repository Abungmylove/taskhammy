import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stay in the Game strip — like reference */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10 mb-10">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="Hamster" className="w-16 h-16 rounded-full object-cover border-2 border-[#E91E8C]" />
            <div>
              <h3 className="font-display text-2xl text-white">STAY ON TOP OF<br />YOUR TASKS!</h3>
              <p className="text-white/50 text-xs mt-1" style={{fontFamily:'Poppins'}}>Subscribe untuk tips & info promo terbaru 🐹</p>
            </div>
          </div>
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            CHAT WA
          </a>
        </div>

        {/* Nav Links — like reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-10 border-b border-white/10">
          <div>
            <h4 className="font-display text-[#E91E8C] text-sm mb-3">LAYANAN</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#layanan" className="hover:text-white transition-colors">Tugas Umum</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Skripsi Lengkap</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Desain Kreatif</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Terjemahan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[#E91E8C] text-sm mb-3">SPESIALIST</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#spesialist" className="hover:text-white transition-colors">Biologi & MIPA</a></li>
              <li><a href="#spesialist" className="hover:text-white transition-colors">Farmasi & Gizi</a></li>
              <li><a href="#spesialist" className="hover:text-white transition-colors">Bahasa Asing</a></li>
              <li><a href="#spesialist" className="hover:text-white transition-colors">Bioinformatika</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[#E91E8C] text-sm mb-3">HARGA</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#harga" className="hover:text-white transition-colors">Pricelist Tugas</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Harga Skripsi</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Paket Mentoring</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-[#E91E8C] text-sm mb-3">KONTAK</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="https://wa.me/6285183144307" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MessageCircle className="w-3 h-3" /> WhatsApp
                </a>
              </li>
              <li><span>0851-8314-4307</span></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 pt-2">
          <p>© {new Date().getFullYear()} Taskhammy. All rights reserved.</p>
          <p className="flex items-center gap-1" style={{fontFamily:'Nunito'}}>
            Made with <Heart className="w-3 h-3 text-[#E91E8C] fill-[#E91E8C] mx-1" /> for pejuang akademik 🐹
          </p>
        </div>

      </div>
    </footer>
  );
};

