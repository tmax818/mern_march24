import express from 'express';
import router from './routes/recipe.routes.js';
import recipes from './recipes.json' assert {type: 'json'}

console.log(recipes)

const app = express();
const port = 8000;

app.use(express.json())
app.use("/api", router)


app.listen(port, () => console.log(`listing on ${port}`))