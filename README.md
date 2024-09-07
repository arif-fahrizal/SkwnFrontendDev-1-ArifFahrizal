# Furniture Landing Page

Proyek ini adalah **Furniture Landing Page** yang menampilkan carousel dinamis untuk memamerkan berbagai item furniture. Carousel memungkinkan pengguna untuk menavigasi berbagai produk, dengan efek hover interaktif untuk memperbesar item dan menampilkan detail produk. Dibangun menggunakan **HTML**, **CSS**, dan **jQuery**, halaman ini mengambil data produk dari API dan menyediakan pengalaman pengguna yang responsif dan menarik.

## Fitur

- **Carousel Dinamis**: Menampilkan item furniture yang diambil dari API eksternal.
- **Desain Responsif**: Menyesuaikan dengan berbagai ukuran layar termasuk ponsel, tablet, dan desktop.
- **Efek Hover Interaktif**: Memperbesar item yang aktif dan menampilkan detail produk saat hover.
- **Animasi Halus**: Termasuk transisi halus, efek ease-in-out, dan animasi untuk navigasi carousel.
- **Integrasi API**: Mengambil data dari [Mock API](https://66dc7a6747d749b72acbace6.mockapi.io/furniture).

## Cara Memulai Proyek

Untuk memulai proyek ini, ikuti langkah-langkah berikut:

1. **Clone Repository**

   Clone repository ke mesin lokal Anda menggunakan perintah berikut:

   ```bash
   git clone https://github.com/your-username/furniture-landing-page.git
   ```

2. **Masuk ke Direktori Proyek**

   Ubah direktori kerja Anda ke folder proyek:

   ```bash
   cd furniture-landing-page
   ```

3. **Buka Proyek**

   Buka file `index.html` di browser pilihan Anda untuk melihat halaman depan:

   ```bash
   open index.html
   ```

4. **Instal Dependensi**

   Proyek ini tidak memerlukan dependensi tambahan. Cukup membuka `index.html` di browser Anda sudah cukup untuk melihat proyek ini.

## Penggunaan

1. **Navigasi Carousel**: Gunakan tombol sebelumnya dan selanjutnya untuk menggulir item furniture.
2. **Efek Hover**: Arahkan mouse ke produk untuk melihat versi yang diperbesar dan melihat detail produk seperti nama dan harga.
3. **Tata Letak Responsif**: Halaman menyesuaikan dengan berbagai ukuran layar untuk memastikan pengalaman pengguna yang baik di perangkat mobile, tablet, dan desktop.

## Endpoint API

Data furniture diambil dari endpoint API berikut:

- `GET`: https://66dc7a6747d749b72acbace6.mockapi.io/furniture

Struktur Respon Contoh:

```json
[
  {
    "id": "1",
    "nama": "Und Chair",
    "harga": "329",
    "image": "https://image-link.com/1.png"
  },
  ...
]
```

## Struktur File

```
furniture-landing-page/
├── assets/               # Aset gambar dan ikon
│   └── (gambar Anda di sini)
├── css/                  # Gaya kustom
│   └── style.css
├── js/                   # JavaScript dan jQuery
│   └── script.js
├── index.html            # File HTML utama
└── README.md             # File readme proyek
```

## Kustomisasi

- **Endpoint API**: Ubah endpoint API di `script.js` jika Anda ingin mengambil data dari sumber lain.
- **Styling**: Modifikasi `style.css` untuk menyesuaikan tampilan dan nuansa halaman depan.
- **JavaScript**: Perbarui `script.js` untuk menambah atau memodifikasi fungsionalitas, seperti animasi atau perilaku carousel.

Silakan sesuaikan README ini dengan detail spesifik dan tambahan bagian sesuai kebutuhan.
