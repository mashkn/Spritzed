const User = require('../models/userModel');

const userController = {};

/**
* getAllUsers - retrieve all users from the database and stores it into res.locals
* before moving on to next middleware.
*/
userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};


/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  // console.log(req.body)
  const { username, password } = req.body;
  if( !username || !password) return next({err : 'Error occurred on the createUser middleware - userController'});
  const result = await User.create ( { username, password }, (err, user)=> {
    if(err) {
      return next({ error: err })
    } else {
      res.locals.user = user;
      return next();
    }
  })
};

userController.createUniqueCheck = (req, res, next) => {
  const {username} = req.body;
  User.findOne({username}, (err, user) => {
    if(user) res.redirect('/')
  })
  return next();
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  // console.log('Entered Data:')
  // console.log(username, password);
  User.findOne({username, password})
    .then((user) => {
      // console.log('JUST USER');
      // console.log( user);
      if (!user) {
        res.redirect('/signup');
      } else {
        res.locals.user = user;
        return next();
      }
    });
};

module.exports = userController;