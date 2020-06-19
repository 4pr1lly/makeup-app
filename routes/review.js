const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/review', ctrl.review.review);


module.exports = router;

//https://stackoverflow.com/questions/28549833/router-use-requires-middleware-function-but-got-a-undefined/28550362