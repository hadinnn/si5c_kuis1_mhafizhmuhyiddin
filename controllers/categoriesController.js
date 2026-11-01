const categoriesModel = require('../models/CategoriesModel');

exports.create = async (req, res) => {
  const { kode, nama } = req.body;
  const categoriesModel = await categoriesModel.create({ kode, nama });
  res.status(201).json(categoriesModel);
};

exports.getAll = async (req, res) => {
  res.json(await categoriesModel.find().sort({ kode: 1 }));
};