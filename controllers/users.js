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

<<<<<<< HEAD
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
=======
/*
const deleteUser = (req, res) => {
    User.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/index');
    })
>>>>>>> 10bdcd79a272fbd957f0eb29fc254e9938289e44

}
*/



module.exports = {
    index,
    renderSignup,
<<<<<<< HEAD
    renderLogin,
    signup,
    login,
=======
    //renderLogin,
    signup,
    deleteUser
>>>>>>> 10bdcd79a272fbd957f0eb29fc254e9938289e44

}