const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:userId', ctrl.review.review);
router.post('/:userId', ctrl.review.createReview);

module.exports = router;

