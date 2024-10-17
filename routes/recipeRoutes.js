// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes,
} = require('../controllers/recipeController');

// Search recipes should come before the dynamic route for :id
router.get('/recipes/search', searchRecipes);

// CRUD operations
router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);
router.post('/recipes', createRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);

module.exports = router;
