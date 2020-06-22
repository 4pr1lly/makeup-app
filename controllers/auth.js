require('dotenv').config()

const User = require('../models').users;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const renderSignup = (req, res) => {
    res.render('signup.ejs')
}

const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return res.status(500).json(err);
        
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err) return res.status(500).json(err);
            req.body.password = hashedPwd;
    
    User.create(req.body)
    .then(newusers => {
        res.redirect(`/users/profile/${newusers.id}`);
    })
    .catch(err => {
        console.log(err);
        res.send(`err ${err}`);
         })
        });
    });
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
        res.redirect(`/users/profile/${foundusers.id}`);
    })
}

module.exports = {
renderSignup,
    renderLogin,
    signup,
    login,
}