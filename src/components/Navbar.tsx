import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Spesialist', href: '#spesialist' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDF6EE]/90 backdrop-blur-md border-b border-[#E8D5C0] py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-[#F2A191]/20 border-2 border-[#F2A191]/40 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🐹
            </div>
            <div>
              <span className="text-xl font-black text-[#3D2B1F] tracking-tight" style={{ fontFamily: 'Nunito' }}>
                Taskhammy
              </span>
              <p className="text-[10px] text-[#A08070] font-medium leading-none -mt-0.5">Jasa Tugas & Skripsi</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#6B4E3D]" style={{ fontFamily: 'Nunito' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#9E7256] transition-colors relative after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-[#F2A191] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6285183144307"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#9E7256] hover:bg-[#7A5540] text-white font-bold text-sm rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              style={{ fontFamily: 'Nunito' }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#6B4E3D] hover:text-[#9E7256] rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FDF6EE] border-b border-[#E8D5C0] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#6B4E3D] font-semibold hover:text-[#9E7256] transition-colors py-1"
                style={{ fontFamily: 'Nunito' }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#9E7256] text-white font-bold rounded-full block text-center text-sm"
            style={{ fontFamily: 'Nunito' }}
          >
            🐹 Chat WhatsApp Sekarang
          </a>
        </div>
      )}
    </header>
  );
};
