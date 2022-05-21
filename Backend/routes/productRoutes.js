const express = require('express');
const cors = require('cors');
const router = express.Router();
router.use(cors())
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
