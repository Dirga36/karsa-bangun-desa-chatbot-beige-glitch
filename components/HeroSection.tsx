'use client';

import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Compass,
  CheckCircle2,
  TrendingUp,
  Map,
  Building2,
  Users2,
  Sparkles,
  Layers
} from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenChat = () => {
    // Scroll down to digital assistant highlight or trigger chat widget
    const chatContainer = document.querySelector('.n8n-chat-button') as HTMLElement;
    if (chatContainer) {
      chatContainer.click();
    } else {
      scrollToSection('kontak');
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAFAF9] font-plus">
      {/* Subtle Background Geometry & Radial Tones */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#166534]/5 rounded-full blur-3xl" />
        <div className="absolute top-36 right-10 w-80 h-80 bg-[#D97706]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest/10 forest-green text-xs font-bold uppercase tracking-wider border border-forest/20 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-forest animate-pulse" />
              <span>Mitra Strategis Desa Mandiri • Jawa Barat & Nasional</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold forest-green tracking-tight leading-[1.12]">
              Mewujudkan Desa Mandiri Berbasis{' '}
              <span className="earth-gold italic">Bukti</span> & Kearifan Lokal.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal max-w-xl">
              Mendampingi aparat desa, masyarakat, dan mitra Pentahelix dalam perancangan{' '}
              <strong className="font-bold text-stone-800">Master Plan Desa Wisata/Agro</strong>,{' '}
              tata kelola <strong className="font-bold text-stone-800">BUMDes</strong>, serta{' '}
              penguatan <strong className="font-bold text-stone-800">Koperasi Desa</strong> dengan{' '}
              pendekatan riset aksi partisipatif.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={() => scrollToSection('kontak')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-forest hover:bg-[#166534]/90 text-white font-bold text-base shadow-lg shadow-forest/20 transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>Mulai Pendampingan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleOpenChat}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-white border-2 border-stone-200 forest-green hover:border-forest/30 font-bold text-base shadow-soft transition-all duration-200 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 forest-green group-hover:scale-110 transition-transform" />
                <span>Tanya Asisten Digital</span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-earth/10 earth-gold px-2 py-0.5 rounded-md border border-earth/20">
                  AI 24/7
                </span>
              </button>
            </div>

            {/* Quick Badges / Values */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 forest-green shrink-0" />
                <span>Data Spasial & GIS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 forest-green shrink-0" />
                <span>Rantai Pasok Berkeadilan</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 forest-green shrink-0" />
                <span>Harmonisasi APBDes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard of Village Pillars & Metrics */}
          <div className="lg:col-span-5 relative">
            {/* Main Glass Card Container */}
            <div className="relative glass-card rounded-3xl p-6 sm:p-7 shadow-soft space-y-4">
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-stone-200/60 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-forest/10 forest-green border border-forest/15">
                    <Compass className="w-5 h-5 forest-green" />
                  </div>
                  <div>
                    <h3 className="font-extrabold forest-green text-sm">Framework Desa Mandiri</h3>
                    <p className="text-xs text-stone-500">Integrasi IDM & Kearifan Lokal</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold forest-green bg-forest/10 px-2.5 py-1 rounded-full border border-forest/20">
                  <Sparkles className="w-3 h-3 earth-gold" /> Model Teruji
                </span>
              </div>

              {/* 3 Strategic Key Focus Cards */}
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="p-3.5 rounded-2xl bg-white/90 hover:bg-white transition-all border border-stone-200/80 flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-forest/10 forest-green shrink-0 mt-0.5">
                    <Map className="w-4 h-4 forest-green" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold forest-green">Master Plan Desa Terpadu</h4>
                      <span className="text-[10px] font-semibold forest-green bg-forest/10 px-1.5 py-0.5 rounded">
                        Zonasi & Roadmap
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                      Cetak biru tata ruang Desa Wisata, Desa Agro, dan pemetaan aset komunal desa.
                    </p>
                  </div>
                </div>

                {/* Item 2 - Accent Highlight Card */}
                <div className="p-3.5 rounded-2xl bg-forest text-white border-none shadow-xl shadow-forest/20 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20 text-white shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">Koperasi Desa Merah Putih</h4>
                      <span className="text-[10px] font-bold text-amber-300 bg-black/20 px-1.5 py-0.5 rounded">
                        Anti-Tengkulak
                      </span>
                    </div>
                    <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                      Sentralisasi rantai pasok tani untuk memutus tengkulak & memaksimalkan SHU warga.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3.5 rounded-2xl bg-white/90 hover:bg-white transition-all border border-stone-200/80 flex items-start gap-3 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-earth/10 earth-gold shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4 earth-gold" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold forest-green">Mentoring APBDes & IDM</h4>
                      <span className="text-[10px] font-semibold earth-gold bg-earth/10 px-1.5 py-0.5 rounded">
                        Evidence-Based
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                      Audit kapasitas aparat & pemetaan aset komunal terpadu berbasis data lapangan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className="p-3.5 rounded-2xl bg-[#1A1A1A] text-white flex items-center justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative flex items-center gap-2.5">
                  <Users2 className="w-4 h-4 earth-gold shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">Kolaborasi Pentahelix</p>
                    <p className="text-[10px] text-stone-400">Pemerintah • Akademisi • Bisnis • Komunitas • Media</p>
                  </div>
                </div>
                <div className="relative text-right pl-2">
                  <span className="text-[10px] font-extrabold earth-gold bg-stone-800 px-2 py-0.5 rounded border border-stone-700">
                    5 Pilar
                  </span>
                </div>
              </div>

            </div>

            {/* Decorative Floating Badge */}
            <div className="absolute -bottom-4 -left-3 bg-white py-2 px-3.5 rounded-xl shadow-soft border border-stone-200 flex items-center gap-2 text-xs text-stone-800">
              <span className="w-2.5 h-2.5 rounded-full bg-forest" />
              <span className="font-bold forest-green">Bojongsoang, Kab. Bandung</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

