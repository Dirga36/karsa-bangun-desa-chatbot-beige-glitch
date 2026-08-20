'use client';

import React, { useState, useEffect } from 'react';
import { Sprout, Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Pilar Pentahelix', href: '#pentahelix' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Landasan Riset', href: '#riset' },
    { name: 'Cek Kesiapan IDM', href: '#simulasi-idm' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-plus ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-soft py-3 border-b border-stone-200/90'
          : 'bg-[#FAFAF9]/80 backdrop-blur-md py-4 border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold forest-green tracking-tight text-lg sm:text-xl font-plus">
                  KARSA BANGUN DESA
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#166534]/10 forest-green border border-[#166534]/20">
                  Desa Mandiri
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#166534]" /> Bojongsoang, Kab. Bandung
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#166534] transition-colors py-1 relative hover:font-semibold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-cta"
              href="https://wa.me/6285770003549?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20mengenai%20pendampingan%20desa."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-white hover:bg-[#166534]/90 font-semibold text-sm shadow-sm hover:shadow-forest transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Konsultasi Desa</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus:outline-hidden"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <div className="py-2 border-b border-stone-100 mb-2">
            <p className="text-xs font-bold forest-green uppercase tracking-wider">
              Lembaga Pendampingan Desa
            </p>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-stone-800 hover:bg-[#166534]/10 hover:text-[#166534] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-3 border-t border-stone-100 flex flex-col gap-2">
            <a
              href="https://wa.me/6285770003549?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20mengenai%20pendampingan%20desa."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-forest text-white font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Konsultasi WhatsApp (0857-7000-3549)</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#166534]" />
              <span>Pendampingan Berbasis Bukti & Kearifan Lokal</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

