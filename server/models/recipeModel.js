const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type: String, required: true, unique: true},
    image: {type: Image},

    ingredient1: {type: String, required: true},
    measure1: {type: String, required: true},

    ingredient2: {type: String},
    measure2: {type: String},

    ingredient3: {type: String},
    measure3: {type: String},

    ingredient4: {type: String},
    measure4: {type: String},

    ingredient5: {type: String},
    measure5: {type: String},

    isChristmas: { type: Boolean, default: false },
  });

module.exports = new mongoose.model('Recipe', recipeSchema);