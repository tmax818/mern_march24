import recipes from '../recipes.json' assert {type: 'json'}
import Recipe from '../models/recipe.model.js';

//!CREATE FUNCTION

export const createRecipe = (req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
}

async function createRecipeM(req, res) {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


export const getAllRecipes = (request, response) => {
    response.json(recipes)
}

export const getOneRecipeById = (req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
}

export const editRecipe = (req, res) => {
    recipes.forEach((recipe, idx) =>{
        if(recipe.id == req.params.id){
            recipe = {...recipe, ... req.body}
            recipes[idx] = recipe
        }
    })
    const UpdatedRecipe = recipes.find(recipe => recipe.id == req.params.id)
    res.json(UpdatedRecipe)

} 

export const deleteOneRecipe = (req, res) => {
    const recipeId = req.params.id;
    const index = recipes.findIndex(recipe => recipe.id == recipeId);
    recipes.splice(index, 1);
    res.json(recipes);
}