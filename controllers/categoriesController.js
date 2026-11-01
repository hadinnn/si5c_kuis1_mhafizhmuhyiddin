const categories = require('../models/categoriesModel');

exports.create = async (req, res) => {
  try {
    const categories = await categories.create(req.body);
    res.status(201).json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await categories.find());
};