import {Router} from 'express';
import { createRecipe, deleteRecipe, readOneRecipe, updateRecipe, readAllRecipe, createRecipeM, readAllRecipeM, readOneRecipeM } from '../controllers/recipe.controller.js';

const router = Router()

//! CREATE and READ ALL
router.route("/recipes")
.post(createRecipeM)
.get(readAllRecipeM)

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get(readOneRecipeM)
.put(updateRecipe)
.delete(deleteRecipe)

export default router