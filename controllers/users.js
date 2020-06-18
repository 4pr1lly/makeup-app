const users = require('../models').users;//from users table psql


const index = (req, res) => {
    res.render('users/index.ejs')

}

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}

const signup = (req, res) => {
    users.create(req.body)
    .then(newusers => {
        res.redirect(`/index/profile/${newusers.id}`);
    })
}   
const renderLogin = (req, res) => {
    res.render('/index/login.ejs')
}

const login = (req, res) => {
    users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    })
    .then(foundPlayers => {
        res.redirect(`/index/profile/${foundusers.id}`);
    })
}




module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,

}