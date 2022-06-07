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
  getSellers,
  setSeller,
  updateSeller,
  deleteSeller,
  getSellerByid
} = require('../controllers/sellerController');
const { Router } = require('express');

router.route('/').get(getSellers).post(setSeller);
router.route('/:id').delete(deleteSeller).put(updateSeller).get(getSellerByid);

module.exports = router;
