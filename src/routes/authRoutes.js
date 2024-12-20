const express = require('express')
const router  = express.Router()
const {register, login, checkAvailability} = require('../controllers/authController.js')

router.post('/check-availability', checkAvailability);
router.post('/register', register);
router.post('/login', login);

module.exports = router

