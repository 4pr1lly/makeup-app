const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:userId', ctrl.review.review);
router.post('/:userId', ctrl.review.createReview);//this will link the user with the review

module.exports = router;

