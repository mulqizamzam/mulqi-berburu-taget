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

## Contoh penggunaan nyata

Setiap prompt di bawah adalah input lengkap, siap salin-tempel.
Skill memilih mode paling sempit yang cocok secara otomatis;
sebutkan mode eksplisit untuk override.

### 1. Pencarian pekerjaan terfokus (Quick Hunt)

```text
Cari peran Senior DevOps Engineer di Singapura yang dipublikasikan
dalam 14 hari terakhir. Prioritaskan halaman karir resmi perusahaan.
Tampilkan URL sumber, tanggal publikasi, dan status aktif untuk
setiap hasil.
```

**Ekspektasi:** Tabel ringkas lowongan terkonfirmasi dengan
URL sumber, tanggal publikasi, dan tingkat verifikasi (V1–V5).
`Tidak diungkapkan` / `Tidak diketahui` jika data tidak ada —
tidak ada gaji atau tenggat yang diarangkan.

### 2. Verifikasi postingan tertentu (Verification Hunt)

```text
Periksa apakah lowongan ini asli:
https://careers.contoh.co.id/lowongan/12345
Verifikasi: apakah perusahaan nyata, URL aplikasi resmi,
listing aktif, dan apakah ada indikator penipuan?
```

**Ekspektasi:** Verifikasi per-field (perusahaan, listing, URL,
status) masing-masing dengan bukti dan tingkat kepercayaan.
Sinyal penipuan terisolasi di seksi risiko — tidak pernah
direkomendasikan sebagai lowongan valid.

### 3. Riset sinyal perekrutan (Hidden Hunt)

```text
Riset apakah Acme Corp sedang ekspansi ke Asia Tenggara dan
kemungkinan merekrut. Gunakan hanya sumber publik (berita,
laporan, aktivitas halaman karir). Pisahkan lowongan terkonfirmasi
dari sinyal terindikasi. Jangan laporkan hipotesis sebagai lowongan.
```

**Ekspektasi:** Sinyal perekrutan berlabel dengan URL sumber,
tanggal, dan catatan bukti singkat. Setiap item ditandai
**Sinyal perekrutan terindikasi — tidak ada lowongan terkonfirmasi**
kecuali ada postingan terpisah yang sedang aktif.

### 4. Cocokkan CV ke peran (CV Match Hunt)

```text
Bandingkan CV ini dengan tiga peran yang kamu temukan:
[tempel konten CV]
Tampilkan bukti untuk skor pencocokan, daftar persyaratan
yang dicover dan gap-nya, dan flag field yang hilang.
Jangan mengirim apa pun.
```

**Ekspektasi:** Skor pencocokan per-peran dengan faktor,
bobot, dan bukti. `Tidak dinilai` jika data kandidat
cukup. Tidak ada aplikasi dikirim tanpa instruksi eksplisit.

### 5. Pencarian remote global dengan constraint (Global Hunt)

```text
Cari peran Product Manager remote yang secara eksplisit menerima
pelamar berbasis di Indonesia. Cek izin kerja, persyaratan bahasa,
dan overlap zona waktu per posting. Mata uang dan gaji jika
dinyatakan — tidak konversi tanpa sumber rate.
```

**Ekspektasi:** Kelayakan negara per posting, constraint bahasa
dan zona waktu, gaji seperti dinyatakan dengan mata uang.
Field yang tidak bisa diverifikasi ditandai `Tidak diketahui`.

### 6. Tinjauan risiko penipuan (Verification Hunt)

```text
Lowongan ini meminta biaya pelatihan di muka $500 sebelum
onboarding. Nilai tingkat risiko penipuan dan apa yang akan
dilakukan pemberi kerja yang legit. Jangan klik link-nya.
```

**Ekspektasi:** Tingkat risiko (Rendah/Sedang/Tinggi/Kritis)
dengan bukti konkret. Langkah verifikasi aman. Tidak ada instruksi
untuk berinteraksi dengan posting berisiko.

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
