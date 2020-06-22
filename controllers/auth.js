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

module.exports = {
renderSignup,
    renderLogin,
    signup,
    login,
}