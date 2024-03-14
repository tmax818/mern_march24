import { Router } from "express";

import recipes from '../recipes.json' assert {type: 'json'}
// Creating a router variable for ease of use
const router = Router();

//! CREATE and READ ALL
router.route("/recipes")
.post((req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
})
.get((request, response) => {
    response.send(recipes)
})

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get((req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
})
.put((req, res) => {
    recipes.forEach((recipe, idx) =>{
        if(recipe.id == req.params.id){
            recipe = {...recipe, ... req.body}
            recipes[idx] = recipe
        }
    })
    const UpdatedRecipe = recipes.find(recipe => recipe.id == req.params.id)
    res.json(UpdatedRecipe)

} )
.delete((req, res) => {
    const recipeId = req.params.id;
    const index = recipes.findIndex(recipe => recipe.id == recipeId);
    recipes.splice(index, 1);
    res.json(recipes);
})

export default router;