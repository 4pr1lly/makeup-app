const express = require('express')
const app = express();//app is an object

// require('dotenv').config();

//imported express library
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./routes');

//middleware
//using body-parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


//index
app.get('/index', (req, res) => {
    res.render('index.ejs') 

})

app.use('/users', routes.users);//URL /users needs to go in the user router


app.listen(3000, ()=>{
    console.log("I am listening");
});