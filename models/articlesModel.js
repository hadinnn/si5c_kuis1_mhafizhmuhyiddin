let articles = [
  { id: 1, judul: 'Mengenal REST API', isi: 'REST adalah gaya arsitektur ...', penulis: 'Nadia Putri', kategori: 'Teknologi', dipublikasikan: true},
  { id: 2, judul: 'Tragedi Dibalik Asap di Palembang', isi: 'Isi artikel tentang tragedi di Palembang', penulis: 'Aldi Wijaya', kategori: 'Tragedi', dipublikasikan: false },
];
let nextId = 3;

function getAll(kategori) {
  if (kategori) return articles.filter((m) => m.kategori === kategori);
  return articles;
}

function getById(id) {
  return articles.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  articles.push(baru);
  return baru;
}

function update(id, data) {
  const index = articles.findIndex((m) => m.id === id);
  if (index === -1) return null;
  articles[index] = { ...articles[index], ...data, id };
  return articles[index];
}

function remove(id) {
  const index = articles.findIndex((m) => m.id === id);
  if (index === -1) return false;
  articles.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };