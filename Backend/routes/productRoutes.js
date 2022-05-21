const express = require('express');
const router = express.Router();
const {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
  getProductByid
} = require('../controllers/productController');

router.route('/').get(getProducts).post(setProduct);
router.route('/:id').delete(deleteProduct).put(updateProduct).get(getProductByid);

module.exports = router;
