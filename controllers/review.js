const Review = require('../models').review;

const review = (req, res) => { 
    res.render('/review.ejs')
}

module.exports = {
    review,
}