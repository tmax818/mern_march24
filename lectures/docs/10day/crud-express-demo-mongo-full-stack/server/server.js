import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/recipe.routes.js';
import dbConnect from './config/mongoose.config.js';

dotenv.config();

dbConnect();


const app = express();
const PORT = process.env.PORT;

app.use(express.json(), cors())
app.use("/api", router)


app.listen(PORT, () => console.log(`listing on ${PORT}`))