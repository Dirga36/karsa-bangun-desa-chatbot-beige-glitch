'use client';

import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building,
  RotateCcw,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface Question {
  id: string;
  category: 'IKS (Sosial)' | 'IKE (Ekonomi)' | 'IKL (Lingkungan)';
  question: string;
  weight: number;
}

const questions: Question[] = [
  {
    id: 'q1',
    category: 'IKS (Sosial)',
    question: 'Desa telah memiliki pemetaan data aset komunal & mitigasi kerentanan warga yang terdokumentasi rapi.',
    weight: 15,
  },
  {
    id: 'q2',
    category: 'IKS (Sosial)',
    question: 'Aparat desa rutin melibatkan kelompok pemuda & perempuan dalam musyawarah perencanaan desa (Musrenbangdes).',
    weight: 15,
  },
  {
    id: 'q3',
    category: 'IKE (Ekonomi)',
    question: 'BUMDes atau Koperasi Desa telah berbadan hukum aktif dan memiliki unit usaha yang menghasilkan PADes rutin.',
    weight: 20,
  },
  {
    id: 'q4',
    category: 'IKE (Ekonomi)',
    question: 'Petani/pelaku usaha desa memiliki akses rantai pasok langsung atau sentra agregasi hasil bumi tanpa dominasi tengkulak.',
    weight: 20,
  },
  {
    id: 'q5',
    category: 'IKL (Lingkungan)',
    question: 'Desa memiliki Master Plan tata ruang/zonasi wilayah yang melindungi sumber mata air, hutan, dan lahan produktif.',
    weight: 15,
  },
  {
    id: 'q6',
    category: 'IKL (Lingkungan)',
    question: 'Terdapat sistem peringatan dini atau kesiapsiagaan komunitas terhadap potensi bencana alam/perubahan iklim.',
    weight: 15,
  },
];

export default function IdmAssessmentWidget() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [villageName, setVillageName] = useState<string>('');
  const [districtName, setDistrictName] = useState<string>('');

  const toggleAnswer = (id: string) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Calculate score
  const totalScore = questions.reduce((acc, q) => {
    return acc + (answers[q.id] ? q.weight : 0);
  }, 0);

  let statusLabel = 'Desa Sangat Tertinggal / Tertinggal';
  let statusColor = 'bg-rose-100 text-rose-900 border-rose-300';
  let recommendation =
    'Prioritas Mendesak: Perlu audit menyeluruh kapasitas aparatur, restrukturisasi APBDes ke sektor produktif dasar, serta pendampingan inisiasi BUMDes/Koperasi awal.';

  if (totalScore >= 80) {
    statusLabel = 'Kesiapan Desa Mandiri Tinggi (Kandidat Akselerasi)';
    statusColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    recommendation =
      'Prioritas Strategis: Hilirisasi produk komoditas unggulan melalui Koperasi Desa, perluasan Master Plan Ekowisata/Agro skala regional, dan kemitraan off-taker industri modern.';
  } else if (totalScore >= 50) {
    statusLabel = 'Desa Berkembang Menuju Maju';
    statusColor = 'bg-amber-100 text-amber-900 border-amber-300';
    recommendation =
      'Prioritas Strategis: Penataan kelembagaan Koperasi Desa untuk memotong rantai tengkulak, audit aset komunal, dan harmonisasi pos APBDes dengan indikator IDM.';
  }

  const waMessage = `Halo Karsa Bangun Desa, saya telah melakukan Simulasi IDM Mandiri untuk ${
    villageName || 'Desa Kami'
  } (${districtName || 'Kecamatan/Kabupaten'}). Skor Kesiapan: ${totalScore}/100 (${statusLabel}). Kami ingin mendiskusikan program pendampingan yang tepat.`;

  return (
    <section id="simulasi-idm" className="py-20 lg:py-28 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-800 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Diagnostik Desa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Cek Kesiapan & Simulasi IDM Menuju Desa Mandiri
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Evaluasi kilat 6 indikator kunci ketahanan sosial, ekonomi, dan lingkungan untuk mengidentifikasi 
            celah pendampingan strategis bagi desa Anda.
          </p>
        </div>

        {/* Diagnostic Form Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200">
          <form onSubmit={handleCalculate} className="space-y-6">
            
            {/* Village identity inputs */}
            <div className="grid sm:grid-cols-2 gap-4 pb-4 border-b border-stone-100">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Nama Desa (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Desa Bojongsoang / Simpang Gaung"
                  value={villageName}
                  onChange={(e) => setVillageName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900 placeholder:text-stone-400"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Kecamatan / Kabupaten (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Kab. Bandung / Kab. Bogor"
                  value={districtName}
                  onChange={(e) => setDistrictName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900 placeholder:text-stone-400"
                />
              </div>
            </div>

            {/* Questions Checklist */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Pilih Indikator yang Sudah Terpenuhi di Desa Anda:
              </p>
              {questions.map((q) => {
                const isChecked = !!answers[q.id];
                return (
                  <label
                    key={q.id}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-150 ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-500/80 shadow-xs'
                        : 'bg-stone-50 hover:bg-stone-100/80 border-stone-200'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleAnswer(q.id)}
                      className="mt-1 w-4 h-4 rounded text-emerald-800 focus:ring-emerald-700 accent-emerald-800"
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-800">
                          {q.category}
                        </span>
                        <span className="text-[10px] text-stone-500 font-semibold">
                          Bobot: +{q.weight} Poin
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">
                        {q.question}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all duration-150 active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Analisis Hasil Diagnostik</span>
              </button>

              {submitted && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 font-semibold text-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulangi Simulasi</span>
                </button>
              )}
            </div>

          </form>

          {/* Results Box */}
          {submitted && (
            <div className="mt-8 pt-6 border-t border-stone-200 space-y-5 animate-in fade-in duration-300">
              <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
                  <div>
                    <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                      Hasil Evaluasi Kesiapan Mandiri
                    </span>
                    <h3 className="text-xl font-extrabold text-white">
                      {villageName ? `Profil: ${villageName}` : 'Estimasi Kesiapan Desa Anda'}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-3xl font-black text-amber-400">{totalScore}</span>
                    <span className="text-stone-400 text-sm"> / 100 Poin</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-300">Status Klasifikasi:</span>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded border ${statusColor}`}>
                      {statusLabel}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-800/80 p-3.5 rounded-xl border border-stone-700">
                    <strong className="text-white font-semibold">Rekomendasi Aksi: </strong>
                    {recommendation}
                  </p>
                </div>

                {/* Consultation trigger with formatted pre-fill */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/6285770003549?text=${encodeURIComponent(waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs shadow-md transition-all"
                  >
                    <span>Konsultasikan Hasil via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-stone-400">
                    Tim Karsa Bangun Desa siap menyusun roadmap tindak lanjut.
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
