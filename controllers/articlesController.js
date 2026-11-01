const articles = require('../models/articlesModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
  try {
    const article = await articles.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const filter = {};
  if (req.query.kota) {
    filter['alamat.kota'] = String(req.query.kota);
  }
  const data = await articles.find(filter).populate('categoriesId');
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await articles.findById(req.params.id).populate('categoriesId');
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};

exports.update = async (req, res) => {
  const data = await articles.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after', runValidators: true }
  );
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await articles.findByIdAndDelete(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.status(204).send();
};