import {Router} from 'express';
import { createRecipe, deleteRecipe, readOneRecipe, updateRecipe, readAllRecipe} from '../controllers/recipe.controller.js';

const router = Router()

//! CREATE and READ ALL
router.route("/recipes")
.post(createRecipe)
.get(readAllRecipe)

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get(readOneRecipe)
.put(updateRecipe)
.delete(deleteRecipe)

export default router