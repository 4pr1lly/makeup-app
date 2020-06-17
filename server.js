const express = require('express')
const app = express();//app is an object

// require('dotenv').config();

//imported express library
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const routes = require('./routes');
const jwt = require('jsonwebtoken');

//middleware

app.use('/users', routes.users);

//using body-parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));




//index
app.get('/index', (req, res) => {
    res.render('index.ejs') 

})



// app.delete('/pokemon/:index', (req, res) => {
//     pokemon.splice(req.params.index, 1);
//     res.redirect('/pokemon');
// })

// app.get('/pokemon/:index/edit', (req, res) => {
//     res.render('edit.ejs', {
//         character: pokemon[req.params.index],
//         characterIndex: req.params.index
//     })
// })

// app.put('/pokemon/:index', (req, res) => {
//     pokemon[req.params.index] = req.body;
//     res.redirect('/pokemon');
// })



app.listen(3000, ()=>{
    console.log("I am listening");
});