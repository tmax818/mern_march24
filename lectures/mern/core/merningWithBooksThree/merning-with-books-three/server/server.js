//? SERVER.JS
//? NODE DEPENDENCIES

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//? IMPORTS FROM CUSTOM MODULES
import dbConnect from './config/mongoose.config.js'
import router from './routes/book.routes.js';

//? DOTENV CONFIG
dotenv.config();
const PORT = process.env.PORT;

//? CREATE APP
const app = express();

//? MIDDLEWARE

app.use(express.json());
app.use(cors());
app.use("/api/books", router);

//? DB CONNECTION
dbConnect();

//? BOTTOM
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});
