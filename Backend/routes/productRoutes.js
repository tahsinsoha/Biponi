const express = require('express');
const cors = require('cors');
const router = express.Router();
const bodyParser = require("body-parser")
const upload = require("../middleware/upload");
router.use(cors())
router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
const {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
  getProductByid
} = require('../controllers/productController');
const { Router } = require('express');

router.route('/').get(getProducts).post(
 upload.any(),setProduct);
router.route('/:id').delete(deleteProduct).put(updateProduct).get(getProductByid);

module.exports = router;
