import { Router } from "express";


import { createRecipe, deleteOneRecipe, editRecipe, getAllRecipes, getOneRecipeById } from "../controllers/recipe.controller.js";

const router = Router();

//! CREATE and READ ALL
router.route("/recipes")
.post(createRecipe)
.get(getAllRecipes)

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get(getOneRecipeById)
.put(editRecipe)
.delete(deleteOneRecipe)

export default router;