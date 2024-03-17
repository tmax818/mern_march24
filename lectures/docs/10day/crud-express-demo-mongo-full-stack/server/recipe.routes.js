import { Router } from "express";


import { createRecipe, createRecipeM, deleteOneRecipe, deleteOneRecipeM, editRecipe, editRecipeM, getAllRecipes, getAllRecipesM, getOneRecipeById, getOneRecipeByIdM } from "./controllers/recipe.controller.js";

const router = Router();

//! CREATE and READ ALL
router.route("/recipes")
.post(createRecipeM)
.get(getAllRecipesM)

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get(getOneRecipeByIdM)
.put(editRecipeM)
.delete(deleteOneRecipeM)

export default router;