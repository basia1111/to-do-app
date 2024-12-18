const express = require('express')
const router = express.Router()
const User = require('../models/user')
const {
    registerUser,
    loginUser,
    getUser
} = require('../controllers/userController')
const validateId = require('../middleware/validateId');
const protect = require('../middleware/auth');

router.post('/login', loginUser)

router.post('/register', registerUser)

module.exports = router