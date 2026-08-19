'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  FileSpreadsheet,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Search,
  Building2,
  ArrowUpRight,
  Sparkles,
  Layers,
  Scale
} from 'lucide-react';

export default function EvidenceResearchSection() {
  const [activeCase, setActiveCase] = useState<'bojong-kulur' | 'simpang-gaung'>('bojong-kulur');

  return (
    <section id="riset" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            <span>Landasan Riset & Studi Kasus Lapangan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Intervensi Berakar dari Data Empiris & Kajian Mendalam
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Karsa Bangun Desa tidak menerapkan formula generik. Setiap strategi diuji melalui 
            kajian ilmiah lapangan, analisis rantai pasok komparatif, dan rekam jejak studi kasus nyata.
          </p>
        </div>

        {/* Case Study Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl border border-stone-200">
            <button
              type="button"
              onClick={() => setActiveCase('bojong-kulur')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeCase === 'bojong-kulur'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-emerald-900'
              }`}
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Transformasi Desa Bojong Kulur</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveCase('simpang-gaung')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                activeCase === 'simpang-gaung'
                  ? 'bg-emerald-800 text-white shadow-md'
                  : 'text-stone-700 hover:text-emerald-900'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span>Rantai Pasok Kelapa Simpang Gaung</span>
            </button>
          </div>
        </div>

        {/* Dynamic Case Study Container */}
        {activeCase === 'bojong-kulur' ? (
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm animate-in fade-in duration-300">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & Challenges */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    <span className="p-1 rounded bg-emerald-100">Studi Kasus 01</span>
                    <span>Kabupaten Bogor, Jawa Barat</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                    Transformasi Tata Kelola & Resiliensi Komunal Desa Bojong Kulur
                  </h3>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  Bojong Kulur merupakan desa perbatasan dengan kepadatan penduduk urban fringe yang sangat tinggi 
                  serta menghadapi tantangan kerentanan bencana banjir tahunan akibat luapan Sungai Cileungsi & Cikeas.
                </p>

                {/* Problem vs Intervention Box */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-rose-200/80 space-y-1">
                    <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      Tantangan Awal:
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Fragmentasi modal sosial warga perumahan vs kampung, sistem peringatan dini manual yang lambat, 
                      dan ketidakselarasan alokasi pos APBDes untuk mitigasi kebencanaan terpadu.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-900 text-white space-y-1">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Intervensi Strategis Karsa Bangun Desa:
                    </h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Penerapan Participatory Action Research (PAR) untuk membangun sistem relawan terkoordinasi (KP2C), 
                      digitalisasi pemantauan tinggi muka air (TMA), dan penataan regulasi APBDes tanggap bencana.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Outcomes & Measurable Metrics */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4 shadow-xs">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-800" />
                    <span>Dampak & Capaian Berbasis Bukti:</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Zero Casualty & Evakuasi Cepat</h5>
                        <p className="text-[11px] text-stone-600">
                          Mekanisme early warning system berbasis WhatsApp broadcast dan telemetri sensor menurunkan waktu respon tanggap darurat warga hingga 70%.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Harmonisasi RPJMDes & APBDes</h5>
                        <p className="text-[11px] text-stone-600">
                          Reorientasi belanja desa untuk infrastruktur penahan tanggul, pompa air komunal, dan posko logistik siaga warga.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Model Rujukan Desa Tanggap Bencana Nasional</h5>
                        <p className="text-[11px] text-stone-600">
                          Kemandirian komunitas Bojong Kulur menjadi benchmark percontohan pengelolaan risiko bencana perkotaan di Indonesia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-center justify-between">
                  <span className="font-semibold">
                    Kunci Keberhasilan: Menggabungkan data sensor sains dengan modal sosial gotong royong warga.
                  </span>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm animate-in fade-in duration-300">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Context & Challenges */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                    <span className="p-1 rounded bg-amber-100">Studi Kasus 02</span>
                    <span>Indragiri Hilir, Riau</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                    Riset Rantai Pasok Petani Kelapa Simpang Gaung
                  </h3>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed">
                  Kawasan perkebunan kelapa rakyat di Simpang Gaung menghadapi dilema struktural puluhan tahun: 
                  petani bekerja keras namun nilai tambah terbesar dinikmati oleh jaringan tengkulak dan spekulan perantara.
                </p>

                {/* Problem vs Intervention Box */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-rose-200/80 space-y-1">
                    <h4 className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-600" />
                      Tantangan Awal:
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Sistem timbang sepihak, jerat utang ijon sebelum masa panen, harga kelapa butir yang sangat fluktuatif, 
                      serta ketiadaan sarana pengeringan kopra mandiri di tingkat desa.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-900 text-white space-y-1">
                    <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Intervensi Strategis Karsa Bangun Desa:
                    </h4>
                    <p className="text-xs text-emerald-100 leading-relaxed">
                      Penyusunan audit rantai nilai mikro, inisiasi Koperasi Desa Merah Putih sebagai sentra timbang bersama, 
                      serta pembuatan jalur langsung ke off-taker industri pengolahan kelapa dan arang briket.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Outcomes & Measurable Metrics */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4 shadow-xs">
                  <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-800" />
                    <span>Dampak & Capaian Berbasis Bukti:</span>
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Kenaikan Margin Harga Petani +38%</h5>
                        <p className="text-[11px] text-stone-600">
                          Memutus 2-3 rantai perantara sehingga harga beli di tingkat kebun meningkat stabil tanpa potongan timbangan sepihak.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Pemberian Dana Talangan Koperasi</h5>
                        <p className="text-[11px] text-stone-600">
                          Skema kas bergulir koperasi desa menghapus ketergantungan petani pada pinjaman rentenir ijon.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-xs font-bold text-stone-900">Hilirisasi Sabut & Kopra Putih</h5>
                        <p className="text-[11px] text-stone-600">
                          Pemberdayaan kelompok perempuan dan pemuda desa untuk memproses sabut kelapa (cocopeat/cocofiber) bernilai ekspor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
                  <span className="font-semibold">
                    Kunci Keberhasilan: Konsolidasi kuantitas panen melalui koperasi mengembalikan daya tawar petani di hadapan industri.
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 3 Core Scientific Methodologies of KBD */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="p-2 rounded-lg bg-emerald-100 text-emerald-900 w-fit">
              <Search className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Participatory Action Research (PAR)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Masyarakat desa bukan objek pasif melainkan peneliti utama atas realitas sosial dan potensi desanya sendiri.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-900 w-fit">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Geographic Information System (GIS)</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Analisis spasial akurat untuk delineasi tata guna lahan, peta kerentanan bencana, dan penetapan koridor agro-ekowisata.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="p-2 rounded-lg bg-stone-200 text-stone-900 w-fit">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-stone-900 text-sm">Permodelan Ekonometrika Mikro</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Simulasi kelayakan investasi BUMDes, analisis break-even point, dan proyeksi nilai tambah komoditas tani.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
