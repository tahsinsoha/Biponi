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
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
  getOrderByid,
 
} = require('../controllers/orderController');
const { Router } = require('express');

router.route('/').get(getOrders).post(setOrder);
router.route('/:id').delete(deleteOrder).put(updateOrder).get(getOrderByid);
module.exports = router;
