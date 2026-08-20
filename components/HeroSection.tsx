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

        </div>
      </div>
    </section>
  );
}


