import Recipe from "../models/recipe.model.js";


//!CREATE FUNCTION

export const createRecipe = (req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
}

export const createRecipeM = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe)
    } catch(err){
        console.error(err);
        res.status(400).json(err);
    }
}


//! READ ALL

export const readAllRecipe = (request, response) => {
    response.send(recipes)
}

export const readAllRecipeM = async (req, res) => {
    try {
        const allRecipes = await Recipe.find();
        console.log(allRecipes)
        res.json(allRecipes)
    } catch (err) {
        console.error(err);
        res.status(400).json(err)
    }
}

//! READ ONE

export const readOneRecipe = (req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
}

export const readOneRecipeM = async (req, res) => {
    try {
        const theRecipe = await Recipe.findById(req.params.id);
        res.json(theRecipe)
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

//! UPDATE

export const updateRecipe = (req, res) => {
    console.log(req.body)
    recipes.forEach((recipe, idx)=> {
        if(recipe.id == req.params.id){
            recipe = {...recipe, ...req.body}
            recipes[idx] = recipe
        }
    })
    const UpdatedRecipe = recipes.find(recipe => recipe.id == req.params.id)
    res.json(UpdatedRecipe)
}


//! DELETE

export const deleteRecipe = (req, res) => {
    const recipeId = req.params.id
    const index = recipes.findIndex(recipe => recipe.id == recipeId)
    recipes.splice(index, 1);
    res.json(recipes)
}