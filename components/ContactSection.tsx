'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    village: '',
    district: '',
    serviceTopic: 'Master Plan Desa Wisata & Agro',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message URL
    const textMsg = `Halo Tim Karsa Bangun Desa,

Saya mengajukan permohonan konsultasi pendampingan desa:
• Nama: ${formData.name}
• Jabatan/Instansi: ${formData.role || '-'}
• Desa & Wilayah: ${formData.village || '-'} (${formData.district || '-'})
• Topik Pendampingan: ${formData.serviceTopic}
• No. Kontak/WA: ${formData.phone}
• Catatan Tambahan: ${formData.message || '-'}

Mohon informasi langkah awal dan jadwal diskusi awal. Terima kasih.`;

    const waUrl = `https://wa.me/6285770003549?text=${encodeURIComponent(textMsg)}`;
    
    setIsSubmitted(true);
    // Open in new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-emerald-800" />
            <span>Pusat Konsultasi & Layanan Resmi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Mulai Transformasi Desa Bersama Karsa Bangun Desa
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Konsultasikan kebutuhan perancangan master plan, perbaikan rantai pasok tani, atau 
            penguatan tata kelola BUMDes desa Anda dengan tim pendamping kami.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Official Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-emerald-800 text-white">
                  <MapPin className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-900 text-lg">Sekretariat Lembaga</h3>
                  <p className="text-xs text-stone-500 font-medium">Karsa Bangun Desa</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Alamat Kantor:</strong>
                    <span>Bojongsoang, Kabupaten Bandung, Jawa Barat, Indonesia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Jam Pelayanan Konsultasi:</strong>
                    <span>Senin – Sabtu: 08.00 – 17.00 WIB (Kunjungan lapangan terjadwal)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0 mt-1" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">Email Korespondensi:</strong>
                    <a
                      href="mailto:karsabangundesa@gmail.com"
                      className="text-emerald-800 hover:underline font-medium"
                    >
                      karsabangundesa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Hotlines Card */}
            <div className="p-6 rounded-3xl bg-emerald-950 text-white space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Hotline WhatsApp Resmi</span>
                </h4>
                <span className="text-[10px] font-bold text-amber-400 bg-emerald-900 px-2 py-0.5 rounded border border-emerald-700">
                  Respon Cepat
                </span>
              </div>

              <p className="text-xs text-emerald-200/90 leading-relaxed">
                Hubungi narahubung kami secara langsung untuk audiensi formal, kunjungan desa, atau penyusunan Kerangka Acuan Kerja (KAK):
              </p>

              <div className="space-y-2.5">
                <a
                  href="https://wa.me/6285770003549?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20mengenai%20pendampingan%20desa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div>
                      <p className="text-xs font-bold text-white">0857-7000-3549</p>
                      <p className="text-[10px] text-emerald-300">Hotline Konsultasi 1 (Utama)</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="https://wa.me/6285280003548?text=Halo%20Karsa%20Bangun%20Desa,%20saya%20ingin%20konsultasi%20mengenai%20pendampingan%20desa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div>
                      <p className="text-xs font-bold text-white">0852-8000-3548</p>
                      <p className="text-[10px] text-emerald-300">Hotline Konsultasi 2 (Kemitraan & Riset)</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quality Commitment Badge */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-950 leading-relaxed">
                <strong>Integritas Akademis:</strong> Seluruh data spasial dan laporan keuangan desa diperlakukan dengan standar kerahasiaan institusi dan etika riset aksi.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-stone-50 rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-lg space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-stone-900">
                Formulir Permohonan Diskusi & Pendampingan
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Isi form di bawah ini untuk terhubung langsung dengan tim fasilitator Karsa Bangun Desa.
              </p>
            </div>

            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-900 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold">Permohonan Anda Berhasil Disiapkan!</p>
                  <p>WhatsApp telah dibuka dengan format pesan otomatis. Jika tidak terbuka, silakan klik tombol hotline di sebelah kiri.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Nama Lengkap <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. H. Rahmat Hidayat"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Jabatan / Instansi <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Kepala Desa / Direktur BUMDes / CSR"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Nama Desa / Kelurahan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Desa Sukamaju"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Kecamatan & Kabupaten
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bojongsoang, Kab. Bandung"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Fokus Pendampingan <span className="text-rose-600">*</span>
                  </label>
                  <select
                    value={formData.serviceTopic}
                    onChange={(e) => setFormData({ ...formData, serviceTopic: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  >
                    <option value="Master Plan Desa Wisata & Agro">
                      Master Plan Desa Wisata & Agro
                    </option>
                    <option value="Koperasi Desa Merah Putih & Rantai Pasok">
                      Koperasi Desa Merah Putih & Rantai Pasok
                    </option>
                    <option value="Mentoring APBDes & Indeks Desa Membangun (IDM)">
                      Mentoring APBDes & Indeks Desa Membangun (IDM)
                    </option>
                    <option value="Revitalisasi & Tata Kelola BUMDes">
                      Revitalisasi & Tata Kelola BUMDes
                    </option>
                    <option value="Kemitraan Pentahelix & Riset Spasial">
                      Kemitraan Pentahelix & Riset Spasial
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    No. WhatsApp Aktif <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Uraian Kebutuhan / Gambaran Masalah
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan potensi unggulan desa atau kendala yang dihadapi saat ini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-stone-900"
                />
              </div>

              <button
                type="submit"
                id="submit-consultation-form"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Kirim Permohonan Konsultasi (Direct WhatsApp)</span>
              </button>

              <p className="text-center text-[11px] text-stone-500">
                Pesan akan langsung diteruskan ke tim pendamping Karsa Bangun Desa (0857-7000-3549).
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
