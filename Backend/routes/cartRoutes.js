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
  getCarts,
  setCart,
  updateCart,
  deleteCart,
  getCartByid
} = require('../controllers/cartController');
const { Router } = require('express');

router.route('/').get(getCarts).post(setCart);
router.route('/:id').delete(deleteCart).put(updateCart).get(getCartByid);

module.exports = router;
