'use client';

import React from 'react';
import {
  Sprout,
  Phone,
  Mail,
  MapPin,
  Heart,
  ShieldCheck,
  ArrowUpRight,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800 font-plus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest flex items-center justify-center text-amber-300 border border-white/20 shadow-forest">
                <Sprout className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  Karsa Bangun Desa
                </span>
                <p className="text-xs text-amber-300 font-bold">
                  Mitra Pendampingan Desa Mandiri
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Lembaga pendampingan masyarakat dan pembangunan ekosistem pedesaan menuju Desa Mandiri. 
              Mengintegrasikan riset aksi partisipatif, data spasial GIS, model ekonomi koperasi berkeadilan, 
              dan kearifan lokal.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/KarsaBangunDesa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Karsa Bangun Desa"
                className="p-2.5 rounded-full bg-stone-900 text-stone-400 hover:text-amber-300 hover:bg-stone-800 border border-stone-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/KarsaBangunDesa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Karsa Bangun Desa"
                className="p-2.5 rounded-full bg-stone-900 text-stone-400 hover:text-amber-300 hover:bg-stone-800 border border-stone-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@KarsaBangunDesa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Karsa Bangun Desa"
                className="p-2.5 rounded-full bg-stone-900 text-stone-400 hover:text-amber-300 hover:bg-stone-800 border border-stone-800 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400 font-semibold">@KarsaBangunDesa</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#tentang" className="hover:text-amber-300 transition-colors">
                  Tentang Lembaga
                </a>
              </li>
              <li>
                <a href="#pentahelix" className="hover:text-amber-300 transition-colors">
                  Pilar Kolaborasi Pentahelix
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-amber-300 transition-colors">
                  Master Plan & Koperasi
                </a>
              </li>
              <li>
                <a href="#riset" className="hover:text-amber-300 transition-colors">
                  Studi Kasus Bojong Kulur & Riau
                </a>
              </li>
              <li>
                <a href="#simulasi-idm" className="hover:text-amber-300 transition-colors">
                  Kalkulator Kesiapan IDM
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-amber-300 transition-colors">
                  Pusat Konsultasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Base Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">
              Kontak & Alamat Resmi
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 forest-green shrink-0 mt-0.5 text-emerald-400" />
                <span>Bojongsoang, Kabupaten Bandung, Jawa Barat, Indonesia</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p>WhatsApp 1: 0857-7000-3549</p>
                  <p>WhatsApp 2: 0852-8000-3548</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>karsabangundesa@gmail.com</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://wa.me/6285770003549?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20mengenai%20pendampingan%20desa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-[#166534]/90 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Chat Langsung di WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Ethic Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {currentYear} <strong>Karsa Bangun Desa</strong>. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2 text-stone-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Pendampingan Berbasis Bukti & Kearifan Lokal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

