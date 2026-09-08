import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Spesialist', href: '#spesialist' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''} bg-[#9E7256]`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src={logoImg} alt="Taskhammy" className="w-9 h-9 rounded-full object-cover border-2 border-white/50 group-hover:scale-110 transition-transform" />
            <span className="font-display text-white text-xl tracking-wide">TASKHAMMY</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white font-heading font-700 text-sm transition-colors hover:underline underline-offset-4 decoration-yellow-300"
                style={{ fontFamily: 'Nunito', fontWeight: 700 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6285183144307"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-yellow text-sm font-bold px-5 py-2"
            >
              CHAT WA
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#7A5540] px-4 py-4 space-y-3 border-t border-white/20">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white font-bold py-1"
              style={{ fontFamily: 'Nunito' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/6285183144307"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-yellow block text-center text-sm font-bold mt-2"
          >
            CHAT WA SEKARANG
          </a>
        </div>
      )}
    </header>
  );
};

