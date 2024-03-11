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