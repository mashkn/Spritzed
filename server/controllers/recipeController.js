const Recipe = require('../models/recipeModel');

const recipeController = {};

//recipe access
recipeController.getAllRecipes = (req, res, next) => {
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