import express from 'express';
import dotenv from 'dotenv';
import router from './routes/book.routes.js';
import dbConnect from './config/mongoose.config.js';
const app = express();
dbConnect()
dotenv.config();
const PORT = process.env.PORT;

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
