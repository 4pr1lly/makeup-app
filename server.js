const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();//app is an object
const routes = require('./routes');
// require('dotenv').config();

//imported express library

//middleware
//using body-parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

//index
app.get('/index', (req, res) => {
    res.render('index.ejs') 
})

app.get('/', (req, res) => {
    res.render('users/index.ejs')
  })

//add router object to middleware
app.use('/users', routes.users);//URL /users needs to go in the user router. 
//add more routes sheets here
app.use('/review', routes.review);



//adding router object to middleware
app.use('/auth', routes.auth);



app.listen(process.env.PORT, () => {
    console.log('I am listening'); //auth refactor
}
// app.listen(3000, ()=>{
//     console.log("I am listening");
// });
)
