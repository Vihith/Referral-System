const express = require('express')
const router = express.Router()

const userController = require('../App/controllers/userRoutes')


router.post('/register', userController.register)

module.exports = router