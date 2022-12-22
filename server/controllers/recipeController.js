const Recipe = require('../models/recipeModel');

const recipeController = {};

//recipe access
recipeController.getAllRecipes =  (req, res, next) => {
   Recipe.find({}, (err, recipes) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in recipeController.getAllRecipes: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.commRecipes = recipes;
    return next();
  });
};

//recipe creation
recipeController.createRecipe = async (req, res, next) => {
    const { name,  ingredient1, measure1 } = req.body;
    console.log(req.body)
    await Recipe.create({name, ingredient1, measure1
    }, (err, data) => {
      if (err) return res.status(400).json(err.message);
      res.locals.recipe = data;
      return next();
    });
}

module.exports = recipeController;