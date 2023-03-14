const express = require('express')
const router = express.Router()
const {createUser, loginUser} = require('../controllers/userControllers')

router.route('/').post(createUser).post(loginUser)

module.exports = router