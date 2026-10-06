const articlesModel = require('./models/articlesModel');

console.log('Semua data:', articlesModel.getAll());
console.log('Filter Informatika:', articlesModel.getAll('Informatika'));
console.log('Cari id 1:', articlesModel.getById(1));

const baru = articlesModel.create({ judul: 'Artikel Baru', isi: 'Isi artikel baru', penulis: 'John Doe', kategori: 'Teknologi', dipublikasikan: true });
console.log('Setelah create:', baru);

console.log('Update id 1:', articlesModel.update(1, { kategori: 'Tragedi' }));
console.log('Remove id 2:', articlesModel.remove(2));
console.log('Data akhir:', articlesModel.getAll());