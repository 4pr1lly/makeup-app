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
        res.redirect(`/users/profile/${newusers.id}`);
    })
}   





module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup

}