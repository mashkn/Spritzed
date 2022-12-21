const express = require('express');
const app = express();
const path = require('path');

/**
* Automatically parse urlencoded body content and form data from incoming requests and place it
* in req.body
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

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

app.get('/recipe/create',(req, res) => {
  return res.status(200).sendFile(path.resolve('client/frontend/recipeForm.html'));
});

//Creating the recipe

app.post('/recipe/create', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/frontend/recipeForm.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/