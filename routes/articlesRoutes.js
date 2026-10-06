const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', articlesController.getAll);
router.get('/:id', articlesController.getById);
router.post('/', cekApiKey, articlesController.create);
router.put('/:id', cekApiKey, articlesController.update);
router.delete('/:id', cekApiKey, articlesController.remove);

module.exports = router;