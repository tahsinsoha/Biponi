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
  getBank_accByid,
  getBank_accByuser,
  putBank_accByuser
} = require('../controllers/bankController');
const { Router } = require('express');

router.route('/').get(getBank_accs).post(setBank_acc);
router.route('/:id').delete(deleteBank_acc).put(updateBank_acc).get(getBank_accByid);
router.route('/user').post(getBank_accByuser).put(putBank_accByuser)

module.exports = router;
