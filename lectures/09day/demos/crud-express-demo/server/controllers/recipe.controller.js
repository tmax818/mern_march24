import recipes from '../recipes.json' assert {type: "json"}


//!CREATE FUNCTION

export const createRecipe = (req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
}

//! READ ALL

export const readAllRecipe = (request, response) => {
    response.send(recipes)
}

//! READ ONE

export const readOneRecipe = (req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
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