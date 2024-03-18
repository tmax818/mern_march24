import Recipe from "../models/recipe.model.js";


//!CREATE FUNCTION

export const createRecipe = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.json(newRecipe)
    } catch(err){
        console.error(err);
        res.status(400).json(err);
    }
}

//! READ ALL

export const readAllRecipe = async (req, res) => {
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


export const readOneRecipe = async (req, res) => {
    try {
        const theRecipe = await Recipe.findById(req.params.id);
        res.json(theRecipe)
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
}

//! UPDATE

export const updateRecipe = async (req, res) => {
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

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        res.json(deletedRecipe);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}