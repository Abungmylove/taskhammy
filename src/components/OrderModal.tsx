import React, { useState } from 'react';
import { X, Calculator, MessageCircle, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

interface ServiceOption {
  id: string;
  name: string;
  category: 'tugas' | 'skripsi' | 'mentoring';
  unit: string;
  basePrice: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  // Tugas Umum
  { id: 'ppt', name: 'PPT Presentasi', category: 'tugas', unit: 'slide', basePrice: 5000 },
  { id: 'naskah_ppt', name: 'Naskah Presentasi PPT', category: 'tugas', unit: 'slide', basePrice: 5000 },
  { id: 'parafrase', name: 'Parafrase Turnitin', category: 'tugas', unit: 'halaman', basePrice: 10000 },
  { id: 'turnitin', name: 'Cek Plagiasi Turnitin', category: 'tugas', unit: 'file', basePrice: 2000 },
  { id: 'makalah', name: 'Makalah / Laporan / Artikel', category: 'tugas', unit: 'halaman', basePrice: 20000 },
  { id: 'esai', name: 'Review / Resume / Esai', category: 'tugas', unit: 'halaman', basePrice: 20000 },
  { id: 'jawab_soal', name: 'Jawab Soal Tugas', category: 'tugas', unit: 'halaman', basePrice: 10000 },
  { id: 'ketik_nulis', name: 'Ketik / Tulis Tangan', category: 'tugas', unit: 'halaman', basePrice: 10000 },
  { id: 'layouting', name: 'Layouting & Merapikan Dokumen', category: 'tugas', unit: 'halaman', basePrice: 10000 },
  { id: 'desain', name: 'Poster / Biorander / Infografis', category: 'tugas', unit: 'gambar', basePrice: 15000 },
  { id: 'terjemahan', name: 'Terjemahan (ID ↔ EN)', category: 'tugas', unit: 'halaman', basePrice: 20000 },

  // Skripsi
  { id: 'judul_skripsi', name: 'Judul & Research Plan', category: 'skripsi', unit: 'topik', basePrice: 100000 },
  { id: 'abstrak', name: 'Abstrak Skripsi (ID & EN)', category: 'skripsi', unit: 'dokumen', basePrice: 5000 },
  { id: 'bab1', name: 'Skripsi Bab 1 (Pendahuluan)', category: 'skripsi', unit: 'bab', basePrice: 500000 },
  { id: 'bab2', name: 'Skripsi Bab 2 (Tinjauan Pustaka)', category: 'skripsi', unit: 'bab', basePrice: 500000 },
  { id: 'bab3', name: 'Skripsi Bab 3 (Metodologi)', category: 'skripsi', unit: 'bab', basePrice: 500000 },
  { id: 'bab4', name: 'Skripsi Bab 4 (Hasil & Diskusi)', category: 'skripsi', unit: 'bab', basePrice: 500000 },
  { id: 'bab5', name: 'Skripsi Bab 5 (Simpulan & Saran)', category: 'skripsi', unit: 'bab', basePrice: 500000 },
  { id: 'mendeley', name: 'Formatting + Daftar Pustaka Mendeley', category: 'skripsi', unit: 'file', basePrice: 30000 },
  { id: 'sidang_ppt', name: 'PPT + Naskah Sidang Skripsi', category: 'skripsi', unit: 'paket', basePrice: 250000 },

  // Mentoring
  { id: 'skripsi_buddy', name: 'Mentoring Skripsi Buddy (Meet 1on1)', category: 'mentoring', unit: 'sesi meet', basePrice: 100000 },
  { id: 'bioinformatika', name: 'Ambil Data Bioinformatika & Konsultasi', category: 'mentoring', unit: 'proyek', basePrice: 150000 },
];

const PAYMENT_METHODS = [
  { id: 'qris', name: 'QRIS (Semua Bank & E-Wallet: GoPay, OVO, DANA, BCA, Mandiri, dll)', icon: '📱', badge: 'Hanya QRIS' },
];

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultService || 'ppt');
  const [quantity, setQuantity] = useState<number>(5);
  const [deadline, setDeadline] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState<string>('qris');

  if (!isOpen) return null;

  const currentService = SERVICE_OPTIONS.find((s) => s.id === selectedServiceId) || SERVICE_OPTIONS[0];
  const estimatedPrice = currentService.basePrice * Math.max(1, quantity);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const paymentLabel = PAYMENT_METHODS.find((p) => p.id === selectedPayment)?.name || 'QRIS';

    const message = `Halo Taskhammy! 🐹 Mau konsultasi & order tugas nih:

👤 *Nama:* ${customerName.trim() || 'Teman Belajar'}
📚 *Layanan:* ${currentService.name}
🔢 *Jumlah/Volume:* ${quantity} ${currentService.unit}
📅 *Deadline:* ${deadline || 'Fleksibel / Sesuai Kesepakatan'}
💳 *Rencana Pembayaran:* ${paymentLabel}
💵 *Estimasi Awal:* ${formatRupiah(estimatedPrice)} (Bisa nego)

📝 *Catatan Khusus:*
${notes.trim() ? notes.trim() : '-'}

Mohon info ketersediaan slot & penawaran terbaiknya ya kak! Terima kasih 🌸✨`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6285183144307?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFF9F3] border-2 border-[#E8D5C0] rounded-3xl card-cute overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#9E7256] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">
              🐹
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-white">FORM ORDER & ESTIMASI</h3>
              <p className="text-white/80 text-xs" style={{ fontFamily: 'Poppins' }}>
                Hitung biaya tugasmu secara transparan, bisa langsung nego!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendToWhatsApp} className="p-5 sm:p-7 space-y-6">
          {/* Step 1: Pilih Layanan & Jumlah */}
          <div className="bg-[#FAF0E6] border border-[#E8D5C0] p-4 sm:p-5 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-[#9E7256] font-bold text-sm" style={{ fontFamily: 'Nunito' }}>
              <Calculator className="w-4 h-4" />
              <span>1. PILIH LAYANAN & VOLUME TUGAS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#3D2B1F] mb-1.5" style={{ fontFamily: 'Nunito' }}>
                  Jenis Tugas / Layanan
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-white border border-[#E8D5C0] rounded-xl px-3.5 py-2.5 text-sm text-[#3D2B1F] font-semibold focus:outline-none focus:ring-2 focus:ring-[#9E7256]"
                >
                  <optgroup label="📝 Tugas Kuliah & Sekolah">
                    {SERVICE_OPTIONS.filter((s) => s.category === 'tugas').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {formatRupiah(s.basePrice)}/{s.unit}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🎓 Bimbingan Skripsi & TA">
                    {SERVICE_OPTIONS.filter((s) => s.category === 'skripsi').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {formatRupiah(s.basePrice)}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="🔬 Mentoring & Bioinformatika">
                    {SERVICE_OPTIONS.filter((s) => s.category === 'mentoring').map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} — {formatRupiah(s.basePrice)}/{s.unit}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D2B1F] mb-1.5" style={{ fontFamily: 'Nunito' }}>
                  Jumlah ({currentService.unit})
                </label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white border border-[#E8D5C0] rounded-xl px-3.5 py-2.5 text-sm text-[#3D2B1F] font-bold focus:outline-none focus:ring-2 focus:ring-[#9E7256]"
                />
              </div>
            </div>

            {/* Total Kalkulasi Box */}
            <div className="bg-white border border-[#E8D5C0] p-4 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs text-[#A08070]">Estimasi Biaya Awal:</p>
                <p className="font-display text-2xl text-[#9E7256]">{formatRupiah(estimatedPrice)}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 bg-[#F5A623]/20 text-[#7A5540] border border-[#F5A623]/40 rounded-full px-2.5 py-1 text-xs font-bold" style={{ fontFamily: 'Nunito' }}>
                  <Sparkles className="w-3 h-3" /> Bisa Nego!
                </span>
                <p className="text-[11px] text-[#A08070] mt-1">Harga akhir fleksibel sesuai deadline</p>
              </div>
            </div>
          </div>

          {/* Step 2: Data Pemesan & Deadline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#3D2B1F] mb-1.5" style={{ fontFamily: 'Nunito' }}>
                Nama / Panggilan Kamu
              </label>
              <input
                type="text"
                placeholder="Contoh: Sarah / Mahasiswa Sem 7"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-white border border-[#E8D5C0] rounded-xl px-3.5 py-2.5 text-sm text-[#3D2B1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9E7256]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#3D2B1F] mb-1.5" style={{ fontFamily: 'Nunito' }}>
                Target Deadline
              </label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full bg-white border border-[#E8D5C0] rounded-xl px-3.5 py-2.5 text-sm text-[#3D2B1F] focus:outline-none focus:ring-2 focus:ring-[#9E7256]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3D2B1F] mb-1.5" style={{ fontFamily: 'Nunito' }}>
              Catatan / Instruksi Khusus Dosen/Guru (Opsional)
            </label>
            <textarea
              rows={2}
              placeholder="Contoh: Butuh format APA style 7th edition, referensi jurnal 5 tahun terakhir..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-white border border-[#E8D5C0] rounded-xl px-3.5 py-2 text-sm text-[#3D2B1F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9E7256]"
            />
          </div>

          {/* Step 3: Pilihan Payment Method (Hanya QRIS) */}
          <div>
            <label className="block text-xs font-bold text-[#3D2B1F] mb-2" style={{ fontFamily: 'Nunito' }}>
              METODE PEMBAYARAN (ONLY QRIS):
            </label>
            <div className="p-4 rounded-2xl border-2 border-[#9E7256] bg-[#FAF0E6] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E8D5C0] flex items-center justify-center text-2xl shadow-xs">
                  📱
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-[#3D2B1F]" style={{ fontFamily: 'Nunito' }}>
                      QRIS — Pembayaran Instan
                    </span>
                    <span className="text-[10px] font-bold bg-[#9E7256] text-white px-2 py-0.5 rounded-full">
                      Hanya QRIS
                    </span>
                  </div>
                  <p className="text-xs text-[#6B4E3D] mt-0.5" style={{ fontFamily: 'Poppins' }}>
                    Mendukung semua aplikasi e-wallet (GoPay, OVO, DANA, ShopeePay) & m-Banking (BCA, Mandiri, BRI, BNI, dll).
                  </p>
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-[#9E7256] flex-shrink-0 ml-2" />
            </div>
          </div>

          {/* Security / Guarantee notice */}
          <div className="flex items-start gap-2 text-xs text-[#7A5540] bg-[#FAF0E6] border border-[#E8D5C0] p-3 rounded-xl">
            <ShieldAlert className="w-4 h-4 text-[#9E7256] flex-shrink-0 mt-0.5" />
            <span>
              <strong>Pembayaran Aman:</strong> Pembayaran dilakukan setelah kesepakatan ruang lingkup & deadline dengan admin. DP atau pelunasan via transfer terverifikasi.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 btn-yellow flex items-center justify-center gap-2 py-3.5 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Kirim Pesanan ke WhatsApp Admin
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-2xl border-2 border-[#E8D5C0] text-[#6B4E3D] hover:bg-[#FAF0E6] font-bold text-sm transition-colors"
              style={{ fontFamily: 'Nunito' }}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
