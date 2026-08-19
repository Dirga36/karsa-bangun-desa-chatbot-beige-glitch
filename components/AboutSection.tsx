'use client';

import React, { useState } from 'react';
import {
  Landmark,
  GraduationCap,
  Briefcase,
  Users,
  Megaphone,
  CheckCircle2,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';

export default function AboutSection() {
  const [activePentahelix, setActivePentahelix] = useState<number | null>(null);

  const pentahelixData = [
    {
      id: 1,
      title: 'Pemerintah',
      role: 'Regulasi & Kebijakan',
      icon: Landmark,
      color: 'emerald',
      bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-800 text-white',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      description:
        'Harmonisasi regulasi, pengawalan kebijakan berbasis kearifan lokal, serta sinkronisasi RPJMDes dan APBDes dengan target Indeks Desa Membangun (IDM).',
      outputs: [
        'Peraturan Desa (Perdes) Tata Ruang & BUMDes',
        'Sinkronisasi RPJMDes & APBDes Akuntabel',
        'Legalitas Aset Komunal & Tanah Kas Desa',
      ],
    },
    {
      id: 2,
      title: 'Akademisi',
      role: 'Riset & Evidence-Based Policy',
      icon: GraduationCap,
      color: 'amber',
      bgColor: 'bg-amber-50 text-amber-900 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description:
        'Penyediaan data saintifik, pemetaan GIS spasial mikro, riset aksi partisipatif (PAR), dan audit ekonomi pedesaan untuk pengambilan keputusan terukur.',
      outputs: [
        'Analisis Spasial & Daya Dukung Lingkungan',
        'Model Ekonometrika & Rantai Nilai Komoditas',
        'Pelatihan Aparatur Berkelanjutan',
      ],
    },
    {
      id: 3,
      title: 'Sektor Bisnis',
      role: 'Akses Pasar & CSR',
      icon: Briefcase,
      color: 'stone',
      bgColor: 'bg-stone-100 text-stone-900 border-stone-300',
      iconBg: 'bg-stone-800 text-white',
      badgeColor: 'bg-stone-200 text-stone-900 border-stone-300',
      description:
        'Membuka akses off-taker industri yang adil, penyaluran investasi berdampak sosial, serta pengalihan dana CSR ke program pemberdayaan produktif jangka panjang.',
      outputs: [
        'Kontrak Pembelian Hasil Tani Tanpa Perantara',
        'Inkubasi Unit Usaha BUMDes Berkelanjutan',
        'Program Kemitraan Tanggung Jawab Sosial (CSR)',
      ],
    },
    {
      id: 4,
      title: 'Komunitas',
      role: 'Koperasi & Warga Akar Rumput',
      icon: Users,
      color: 'emerald',
      bgColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-700 text-white',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      description:
        'Mobilisasi warga sebagai subjek utama pembangunan melalui penguatan kelembagaan Koperasi Desa Merah Putih, kelompok tani, pemuda, dan perempuan.',
      outputs: [
        'Kemandirian Agregasi Panen & Sentra Logistik',
        'Distribusi Sisa Hasil Usaha (SHU) Berkeadilan',
        'Penguatan Solidaritas & Gotong Royong Warga',
      ],
    },
    {
      id: 5,
      title: 'Media',
      role: 'Transparansi & Diseminasi',
      icon: Megaphone,
      color: 'amber',
      bgColor: 'bg-amber-50 text-amber-900 border-amber-200',
      iconBg: 'bg-amber-700 text-white',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      description:
        'Publikasi capaian desa secara transparan, promosi potensi Desa Wisata dan produk unggulan ke tingkat regional hingga nasional, serta edukasi publik.',
      outputs: [
        'Kampanye Digital Komoditas Lokal Unggulan',
        'Publikasi Narasi Transformasi & Good Practices',
        'Transparansi Informasi Publik Desa',
      ],
    },
  ];

  return (
    <section id="tentang" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-800" />
            <span>Profil & Paradigma Pendampingan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Menjembatani Riset Empiris & Kedaulatan Warga Pedesaan
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Berbasis di <strong className="text-stone-900 font-semibold">Bojongsoang, Kabupaten Bandung</strong>, 
            Karsa Bangun Desa hadir sebagai mitra independen yang memadukan ketelitian akademis, kepekaan sosiologis, 
            dan eksekusi lapangan untuk mengubah potensi terpendam pedesaan menjadi kemandirian nyata.
          </p>
        </div>

        {/* Core Values / Pillar Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Berbasis Bukti (Evidence-Based)</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Setiap rekomendasi master plan dan strategi BUMDes didasarkan pada audit spasial GIS, analisis rantai nilai mikro, dan diagnosis kebutuhan aktual warga.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Kearifan Lokal yang Berdaulat</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Menghormati tatanan adat, modal sosial gotong royong, dan ekologi komunal sehingga modernisasi desa tidak mencabut identitas budaya setempat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 text-white flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-stone-900 text-lg">Keberlanjutan Ekosistem</h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Fokus pada pembentukan kapasitas mandiri kelembagaan lokal agar desa mampu beroperasi mandiri dan terus bertumbuh pasca-periode pendampingan.
            </p>
          </div>
        </div>

        {/* Pentahelix Section */}
        <div id="pentahelix" className="pt-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 border-b border-stone-200 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Kolaborasi Multipihak</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                Model Kolaborasi Pentahelix Pedesaan
              </h3>
            </div>
            <p className="text-sm text-stone-500 max-w-md">
              Sinergi 5 aktor kunci untuk memastikan kebijakan, permodalan, riset, warga, dan diseminasi terhubung dalam satu ekosistem orkestrasi.
            </p>
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {pentahelixData.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = activePentahelix === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActivePentahelix(item.id)}
                  className={`relative p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white shadow-lg ring-2 ring-emerald-700/30 -translate-y-1'
                      : 'bg-stone-50 hover:bg-white hover:shadow-md'
                  } border-stone-200`}
                >
                  <div className="space-y-3.5">
                    {/* Header Icon + Number */}
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${item.iconBg} shadow-xs`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black text-stone-400">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h4 className="font-extrabold text-stone-900 text-base">
                        {item.title}
                      </h4>
                      <span className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                        {item.role}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Key Outputs */}
                  <div className="pt-4 mt-4 border-t border-stone-200/80 space-y-1.5">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">
                      Fokus Capaian:
                    </p>
                    {item.outputs.map((out, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="leading-tight">{out}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pentahelix Bottom Note */}
          <div className="mt-8 p-4 rounded-xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="p-2 rounded-lg bg-emerald-800 text-amber-400 font-bold">
                ✓
              </span>
              <span>
                <strong>Karsa Bangun Desa</strong> bertindak sebagai fasilitator netral yang mengorkestrasi dialog dan eksekusi lintas kelima pilar ini.
              </span>
            </div>
            <a
              href="#kontak"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
            >
              <span>Diskusikan Kemitraan</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
