import express from 'express';
import recipes from './recipes.json' assert {type: 'json'}

console.log(recipes)

const app = express();
const port = 8000;

app.use(express.json())

//! CREATE

app.post("/api/recipes/new", (req, res) => {
    console.log(req.body)
    recipes.push(req.body)
    res.json(recipes);
})

//! READ ALL

app.get("/api/recipes", (request, response) => {
    response.send(recipes)
})

//! READ ONE

app.get("/api/recipes/:id", (req, res) => {
    const recipeById = recipes.find(recipe => recipe.id == req.params.id)
    console.log(recipeById);
    res.json(recipeById);
})

//! UPDATE
//! DELETE








app.listen(port, () => console.log(`listing on ${port}`))