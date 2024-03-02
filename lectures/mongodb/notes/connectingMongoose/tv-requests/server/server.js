import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/tv.routes.js';
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use("/api/shows", router)
app.use(cors);



dbConnect();

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})