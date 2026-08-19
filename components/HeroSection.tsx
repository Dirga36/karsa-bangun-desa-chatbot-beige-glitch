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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-emerald-50/30">
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Lembaga Pendampingan Desa Terpadu • Jawa Barat & Nasional</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.18]">
              Mitra Strategis Mewujudkan{' '}
              <span className="text-emerald-800 underline decoration-amber-500/60 decoration-4 underline-offset-4">
                Desa Mandiri
              </span>{' '}
              Berbasis Bukti & Kearifan Lokal
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-2xl">
              Mendampingi aparat desa, masyarakat, dan mitra Pentahelix dalam perancangan{' '}
              <strong className="font-semibold text-stone-900">Master Plan Desa Wisata/Agro</strong>,{' '}
              tata kelola <strong className="font-semibold text-stone-900">BUMDes</strong>, serta{' '}
              penguatan <strong className="font-semibold text-stone-900">Koperasi Desa</strong> dengan{' '}
              pendekatan riset aksi partisipatif.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                onClick={() => scrollToSection('kontak')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Mulai Pendampingan</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={handleOpenChat}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-semibold text-base border border-stone-300 shadow-xs hover:border-emerald-700 transition-all duration-200 group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
                <span>Tanya Asisten Digital</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md border border-amber-300">
                  AI 24/7
                </span>
              </button>
            </div>

            {/* Quick Badges / Values */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Data Spasial & GIS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Rantai Pasok Adil</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">Harmonisasi APBDes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard of Village Pillars & Metrics */}
          <div className="lg:col-span-5 relative">
            {/* Main Interactive Card Container */}
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-stone-200 space-y-5">
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <Compass className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Framework Desa Mandiri</h3>
                    <p className="text-xs text-stone-500">Integrasi IDM & Kearifan Lokal</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Model Teruji
                </span>
              </div>

              {/* 3 Strategic Key Focus Cards */}
              <div className="space-y-3">
                {/* Item 1 */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50/50 transition-colors border border-stone-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-800 text-white shrink-0 mt-0.5">
                    <Map className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-stone-900">Master Plan Desa Terpadu</h4>
                      <span className="text-[10px] font-medium text-emerald-700 bg-emerald-100/60 px-1.5 py-0.5 rounded">
                        Zonasi & Roadmap
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                      Cetak biru tata ruang Desa Wisata, Desa Agro, dan pemetaan aset komunal desa.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50/50 transition-colors border border-stone-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-600 text-white shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-stone-900">Koperasi & BUMDes Berkelanjutan</h4>
                      <span className="text-[10px] font-medium text-amber-800 bg-amber-100/80 px-1.5 py-0.5 rounded">
                        Anti-Tengkulak
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                      Sentralisasi rantai pasok tani, agregasi hasil panen, dan distribusi SHU berkeadilan.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50/50 transition-colors border border-stone-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-800 text-white shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-stone-900">Akuntabilitas APBDes & IDM</h4>
                      <span className="text-[10px] font-medium text-stone-700 bg-stone-200 px-1.5 py-0.5 rounded">
                        Evidence-Based
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-0.5 leading-snug">
                      Audit kapasitas aparatur, optimalisasi dana desa, dan akselerasi skor kemandirian.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Card */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-900 to-emerald-950 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Users2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-100">Mitra Kolaborasi Pentahelix</p>
                    <p className="text-[11px] text-emerald-300/80">Pemerintah • Akademisi • Bisnis • Komunitas • Media</p>
                  </div>
                </div>
                <div className="text-right pl-2">
                  <span className="text-xs font-bold text-amber-400 bg-emerald-800/80 px-2 py-1 rounded border border-emerald-700">
                    5 Pilar
                  </span>
                </div>
              </div>

            </div>

            {/* Decorative Floating Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white py-2 px-3.5 rounded-xl shadow-lg border border-stone-200 flex items-center gap-2.5 text-xs text-stone-800">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="font-bold">Bojongsoang, Kab. Bandung</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
