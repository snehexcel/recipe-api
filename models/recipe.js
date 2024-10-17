// models/recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title:{ 
        type: String,
        required: true 
    },
    ingredients:{
        type: [String], 
        required: true 
    },
    instructions:{
        type: String,
        required: true 
    },
    image:{
        type: String 
    },
  },
  // Automatically adds createdAt and updatedAt fields
  {
    timestamps: true, 
  }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
