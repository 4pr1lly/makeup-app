const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/review', ctrl.review.renderReview);
router.get('/review', ctrl.review.reviewSubmission); //auth from fruitapp is '/'? GOAL: push form submission into database
router.post('/profile/:index', ctrl.review.postReviewRav); //review with rating integer 4 or over
router.post('/profile/:index', ctrl.review.postReviewReject); //review with rating integer 3 or udner

module.exports = router;

//https://stackoverflow.com/questions/28549833/router-use-requires-middleware-function-but-got-a-undefined/28550362