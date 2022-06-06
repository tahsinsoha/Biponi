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
  getBank_accs,
  setBank_acc,
  updateBank_acc,
  deleteBank_acc,
  getBank_accByid
} = require('../controllers/bankController');
const { Router } = require('express');

router.route('/').get(getBank_accs).post(setBank_acc);
router.route('/:id').delete(deleteBank_acc).put(updateBank_acc).get(getBank_accByid);

module.exports = router;
