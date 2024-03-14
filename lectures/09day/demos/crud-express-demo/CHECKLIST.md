# server configuration checklist


- [ ] create a [new project folder](.). This document should be inside the parent folder.

- [ ] create [server.js](./server/server.js) inside a [server]() directory.

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

## Modularization


- [ ] create [routes](./server/routes/recipe.routes.js) module:

```javascript
// recipe.routes.js
import {Router} from 'express';
import { createRecipe, deleteRecipe, readOneRecipe, updateRecipe, readAllRecipe } from '../controllers/recipe.controller.js';

const router = Router()

//! CREATE and READ ALL
router.route("/recipes")
.post(createRecipe)
.get(readAllRecipe)

//! READ ONE, UPDATE, DELETE
router.route("/recipes/:id")
.get(readOneRecipe)
.put(updateRecipe)
.delete(deleteRecipe)

export default router
```

- [ ] create [controllers](./server/controllers/recipe.controller.js) module 


## File Configuration

- server
  - config
    - [mongoose.config.js](./server/config/mongoose.config.js)
  - routes
    - [recipe.routes.js](./server/routes/recipe.routes.js)
  - controllers
    - [recipe.controller.js](./server/controllers/recipe.controller.js)
  - models
    - [recipe.model.js](./server/models/recipe.model.js)