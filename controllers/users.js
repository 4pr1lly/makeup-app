const User = require('../models').users;//from users table psql
const Review = require('../models').Review;
const Brand = require('../models').brand;
const Category = require('../models').category;
const ProductType = require('../models').ProductType;
const index = (req, res) => {
    res.render('index.ejs') ///this works
}

const renderSignup = (req, res) => {
    res.render('signup.ejs')
}

const signup = (req, res) => {
    User.create(req.body)
    .then(newusers => {
        res.redirect(`/users/profile/${newusers.id}`);
    })
}   
const renderLogin = (req, res) => {
    res.render('login.ejs') //when rendering a template no forward slash needed .not redirecting to a url
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    })
    .then(foundusers => {
        res.redirect(`/users/profile/${foundusers.id}`);//removed /index 
    })
}


const renderProfile = (req, res) => {
    User.findByPk(req.params.index, {
        include: [
            {
            model: Review,
            include:[
                {
                    model: Brand,
                },
                    {
                        model: Category
                    },
                    {
                        model: ProductType
                    },
            ]
        }], 
    })
    .then(foundUser => {
        console.log(foundUser)
        res.render('profile.ejs', {
            users: foundUser, 
            
        })  
     })
}

const editProfile = (req, res) => {
    console.log(req.params.index)
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updateUser => {
        console.log(updateUser);
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/index');
    })
}

const logOutuser = (req, res) => {
    res.redirect('/users');

}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,
    renderProfile,
    editProfile,
    deleteUser,
    logOutuser

}