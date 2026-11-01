const categories = require('../models/categoriesModel');

exports.create = async (req, res) => {
    const categories = await categories.create(req.body);
    res.status(201).json(categories);
};

exports.getAll = async (req, res) => {
  res.json(await categories.find());
};