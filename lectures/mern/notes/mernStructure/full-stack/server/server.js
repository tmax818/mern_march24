//? SERVER.JS
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/thing.routes.js';
const PORT = process.env.PORT;
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);


dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);

