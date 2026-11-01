const mongoose = require('mongoose');

const bioPenulisSchema = new mongoose.Schema({
  nama: String,
  pekerjaan: String,
}, { _id: false });

const articleSchema = new mongoose.Schema({
  judul: { type: String, required: [true, 'judul wajib diisi'], trim: true },
  articlesId: { type: String, required: [true, 'articlesId wajib diisi'], unique: true, trim: true },
  bioPenulis: bioPenulisSchema,
  categoriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', articleSchema);