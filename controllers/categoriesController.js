const categories = require('../models/categoriesModel');

exports.create = async (req, res) => {
    const { kode, nama } = req.body;
    const category = await categories.create({ kode, nama });
    res.status(201).json(category);
};

exports.getAll = async (req, res) => {
  res.json(await categories.find());
};