/**
 * !   server.js
 */
import express from 'express';
const app = express();

import cors from 'cors'

import dotenv from 'dotenv'; dotenv.config();
const PORT = process.env.PORT;

import dbConnect from './config/mongoose.config.js'; dbConnect();
import router from './routes/thing.routes.js';

app.use(express.json(), cors());
app.use("/api", router);


app.listen(PORT, () => console.log(`listing on ${PORT}`))
