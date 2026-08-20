'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Sparkles,
  Bot,
  Send,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  BookOpen,
  TrendingUp,
  Building2,
  Phone,
  Layers,
  FileSpreadsheet,
  MapPin
} from 'lucide-react';

export default function HeroSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-[#FAFAF9] font-plus">
      {/* Subtle Background Geometry & Organic Radial Tones */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#166534]/6 rounded-full blur-3xl" />
        <div className="absolute top-36 right-10 w-96 h-96 bg-[#D97706]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#166534]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Digital Assistant Hero Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 forest-green text-xs font-bold uppercase tracking-wider border border-forest/20 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#166534]" />
              </span>
              <span>Asisten Digital Karsa Bangun Desa • Aktif 24/7</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold forest-green tracking-tight leading-[1.14]">
              Konsultasi Pembangunan & Tata Kelola Desa{' '}
              <span className="earth-gold italic">Cerdas</span> Kapan Saja.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-2xl">
              Layanan asisten digital cerdas Karsa Bangun Desa siap mendampingi kepala desa, perangkat desa, pengelola BUMDes, dan akademisi dalam menjawab regulasi, simulasi IDM, tata ruang desa, hingga model ekonomi pedesaan berbasis bukti empiris.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="open-digital-assistant-cta"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-forest hover:bg-[#166534]/90 text-white font-bold text-base shadow-lg shadow-forest/25 hover:shadow-xl transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <Bot className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Mulai Chat Sekarang</span>
                <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/6285770003549?text=Halo%20Tim%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20langsung%20dengan%20pendamping%20ahli."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white border-2 border-stone-200 forest-green hover:border-forest/40 font-bold text-sm shadow-soft transition-all duration-200 group cursor-pointer"
              >
                <Phone className="w-4 h-4 earth-gold" />
                <span>Narahubung Ahli (WA)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Chat Interface Preview Demonstration */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Glow & Background Frame */}
            <div className="relative glass-card rounded-3xl p-5 sm:p-6 border border-stone-200/90 shadow-soft space-y-4">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-stone-200/70 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-forest flex items-center justify-center text-white shadow-forest">
                    <Bot className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold forest-green text-sm">Asisten Karsa Bangun Desa</h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[11px] text-stone-500">Pendamping Digital Desa Mandiri</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-forest bg-forest/10 px-2 py-0.5 rounded-full border border-forest/20">
                  AI Powered
                </span>
              </div>

              {/* Chat Messages Body */}
              <div className="space-y-3 py-2 text-xs">
                
                {/* Assistant Message 1 */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-forest text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    K
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-xs bg-stone-100 text-stone-800 space-y-1 max-w-[88%] border border-stone-200/60 leading-relaxed">
                    <p>
                      Sampurasun! 👋 Saya Asisten Digital Karsa Bangun Desa.
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3 rounded-2xl rounded-tr-xs bg-forest text-white max-w-[85%] shadow-xs leading-relaxed">
                    <p>
                      Desa kami ingin membuat Koperasi Desa Merah Putih untuk hasil panen padi warga. Bagaimana alur awalnya?
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    U
                  </div>
                </div>

                {/* Assistant Response with Bullet Steps */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-forest text-amber-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    K
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-xs bg-stone-100 text-stone-800 space-y-2 max-w-[90%] border border-stone-200/60 leading-relaxed">
                    <p className="font-semibold text-forest flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 earth-gold" />
                      3 Tahap Awal Pembentukan Koperasi:
                    </p>
                    <ol className="list-decimal pl-4 space-y-1 text-[11px] text-stone-700">
                      <li>
                        <strong>Pemetaan Kapasitas Panen:</strong> Sensus produksi padi harian/musiman dan identifikasi rantai tengkulak eksisting.
                      </li>
                      <li>
                        <strong>Musyawarah Desa Khusus (Musdessus):</strong> Kesepakatan kelembagaan, pembagian SHU, dan skema modal awal.
                      </li>
                      <li>
                        <strong>Integrasi Gudang & BUMDes:</strong> Penyiapan resi gudang dan off-taker pembeli pasti dengan harga adil.
                      </li>
                    </ol>
                  </div>
                </div>

              </div>
            </div>

            {/* Location Tag */}
            <div className="mt-3 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                <MapPin className="w-3.5 h-3.5 forest-green" />
                Sekretariat: Bojongsoang, Kab. Bandung, Jawa Barat
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


