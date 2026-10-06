# Revidya Aprilla Sandiva — Portfolio Website

Website portofolio profesional untuk **Revidya Aprilla Sandiva** (AI Engineer & Computer Vision Specialist) yang dibangun menggunakan React 19, TypeScript, Tailwind CSS, dan Vite.

---

## 🚀 Panduan Hosting ke GitHub Pages

Proyek ini telah dikonfigurasi secara otomatis untuk **GitHub Pages** menggunakan **GitHub Actions** (`.github/workflows/deploy.yml`) dan base path relatif (`./`) sehingga dapat berjalan langsung baik di root domain maupun subdirektori repositori.

### Langkah 1: Buat Repositori Baru di GitHub
1. Buka [github.com/new](https://github.com/new).
2. Buat repositori baru (misal: `portfolio` atau `revidyaa.github.io`).
3. Pilih opsi **Public**.

### Langkah 2: Hubungkan & Push Proyek ke GitHub
Buka terminal pada direktori proyek ini dan jalankan perintah berikut:

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Buat commit pertama
git commit -m "Deploy Revidya Aprilla Sandiva portfolio to GitHub Pages"

# Ganti branch ke main
git branch -M main

# Hubungkan ke repository GitHub Anda (ganti URL dengan repo Anda)
git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPO-ANDA>.git

# Push ke GitHub
git push -u origin main
```

### Langkah 3: Aktifkan GitHub Pages via GitHub Actions
1. Di halaman repositori GitHub Anda, klik tab **Settings** (Pengaturan).
2. Di bilah sisi kiri, klik **Pages**.
3. Pada bagian **Build and deployment**:
   - Di bawah **Source**, pilih opsi: **GitHub Actions**.
4. Selesai! GitHub Actions akan secara otomatis menjalankan workflow `.github/workflows/deploy.yml`, melakukan build, dan mempublikasikan website Anda.
5. URL website Anda akan muncul di halaman tersebut:  
   `https://<username>.github.io/<nama-repo>/`

---

## 🛠️ Pengembangan Lokal (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server lokal
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Pratinjau build produksi lokal
npm run preview
```

---

## 📂 Struktur Aset Statis
- `public/logo_unsri.png` — Logo resmi Universitas Sriwijaya (UNSRI)
- `public/Revidya_Aprilla_Sandiva_CV.pdf` — Berkas CV resmi
- `public/Sertif/` — Dokumen PDF sertifikat (McKinsey, NVIDIA, IBM, MikroTik)
- `public/images for document/` — Foto inspeksi conveyor belt dan grafik evaluasi mAP skripsi
- `src/utils/assets.ts` — Helper resolver URL aset statis untuk kompatibilitas GitHub Pages
