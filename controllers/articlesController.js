const articlesModel = require('../models/articlesModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { kategori } = req.query;
  res.json(articlesModel.getAll(kategori));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = articlesModel.getById(id);
  if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { judul, isi, penulis, kategori, dipublikasikan } = req.body;
  if (!judul || !isi || !penulis || !kategori) return next(errorHttp(400, 'Semua field wajib diisi'));

  const baru = articlesModel.create({ judul, isi, penulis, kategori, dipublikasikan: true || false });
  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const hasil = articlesModel.update(id, req.body);
  if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(hasil);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = articlesModel.remove(id);
  if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.status(204).send();
};