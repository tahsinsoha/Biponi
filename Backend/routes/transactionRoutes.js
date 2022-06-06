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
  getTransactions,
  setTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionByid
} = require('../controllers/transactionController');
const { Router } = require('express');

router.route('/').get(getTransactions).post(setTransaction);
router.route('/:id').delete(deleteTransaction).put(updateTransaction).get(getTransactionByid);

module.exports = router;
