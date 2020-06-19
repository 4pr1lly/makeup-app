const Brand = require('../models').brand;

const review = (req, res) => { 
    Brand.findAll() //after all 'find' functions .then will follow
    .then(allBrands => {
        res.render('review.ejs',{
            brands:allBrands //select to put into a dropdown
        }) 
    })
    
}

module.exports = {
    renderReview,
    reviewSubmission,
    postReviewRav,
    postReviewReject,

}