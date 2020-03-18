const express = require('express')
const router = express.Router()

const {register} = require('../App/controllers/userRoutes')


router.post('/register', register)

module.exports = router