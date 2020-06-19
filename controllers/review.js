const Brand = require('../models').brand;
const Category = require('../models').category;
const ProductType = require('../models').ProductType;
const Review = require('../models').Review;




const review = (req, res) => { 
    Brand.findAll() //after all 'find' functions .then will follow. it will find all the Brands on the table will take this to the drop down

    .then(allBrands => {
        Category.findAll()
        .then(allCategories =>{
            ProductType.findAll()
            .then(allProductTypes => {
                res.render('review.ejs',{
                    brands:allBrands, //select to put into a dropdown
                    category: allCategories,
                    productType:allProductTypes,
                    user:req.params.userId 
                }) 

            })
            
        })
       
    
    })
    
}

const createReview =(req,res)=> {
    req.body.userId= req.params.userId //this links review to user. this is a variable that can be used anywhere
    Review.create(req.body)
    .then(newReview => {
        res.redirect(`/users/profile/${req.params.userId}`)
    })
}

module.exports = {
    review,
    createReview
    // renderReview,
    // reviewSubmission,
    // postReviewRav,
    // postReviewReject,

}