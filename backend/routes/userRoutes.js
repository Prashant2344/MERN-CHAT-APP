const express = require('express');
const { registerUser, authUser, allUsers } = require('../controller/userController');
const protect = require("../middleware/authMiddleware.js")

const router = express.Router()

router.route('/').post(registerUser).get(protect,allUsers)
router.post('/login',authUser)
// router.route('/').get(allUser)

module.exports = router;