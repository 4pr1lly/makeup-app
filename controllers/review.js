const User = require('../models').User; //included here to link review to user who is submiting
const Review = require('../models').Review;

const renderReview = (req, res) => {
    res.render('review.ejs')
}
const reviewSubmission = (req, res) => { 
    //push form submission to database
    //res.render('/review.ejs')
}

const postReviewRav = (req, res) => {
    //push review from database to profile when rating integer is 4 or over
}

const postReviewReject = (req, res) => {
    //push review from database to profile when rating integer is 3 or under
}

module.exports = {
    renderReview,
    reviewSubmission,
    postReviewRav,
    postReviewReject,

}