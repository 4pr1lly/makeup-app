const Brand = require('../models').brand;
const Category = require('../models').category;




const review = (req, res) => { 
    Brand.findAll() //after all 'find' functions .then will follow. it will find all the Brands on the table will take this to the drop down

    .then(allBrands => {
        Category.findAll()
        .then(allCategories =>{
            res.render('review.ejs',{
                brands:allBrands, //select to put into a dropdown
                category: allCategories
            }) 
        })
       
    
    })
    
}

module.exports = {
    review
    // renderReview,
    // reviewSubmission,
    // postReviewRav,
    // postReviewReject,

}