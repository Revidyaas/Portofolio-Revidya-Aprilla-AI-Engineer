# Revidya Aprilla Sandiva — Portfolio Website

Website portofolio profesional untuk **Revidya Aprilla Sandiva** (AI Engineer & Computer Vision Specialist) yang dibangun menggunakan React 19, TypeScript, Tailwind CSS, dan Vite.

---

## 🔥 Panduan Deploy ke Firebase Hosting

Proyek ini telah dikonfigurasi secara lengkap untuk **Firebase Hosting** dengan dukungan Single Page Application (SPA rewrites), caching aset statis, dan `base: '/'`.

### Prasyarat
Pastikan Anda telah menginstal **Node.js** dan **Firebase CLI**:
```bash
# Instal Firebase CLI secara global (jika belum ada)
npm install -g firebase-tools
```

---

### Langkah 1: Login ke Firebase
Jalankan perintah ini di terminal untuk menghubungkan akun Google Anda:
```bash
firebase login
```

---

### Langkah 2: Hubungkan Project Firebase (Inisialisasi)
Jika Anda sudah membuat project di [Firebase Console](https://console.firebase.google.com/):

```bash
# Pilih atau tambahkan project Firebase Anda
firebase use --add
```
*(Pilih project Firebase yang sudah Anda buat, lalu beri alias `default`)*

> **Catatan**: Berkas konfigurasi `firebase.json` dan `.firebaserc` sudah otomatis disiapkan di repositori ini dan siap pakai.

---

### Langkah 3: Build & Deploy
Jalankan perintah build dan deploy langsung dengan satu perintah:

```bash
# 1. Menggunakan npm script yang telah disiapkan:
npm run deploy:firebase

# ATAU jalankan perintah manual:
npm run build
firebase deploy --only hosting
```

Setelah proses selesai, URL website Anda akan langsung aktif di:
👉 `https://<project-id>.web.app`  
👉 `https://<project-id>.firebaseapp.com`

---

## 🤖 Otomasi Deploy via GitHub Actions (Opsional)
Jika Anda ingin website otomatis ter-deploy setiap kali melakukan `git push` ke GitHub:
1. Jalankan perintah otomatis Firebase:
   ```bash
   firebase init hosting:github
   ```
2. Ikuti instruksi di terminal untuk menghubungkan repositori GitHub Anda.
3. Workflow `.github/workflows/firebase-hosting.yml` sudah siap digunakan.

---

## 🛠️ Pengembangan Lokal (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server lokal
npm run dev

# 3. Test build produksi
npm run build

# 4. Pratinjau lokal
npm run preview
```

---

## 📂 Struktur Aset Statis
- `public/logo_unsri.png` — Logo resmi Universitas Sriwijaya (UNSRI)
- `public/Revidya_Aprilla_Sandiva_CV.pdf` — Berkas CV resmi
- `public/Sertif/` — Dokumen PDF sertifikat (McKinsey, NVIDIA, IBM, MikroTik)
- `public/images for document/` — Foto inspeksi conveyor belt dan grafik evaluasi mAP skripsi
- `firebase.json` — Konfigurasi rewrite SPA & header caching Firebase Hosting
- `.firebaserc` — Konfigurasi target project Firebase
