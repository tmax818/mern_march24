# server checklist


```bash

mkdir server && cd $_ && touch server.js
npm init -y
```

- [ ] install the [nodemon] and [express] dependencies:

```bash
npm i express
npm i --save-dev nodemon
```

```javascript
import express from "express";
const app = express();
const port = 8000;
```

```javascript
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
```


```javascript
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
```


## Modularizing Express Router
```bash

mkdir server/routes && cd $_ && touch user.routes.js
```

- server
  - controllers
    - [user.controllers.js](./server/controllers/user.controllers.js)
  - node_modules
  - routes
    - [user.routes.js](./server/routes/user.routes.js)
  - [package-lock.json](./server/package-lock.json)
  - [package.json](./server/package.json)
  - [server.js](./server/server.js)