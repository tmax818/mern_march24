import express from 'express';
import router from './routes/recipe.routes.js';
import dbConnect from './config/mongoose.config.js';
import cors from 'cors';

dbConnect()

const app = express();
const port = 8000;

app.use(express.json(), cors({origin: "http://localhost:5173"}))
app.use("/api", router)



app.listen(port, () => console.log(`listing on ${port}`))