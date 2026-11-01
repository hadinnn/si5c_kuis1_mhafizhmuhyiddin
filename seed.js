// seed.js
// Mengisi basis data dengan 3 kategori dan 25 artikel. Aman dijalankan berulang:
// data lama dihapus dulu.
require('dotenv').config({ quiet: true });
const mongoose = require('mongoose');
const categories = require('./models/categoriesModel');
const Article = require('./models/articlesModel');

const judul = [
  'Manfaat Jalan Kaki',
  'Tips Tidur Berkualitas',
  'Pentingnya Sarapan',
  'Cara Mengelola Stres',
  'Pola Makan Seimbang',
  'Olahraga untuk Pemula',
  'Menjaga Kesehatan Mata',
  'Tips Belajar Efektif',
  'Membaca untuk Menambah Wawasan',
  'Cara Mengatur Waktu',
  'Belajar Bahasa Asing',
  'Pentingnya Menabung',
  'Tips Mengelola Uang',
  'Memulai Usaha Kecil',
  'Belanja Bijak di Internet',
  'Menjaga Kebersihan Rumah',
  'Mengurangi Sampah Plastik',
  'Merawat Tanaman Hias',
  'Wisata Alam di Indonesia',
  'Tips Memilih Destinasi Liburan',
  'Mengenal Kuliner Nusantara',
  'Sejarah Kopi di Indonesia',
  'Teknologi dalam Kehidupan',
  'Manfaat Membaca Buku',
  'Cara Menjaga Produktivitas',
];
const pekerjaan = ['Dokter', 'Guru', 'Perawat', 'Pengacara'];
const namaPenulis = [
  'Andi Pratama',
  'Budi Santoso',
  'Citra Lestari',
  'Dewi Anggraini',
  'Eko Saputra',
];

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Article.deleteMany({});
  await categories.deleteMany({});

  const category = await categories.insertMany([
    { kode: 'KE', nama: 'Kesehatan' },
    { kode: 'ED', nama: 'Edukasi' },
    { kode: 'EN', nama: 'Entertainment' },
  ]);

  const articleData = judul.map((judul, i) => ({
    judul,
    articlesId: String(2301001 + i),
    bioPenulis: {
      nama: namaPenulis[i % namaPenulis.length],
      pekerjaan: pekerjaan[i % pekerjaan.length],
    },
    categoriesId: category[i % category.length]._id,
  }));
  await Article.insertMany(articleData);

  console.log(`Seed selesai: ${category.length} kategori, ${articleData.length} artikel`);
  await mongoose.disconnect();
}

main().catch((err) => { console.error(err.message); process.exit(1); });