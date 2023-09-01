const { Router } = require('express')
const { getAllRecipes, getRecipesById, createRecipe, updateRecipe, deleteRecipe } = require('../service/recipe-service.js')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const recipeRouter = Router()

recipeRouter.post('/recipes', createRecipe)
recipeRouter.get('/recipes', getAllRecipes)
recipeRouter.get('/recipes/:id', getRecipesById)
recipeRouter.put('/recipes/:id', authorizationMiddleware, updateRecipe)
recipeRouter.delete('/recipes/:id', authorizationMiddleware, deleteRecipe)

module.exports = recipeRouter