const express = require('express');

const {
  createCategoryHandler,
  getAllCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler
} = require('../controllers/category.controller');

const router = express.Router();

router.post('/api/categories', createCategoryHandler);
router.get('/api/categories', getAllCategoryHandler);
router.put('/api/categories/:id', updateCategoryHandler);
router.delete('/api/categories/:id', deleteCategoryHandler);

module.exports = router;