const express = require('express');
const router = express.Router();
/* GET users listing. */
const handler = require('./UserController')

router.post('/regester', handler.register)

router.post('/login' , handler.login) 
module.exports = router;
