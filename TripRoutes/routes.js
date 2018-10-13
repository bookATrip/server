const express = require('express');
const router = express.Router();
/* GET users listing. */
const handler = require('./TripController')

router.post('/book', handler.book)

router.post('/cancel', handler.cancel)

module.exports = router;
