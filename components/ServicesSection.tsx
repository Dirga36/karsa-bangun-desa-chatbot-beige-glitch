'use client';

import React, { useState } from 'react';
import {
  Map,
  TrendingUp,
  Building,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileCheck,
  Layers,
  Scale,
  ShieldCheck,
  Coins,
  Compass,
  BarChart3
} from 'lucide-react';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      id: 1,
      tag: 'Cetak Biru Tata Ruang',
      title: 'Master Plan Desa Wisata & Desa Agro',
      icon: Map,
      badgeColor: 'bg-forest/10 forest-green border-forest/20',
      shortDesc:
        'Penyusunan dokumen master plan komprehensif berbasis data spasial GIS, daya dukung lingkungan, dan studi kelayakan ekonomi 5-10 tahun.',
      overview:
        'Menyusun cetak biru tata kelola ruang dan zonasi wilayah desa untuk memaksimalkan potensi agrikultur, ekowisata, dan amenitas publik tanpa merusak ekologi setempat.',
      keyPillars: [
        {
          title: 'Pemetaan Spasial & Topografi GIS',
          desc: 'Pengukuran akurat batas wilayah, zonasi budidaya tani, koridor konservasi, dan delineasi kawasan komersial desa.',
        },
        {
          title: 'Perencanaan Ekowisata & Agro-Tourism',
          desc: 'Perancangan atraksi wisata berbasis kearifan lokal, homestay terintegrasi warga, dan paket wisata edukasi alam.',
        },
        {
          title: 'Analisis Kelayakan Finansial & ROI',
          desc: 'Kalkulasi proyeksi arus kas, analisis break-even point, dan estimasi sumbangan ke Pendapatan Asli Desa (PADes).',
        },
        {
          title: 'Harmonisasi Regulasi & Dokumen Perdes',
          desc: 'Penyelarasan dengan RTRW Kabupaten serta penyusunan Peraturan Desa terkait zonasi dan perlindungan aset.',
        },
      ],
      deliverables: [
        'Buku Master Plan & Dokumen Teknis Desain',
        'Peta Tematik Spasial Beresolusi Tinggi (GIS & CAD)',
        'Rancangan Peraturan Desa (Perdes Tata Ruang)',
        'Roadmap Implementasi Bertahap 5 Tahun',
      ],
    },
    {
      id: 2,
      tag: 'Kedaulatan Ekonomi Tani',
      title: 'Koperasi Desa Merah Putih & Rantai Pasok',
      icon: TrendingUp,
      badgeColor: 'bg-earth/10 earth-gold border-earth/20',
      shortDesc:
        'Sentralisasi rantai pasok komoditas pertanian untuk memutus jerat tengkulak dan mendistribusikan Sisa Hasil Usaha (SHU) kembali ke petani.',
      overview:
        'Membangun sistem rantai pasok mandiri dari hulu ke hilir. Koperasi bertindak sebagai sentra agregasi hasil bumi, penyedia sarana produksi murah, dan negosiator kontrak off-taker industri.',
      keyPillars: [
        {
          title: 'Agregasi Panen & Sentra Penimbangan Bersama',
          desc: 'Mekanisme timbang jujur, uji kadar air/kualitas terstandar, dan pencatatan komoditas real-time.',
        },
        {
          title: 'Pemutusan Rantai Ijon & Tengkulak',
          desc: 'Penyediaan modal kerja talangan koperasi berbunga rendah untuk membebaskan petani dari jerat utang rentenir.',
        },
        {
          title: 'Kemitraan Kontrak Off-Taker Industri',
          desc: 'Menghubungkan langsung koperasi desa dengan pabrik pengolahan, eksportir, dan jaringan pasar modern.',
        },
        {
          title: 'Tata Kelola SHU & Digitalisasi Koperasi',
          desc: 'Sistem pembukuan modern dan pembagian laba yang transparan serta adil bagi setiap anggota kelompok tani.',
        },
      ],
      deliverables: [
        'Standard Operating Procedure (SOP) Rantai Pasok',
        'Struktur Kelembagaan Koperasi Berbadan Hukum',
        'Dashboard Digital Pencatatan Panen & Anggota',
        'Draft Perjanjian Kerjasama (MoU) dengan Off-Taker',
      ],
    },
    {
      id: 3,
      tag: 'Kapasitas Aparatur & Akuntabilitas',
      title: 'Mentoring APBDes & Indeks Desa Membangun (IDM)',
      icon: Building,
      badgeColor: 'bg-forest/10 forest-green border-forest/20',
      shortDesc:
        'Audit kapasitas aparatur desa, pemetaan aset komunal terpadu, serta akselerasi skor IDM dari status Berkembang/Maju menuju Desa Mandiri.',
      overview:
        'Mendampingi perangkat desa dalam tata kelola anggaran berbasis kinerja. Kami memastikan setiap rupiah Dana Desa dialokasikan tepat sasaran pada sektor produktif dan pengentasan kerentanan.',
      keyPillars: [
        {
          title: 'Diagnosis & Optimalisasi Skor IDM',
          desc: 'Intervensi terarah pada Indeks Ketahanan Sosial (IKS), Ekonomi (IKE), dan Lingkungan (IKL) untuk naik ke status Mandiri.',
        },
        {
          title: 'Audit & Penataan Aset Komunal Desa',
          desc: 'Inventarisasi tanah kas desa, sumber mata air, hutan komunal, dan aset produktif desa agar terlindungi secara legal.',
        },
        {
          title: 'Harmonisasi APBDes Berbasis Hasil',
          desc: 'Penyusunan anggaran belanja yang efisien, mengurangi belanja seremonial, dan memperbesar porsi belanja produktif warga.',
        },
        {
          title: 'Klinik Tata Usaha & Kepatuhan Regulasi',
          desc: 'Bimbingan teknis intensif pencegahan maladministrasi dan peningkatan transparansi informasi kepada publik.',
        },
      ],
      deliverables: [
        'Laporan Diagnosis Gap & Roadmap IDM Mandiri',
        'Buku Register Inventarisasi Aset Komunal Desa',
        'Matriks Rekomendasi Alokasi APBDes Berbasis Bukti',
        'Modul Pelatihan Tata Kelola untuk Perangkat Desa',
      ],
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Diagnostik Lapangan & Pemetaan Spasial',
      desc: 'Pengumpulan data primer, wawancara warga, survey drone GIS, dan audit baseline IDM serta aset komunal.',
    },
    {
      step: '02',
      title: 'Desain Master Plan & Instrumen Kebijakan',
      desc: 'Penyusunan draf master plan, permodelan kelayakan bisnis, harmonisasi RPJMDes, dan rancangan Perdes.',
    },
    {
      step: '03',
      title: 'Penguatan Kelembagaan & Agregasi',
      desc: 'Pelatihan pengurus BUMDes/Koperasi, standardisasi SOP rantai pasok, dan mediasi kemitraan off-taker.',
    },
    {
      step: '04',
      title: 'Monitoring Dampak & Kemandirian',
      desc: 'Evaluasi berkala kenaikan pendapatan petani, dividen PADes, serta skor IDM menuju predikat Desa Mandiri.',
    },
  ];

  return (
    <section id="layanan" className="py-20 lg:py-28 bg-[#FAFAF9] border-b border-stone-200/80 font-plus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/10 forest-green text-xs font-bold uppercase tracking-wider border border-forest/20">
            <Layers className="w-3.5 h-3.5 forest-green" />
            <span>Program & Layanan Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold forest-green tracking-tight">
            Solusi Menyeluruh untuk Ekosistem Pedesaan Mandiri
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Kombinasi pendampingan teknis tata ruang, rekayasa rantai pasok ekonomi rakyat, 
            dan penguatan tata kelola birokrasi desa dengan metodologi teruji.
          </p>
        </div>

        {/* Interactive Service Selector Tabs */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400 px-1 mb-2">
              Pilih Pilar Layanan:
            </p>
            {services.map((srv, index) => {
              const IconComponent = srv.icon;
              const isCurrent = selectedService === index;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setSelectedService(index)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-200 border flex items-start gap-4 cursor-pointer ${
                    isCurrent
                      ? 'bg-forest text-white shadow-forest border-forest ring-2 ring-forest/30 scale-[1.01]'
                      : 'glass-card text-stone-800 hover:bg-white border-stone-200/90 shadow-soft'
                  }`}
                >
                  <div
                    className={`p-3 rounded-2xl shrink-0 ${
                      isCurrent
                        ? 'bg-white/20 text-amber-300'
                        : 'bg-forest/10 forest-green border border-forest/15'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? 'bg-black/20 text-amber-200'
                          : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {srv.tag}
                    </span>
                    <h3 className="font-extrabold text-base leading-snug">
                      {srv.title}
                    </h3>
                    <p
                      className={`text-xs line-clamp-2 leading-relaxed ${
                        isCurrent ? 'text-white/80' : 'text-stone-500'
                      }`}
                    >
                      {srv.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown of Selected Service */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 shadow-soft border border-stone-200/90 space-y-6">
            {/* Active Service Header */}
            <div className="border-b border-stone-200/60 pb-5 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-bold forest-green bg-forest/10 px-3 py-1 rounded-full border border-forest/20">
                  {services[selectedService].tag}
                </span>
                <span className="text-xs text-stone-500 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 forest-green" />
                  Pendampingan Terstruktur
                </span>
              </div>
              <h3 className="text-2xl font-extrabold forest-green">
                {services[selectedService].title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {services[selectedService].overview}
              </p>
            </div>

            {/* Core Implementation Modules */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                <Compass className="w-4 h-4 forest-green" />
                <span>Komponen Kerja Utama:</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {services[selectedService].keyPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/90 border border-stone-200/80 space-y-1 shadow-xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-forest text-white flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <h5 className="font-bold forest-green text-xs leading-tight">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-stone-500 leading-relaxed pl-7">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables / Output */}
            <div className="p-4 rounded-2xl bg-forest/5 border border-forest/15 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider forest-green flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 forest-green" />
                <span>Dokumen & Output Nyata:</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {services[selectedService].deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-800">
                    <CheckCircle2 className="w-3.5 h-3.5 forest-green shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`https://wa.me/6285770003549?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                  services[selectedService].title
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-forest hover:bg-[#166534]/90 text-white font-bold text-xs shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Konsultasikan Program Ini</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
              <span className="text-xs text-stone-500 font-medium">
                Penyusunan proposal & Terms of Reference (TOR) gratis
              </span>
            </div>

          </div>

        </div>

        {/* 4-Stage Methodology Roadmap */}
        <div className="pt-8 border-t border-stone-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider earth-gold">
              Metodologi Pendampingan
            </span>
            <h3 className="text-2xl font-extrabold forest-green">
              Alur 4 Tahap Menuju Kemandirian Desa
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Pendekatan terukur dari riset diagnostik hingga transfer kapasitas kepada pengurus lokal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((wf, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl glass-card border border-stone-200/80 space-y-3 relative group hover:border-forest/40 hover:shadow-soft transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-forest/20 group-hover:text-forest transition-colors">
                    {wf.step}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-earth" />
                </div>
                <h4 className="font-bold forest-green text-sm leading-snug">
                  {wf.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

