const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const recipeController = require('./controllers/recipeController')
let cors = require('cors')

const allowedOrigins = ["http://localhost:3000", "http://localhost:8080"];

app.use(
    cors({
        origin: function(origin, callback) {
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    "The CORS policy for this site does not " +
                    "allow access from the specified Origin.";
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        }
    })
); 

//Ko0Zk3A02SNPSNGU
mongoose.connect('mongodb+srv://mashkn:Ko0Zk3A02SNPSNGU@cluster0.jcmgttt.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});
/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200
// }))

const recipeRouter = express.Router();
app.use('/', recipeRouter);
// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// serve index.html on the route '/'
app.get('/', (req, res) => {
  res.redirect('/home')
});

app.get('/home', (req, res) => {
  return res.status(200).sendFile(path.resolve('index.html'));
});

app.get('/login', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/frontend/login.html'));
});


//RECIPE CREATION

//Accessing the form

// app.get('/recipe/create',(req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/frontend/recipeForm.html'));
// });

//Creating the recipe

app.post('/recipes/create', recipeController.createRecipe, (req, res) => {
  // return res.sendStatus(200);
  res.redirect('http://localhost:8080/recipes/community')
});

//Getting all database recipes

app.get('/recipes/community', recipeController.getAllRecipes, (req, res) => {
  // return res.sendStatus(200);
  res.status(200).send(res.locals.commRecipes);
});


// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/