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
  getUsers,
  setUser,
  updateUser,
  deleteUser,
  getUserByid,
  getUserByemail
} = require('../controllers/userController');
const { Router } = require('express');

router.route('/').get(getUsers)
router.route('/register').post( setUser);
router.route('/:id').delete(deleteUser).put(updateUser);
router.route('/login').post(getUserByemail);
router.route('/:id').get(getUserByid);

module.exports = router;
