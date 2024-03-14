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