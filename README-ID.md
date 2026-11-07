# Mulqi Berburu Target

Bundle skill native DeepSeek Harness untuk **intel rekrutmen berbasis
bukti dari sumber publik**. Satu skill terbungkus —
`mulqi-berburu-target` — memandu agen melalui alur riset
disipliner: temukan, investigasi, verifikasi, skor, laporkan.
**Berburu luas. Verifikasi ketat. Bertindak dengan bukti.**

Bundle ini adalah paket skill dan referensi, **bukan** agregator
lowongan, database lowongan live, layanan pencarian, scraper, atau
bot aplikasi. Hasil live bergantung pada tool pencarian dan
pembacaan halaman yang tersedia di sesi host.

## Apa yang dilakukan

Skill menjalankan 13 fase alur kerja — interpretasi, perencanaan,
penemuan, ekspansi, pencarian, ekstraksi, normalisasi, deduplikasi,
verifikasi, pencocokan, penilaian, pelaporan, dan aksi — di
12 mode berburu:

| Mode | Kegunaan |
|---|---|
| Quick Hunt | Pencarian fokus untuk satu peran dan lokasi |
| Deep Hunt | Riset lintas kategori dengan cakupan query/sumber |
| Global Hunt | Multi-negara, izin kerja, bahasa, mata uang, zona waktu |
| Executive Hunt | Peran kepemimpinan senior dan sumber eksekutif-search |
| Remote Hunt | Peran remote, kelayakan negara per lowongan |
| Hidden Hunt | Sinyal bisnis/perekrutan publik — dilaporkan sebagai indikasi, bukan lowongan |
| Corporate Hunt | Investigasi halaman karir/berita perusahaan target |
| CV Match Hunt | Mencocokkan bukti kandidat ke peran yang terkonfirmasi |
| Industry Hunt | Kosakata peran, skill, dan sumber spesifik industri |
| Verification Hunt | Audit postingan dan URL yang diberikan |
| Fresh Job Hunt | Prioritas publikasi terbaru, status aktif dicek terpisah |
| Strategic Career Hunt | Perbandingan nilai karier dan langkah berikutnya |

Materi pendukung yang disertakan:

- **Taksonomi sumber** — keluarga sumber global, Indonesia, korporat,
  sosial, dan institusional.
- **Playbook pencarian** — ekspansi query, paket multibahasa,
  buku besar cakupan.
- **Kerangka verifikasi** — tingkat V1–V5, triase sinyal penipuan,
  resolusi duplikat.
- **Model penilaian** — skor kualitas peluang, pencocokan kandidat,
  dan nilai strategis — masing-masing terpisah.
- **Template laporan** — catatan lowongan ringkas dan laporan intel
  lengkap.
- **Kebijakan OSINT etis** — batas sumber publik, privasi,
  keadilan, penanganan prompt-injection.
- **Panduan kompatibilitas tool** — perilaku tool yang tersedia
  dan batasan yang diketahui.
- **Kasus evaluasi** — 12 definisi skenario (case, prompt, grader)
  untuk meninjau perilaku skill.

## Kontrak operasi (ringkasan)

- Hanya melapor apa yang didukung tool dan sumber publik yang
  tersedia.
- Tiga status terpisah: **lowongan terpublikasi**,
  **indikasi lowongan tak terkonfirmasi**, dan **sinyal
  perekrutan terindikasi**.
- Setiap klaim penting membawa URL sumber dan catatan apa yang
  sebenarnya dibuktikan oleh sumber itu.
- `Tidak diungkapkan` untuk field yang tidak disebutkan,
  `Tidak diketahui` untuk fakta yang tidak bisa diverifikasi —
  tidak pernah disimpulkan.
- Tidak melewati sign-in, paywall, CAPTCHA, rate limit, atau
  kontrol platform.
- Tidak ada aksi eksternal (mengajukan, menghubungi, mengunggah
  CV) tanpa instruksi eksplisit terpisah untuk aksi tersebut.

## Persyaratan

- DeepSeek Harness **0.2.1-rc.2** (pin `engines.dsh` presisi).
- Node `^22.19.0 || >=24.0.0`.
- Tanpa dependensi runtime atau peer; tanpa langkah build.

## Instalasi

**Dari GitHub (disarankan):**

```bash
dsh plugin --profile <nama-profil> add github:mulqizamzam/mulqi-berburu-taget#main
```

**Dari direktori lokal:**

```bash
dsh plugin --profile <nama-profil> add /path/ke/mulqi-berburu-target
```

Setelah instalasi, bundle muncul di inventaris bundle profil.
Bundle baru mungkin aktif lewat HMR tanpa restart; mengganti
paket yang sudah terpasang memerlukan restart host untuk
memuat generasi modul yang baru.

## Penggunaan

Skill dirutekan otomatis dari katalog skill sesi saat permintaan
cocok dengan pencarian kerja, riset sinyal perekrutan, verifikasi
lowongan, tinjauan risiko penipuan, perbandingan peluang, atau
pencocokan CV ke peran. Panggilan langsung juga didukung
(`mulqi-berburu-target`). Tidak ada permukaan konfigurasi.

## Pemecahan masalah

- **Bundle di-skip saat boot** — versi host harus persis
  0.2.1-rc.2; release lain menolak pin `engines.dsh`
  (cek diagnostik `skippedBundles`, atau berilah exempti
  versi presisi dengan `dsh plugin --profile <nama> allow-version`).
- **Skill tidak ada di katalog** — pastikan komposisi host
  mencakup service skill (`dsh-skill`, `dsh-tool-skill`) dan
  restart host setelah instalasi.
- **Tidak ada hasil live** — skill ini level instruksi:
  tanpa tool pencarian/pembacaan halaman di sesi, skill
  menyajikan rencana query siap-jalan, bukan hasil. Ini
  perilaku yang diharapkan, bukan bug.

## Lisensi

MIT. Lihat [`LICENSE`](LICENSE).
