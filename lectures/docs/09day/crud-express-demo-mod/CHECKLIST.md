# server configuration checklist


- [x] create a [new project folder](.). This document should be inside the parent folder.

- [x] create [server.js](./server/server.js) inside a [server]() directory.

- [ ] `cd` into the [server]() directory and run the `npm init` command:

```bash
$ cd server
$ npm init -y
```

- [ ] install dependencies:

```bash
$ npm i express
$ npm i --save-dev nodemon
```

- [ ] add `"type":"module"` and `"dev":"npx nodemon"` to the [package.json](./server/package.json) file.
- [ ] add configuration to [server.js](./server/server.js)

```javascript
// import the express library
import express from "express";

// creating our express app
const app = express();
// The port we listen for traffic on
const port = 8000;

// this needs to be below the other code blocks, this is what starts our server
app.listen( port, () => console.log(`Listening on port: ${port}`) );

```

### Modularization

[server.js](./server/server.js) before:

```javascript
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

app.put("/api/recipes/:id",(req, res) => {
    recipes.forEach((recipe, idx) =>{
        if(recipe.id == req.params.id){
            recipe = {...recipe, ... req.body}
            recipes[idx] = recipe
        }
    })
    const UpdatedRecipe = recipes.find(recipe => recipe.id == req.params.id)
    res.json(UpdatedRecipe)

} )
//! DELETE

app.delete("/api/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const index = recipes.findIndex(recipe => recipe.id == recipeId);
    recipes.splice(index, 1);
    res.json(recipes);
});

app.listen(port, () => console.log(`listing on ${port}`))
```

- [ ] add [recipe.routes.js](./server/routes/recipe.routes.js)

- [ ] add `Router` 

```javascript
import { Router } from "express";
// Creating a router variable for ease of use
const router = Router();
```

- [ ] create a `route` for all functionality with a common endpoint.

