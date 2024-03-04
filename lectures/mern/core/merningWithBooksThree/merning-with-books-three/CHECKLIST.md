# merning-with-books-three
## Complete the Stack

- [root](CHECKLIST.md)
- [client](./client/README.md)
  - [node_modules](./client/node_modules/)
  - [public](./client/public/README.md)
  - [src](./client/src/)
    - [assets](./client/src/assets/react.svg)
    - [components](./client/src/components/Header.jsx)
    - [views](./client/src/views/Home.jsx)
    - [App.css](./client/src/App.css)
    - [App.jsx](./client/src/App.jsx)
    - [index.css](./client/src/index.css)
    - [main.jsx](./client/src/main.jsx)
  - [.eslintrc.cjs](./client/.eslintrc.cjs)
  - [.gitignore](./client/.gitignore)
  - [index.html](./client/index.html)
  - [package.json](./client/package.json)
  - [package.lock.json](./client/package-lock.json)
  - [vite.config.js](./client/vite.config.js)
- [server](./server/README.md)
  - [config](./server/config/README.md)
    - [mongoose.config.js](./server/config/mongoose.config.js)
  - [controllers](./server/controllers/README.md)
    - [book.controller.js](./server/controllers/book.controller.js)
  - [models](./server/models/README.md)
    - [book.model.js](./server/models/book.model.js)
  - [routes](./server/routes/README.md)
    - [book.routes.js](./server/routes/book.routes.js)
  - [.env](./server/.env)
  - [package.json](./server/package.json)
  - [server.js](./server/server.js)
- [.gitignore](./.gitignore)


## client

```bash
npm create vite@latest
```

### dependencies

```bash
npm i react-router-dom axios
```

## server 

first create [server.js](./server/server.js)

then:

```
npm init -y
```

### dependencies

```bash
npm i express mongoose cors dotenv
```

```bash
npm i --save-dev nodemon
```
