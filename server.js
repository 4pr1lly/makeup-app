const express = require('express')

const app = express();//app is an object

require('dotenv').config();

//imported express library
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();// returns an object

const routes = require('./routes');
const jwt = require('jsonwebtoken');

//middleware
//using body-parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));



app.listen(3000, ()=>{
    console.log("I am listening");
});