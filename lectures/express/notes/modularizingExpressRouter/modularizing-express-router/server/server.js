import express from 'express';

// here, we require the suffix .js to get the routes
import router from './routes/user.routes.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api', router);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

