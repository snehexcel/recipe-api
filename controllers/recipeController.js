// controllers/recipeController.js
const Recipe = require('../models/recipe');

// @desc Get all recipes
// @route GET /recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get recipe by ID
// @route GET /recipes/:id
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Create a new recipe
// @route POST /recipes
const createRecipe = async (req, res) => {
  const { title, ingredients, instructions, image } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      image,
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update a recipe
// @route PUT /recipes/:id
const updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete a recipe
// @route DELETE /recipes/:id
const deleteRecipe = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Search for recipes by title or ingredients
// @route GET /recipes/search
const searchRecipes = async (req, res) => {
  const { query } = req.query;

  try {
    const recipes = await Recipe.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { ingredients: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  searchRecipes,
};
