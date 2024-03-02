# [Server Configuration](https://login.codingdojo.com/m/754/16736/124704)

## Learning Objectives

- Analyze a server's folder structure.
- Configure a Node application.
- Develop server code using Express.

- [ ] create file structure:

```bash
$ mkdir first-server
$ cd first-server
$ mkdir server
$ cd server
$ touch server.js
```

OR

```bash
$ mkdir -p first-server/server/
$ touch first-server/server/server.js
```

- [ ] make the [server]() directory an [npm] package.

```bash
npm init -y
```

- [ ] install the [nodemon] and [express] dependencies:

```bash
npm i express
npm i --save-dev nodemon
```

add:

```javascript
"type": "module"
```

to the [package.json]() file

```javascript
import express from "express";
const app = express();
const port = 8000;
```

```javascript
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
```


