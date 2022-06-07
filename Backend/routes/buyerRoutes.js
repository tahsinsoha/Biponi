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
  getBuyers,
  setBuyer,
  updateBuyer,
  deleteBuyer,
  getBuyerByid
} = require('../controllers/buyerController');
const { Router } = require('express');

router.route('/').get(getBuyers).post(setBuyer);
router.route('/:id').delete(deleteBuyer).put(updateBuyer).get(getBuyerByid);

module.exports = router;
