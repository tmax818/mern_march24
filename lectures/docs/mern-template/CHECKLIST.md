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
import things from './things.json' assert {type: 'json'}

console.log(things)

const app = express();
const port = 8000;

app.use(express.json())

//! CREATE

app.post("/api/things/new", (req, res) => {
    console.log(req.body)
    things.push(req.body)
    res.json(things);
})

//! READ ALL

app.get("/api/things", (request, response) => {
    response.send(things)
})

//! READ ONE

app.get("/api/things/:id", (req, res) => {
    const thingById = things.find(thing => thing.id == req.params.id)
    console.log(thingById);
    res.json(thingById);
})

//! UPDATE

app.put("/api/things/:id",(req, res) => {
    things.forEach((thing, idx) =>{
        if(thing.id == req.params.id){
            thing = {...thing, ... req.body}
            things[idx] = thing
        }
    })
    const Updatedthing = things.find(thing => thing.id == req.params.id)
    res.json(Updatedthing)

} )
//! DELETE

app.delete("/api/things/:id", (req, res) => {
    const thingId = req.params.id;
    const index = things.findIndex(thing => thing.id == thingId);
    things.splice(index, 1);
    res.json(things);
});

app.listen(port, () => console.log(`listing on ${port}`))
```

- [ ] add [thing.routes.js](./server/routes/thing.routes.js)

- [ ] add `Router` 

```javascript
import { Router } from "express";
// Creating a router variable for ease of use
const router = Router();
```

- [ ] create a `route` for all functionality with a common endpoint.


```javascript
import express from 'express';
import router from './routes/thing.routes.js';
import things from './things.json' assert {type: 'json'}

console.log(things)

const app = express();
const port = 8000;

app.use(express.json())
app.use("/api", router)


app.listen(port, () => console.log(`listing on ${port}`))

```

- [ ] move cb to new [controller file](./server/controllers/thing.controller.js). [thing.routes.js](./server/routes/thing.routes.js) before:

```javascript
import { Router } from "express";

import things from '../things.json' assert {type: 'json'}
// Creating a router variable for ease of use
const router = Router();

//! CREATE and READ ALL
router.route("/things")
.post((req, res) => {
    console.log(req.body)
    things.push(req.body)
    res.json(things);
})
.get((request, response) => {
    response.send(things)
})

//! READ ONE, UPDATE, DELETE
router.route("/things/:id")
.get((req, res) => {
    const thingById = things.find(thing => thing.id == req.params.id)
    console.log(thingById);
    res.json(thingById);
})
.put((req, res) => {
    things.forEach((thing, idx) =>{
        if(thing.id == req.params.id){
            thing = {...thing, ... req.body}
            things[idx] = thing
        }
    })
    const Updatedthing = things.find(thing => thing.id == req.params.id)
    res.json(Updatedthing)

} )
.delete((req, res) => {
    const thingId = req.params.id;
    const index = things.findIndex(thing => thing.id == thingId);
    things.splice(index, 1);
    res.json(things);
})

export default router;
```

after: [routes](./server/routes/thing.routes.js)

```javascript
import { Router } from "express";


import { creatething, deleteOnething, editthing, getAllthings, getOnethingById } from "../controllers/thing.controller.js";

const router = Router();

//! CREATE and READ ALL
router.route("/things")
.post(creatething)
.get(getAllthings)

//! READ ONE, UPDATE, DELETE
router.route("/things/:id")
.get(getOnethingById)
.put(editthing)
.delete(deleteOnething)

export default router;
```

### connect to mongoose

```bash
$ npm i mongoose
```

add [mongoose config](./server/config/mongoose.config.js)

add [model](./server/models/thing.model.js)

### full stack

- [ ] add [client]()

- [ ] add dependencies to [server]()

```bash
$ npm i cors dotenv
```

## overall file structure

- client
  - src
    - components
      - [Header](./client/components/Header.js)
    - views
      - [Home](./client/src/views/Home.jsx)
    - [App.jsx](./client/src/App.jsx)
- server
  - config
    - [mongoose.config.js](./server/config/mongoose.config.js)
  - controllers
    - [thing.controller.js](./server/controllers/thing.controller.js)
  - models
    - [thing.model.js](./server/models/thing.model.js)
  - routes
    - [thing.routes.js](./server/routes/thing.routes.js)
  - [.env](./server/.env)
  - [package.json](./server/package.json)
  - [server.js](./server/server.js)