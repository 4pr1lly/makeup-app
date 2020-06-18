const users = require('../models').users;//from users table psql


const index = (req, res) => {
    res.render('/index.ejs') ///this works
}

const renderSignup = (req, res) => {
    res.render('signup.ejs')
}

const signup = (req, res) => {
    users.create(req.body)
    .then(newusers => {
        res.redirect(`/profile/${newusers.id}`);
    })
}   
const renderLogin = (req, res) => {
    res.render('login.ejs') //when rendering a template no forward slash needed .not redirecting to a url
}

const login = (req, res) => {
    users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    })
    .then(foundPlayers => {
        res.redirect(`/profile/${foundusers.id}`);//removed /index 
    })
}






module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,

}