import recipes from '../recipes.json' assert {type: 'json'}
import Recipe from '../models/recipe.model.js';

//!CREATE FUNCTION

export const createRecipe = (req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
}

export const createRecipeM = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

//! READ ALL

export const getAllRecipes = (request, response) => {
    response.json(recipes)
}

export const getAllRecipesM = async (req, res) => {
    try {
        const allRecipes = await Recipe.find();
        res.json(allRecipes);
    } catch (e) {
        console.error(e)
        res.status(400).json(e);
    }
}

//! READ ONE

export const getOneRecipeById = (req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
}

export const getOneRecipeByIdM = async (req, res) => {
    try {
        const theRecipe = await Recipe.findById(req.params.id);
        res.json(theRecipe);
    } catch (e) {
        console.error(e);
        res.status(400).json(e)
    }
}

//! UPDATE

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

export const editRecipeM = async (req, res) => {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}



//! DELETE
export const deleteOneRecipe = (req, res) => {
    const recipeId = req.params.id;
    const index = recipes.findIndex(recipe => recipe.id == recipeId);
    recipes.splice(index, 1);
    res.json(recipes);
}

export const deleteOneRecipeM = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        res.json(deletedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

