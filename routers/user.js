const {login, register, forgotPassword, verifyEmail, updatePassword} = require('../controllers/userController')
// const express = require('express')
const router = require('express').Router()

    router.post('/login', login());
    router.post('/register', register());
    router.post('/reset', forgotPassword());
    router.post('/verifyEmail', verifyEmail());
    router.put('/updatePassword', updatePassword())
module.exports = router;