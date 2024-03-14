import express from 'express';
import router from './routes/recipe.routes.js';
import dbConnect from './config/mongoose.config.js';
import cors from 'cors';

dbConnect()

const app = express();
const port = 8000;

app.use(express.json(), cors({origin: "http://localhost:5173"}))
app.use("/api", router)

//! CREATE

// app.post("/api/recipes", (req, res) => {
//     console.log(req.body)
//     recipes.push(req.body)
//     res.json(recipes);
// })

//! READ ALL

// app.get("/api/recipes", (request, response) => {
//     response.send(recipes)
// })

//! READ ONE

// app.get("/api/recipes/:id", (req, res) => {
//     const recipeById = recipes.find(recipe => recipe.id == req.params.id)
//     console.log(recipeById);
//     res.json(recipeById);
// })

//! UPDATE

// app.put("/api/recipes/:id", (req, res) => {
//     console.log(req.body)
//     recipes.forEach((recipe, idx)=> {
//         if(recipe.id == req.params.id){
//             recipe = {...recipe, ...req.body}
//             recipes[idx] = recipe
//         }
//     })
//     const UpdatedRecipe = recipes.find(recipe => recipe.id == req.params.id)
//     res.json(UpdatedRecipe)
// })

//! DELETE

// app.delete("/api/recipes/:id", (req, res) => {
//     const recipeId = req.params.id
//     const index = recipes.findIndex(recipe => recipe.id == recipeId)
//     recipes.splice(index, 1);
//     res.json(recipes)
// })



app.listen(port, () => console.log(`listing on ${port}`))