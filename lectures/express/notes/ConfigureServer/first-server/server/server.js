import express from "express";
import {users} from "./data.js";

const app = express();
const port = 8000;

 

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );



app.get("/api/users", (req, res) => {
    console.log(req.headers.test)
    res.json( users );
});

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React later
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database using a database method
    users.push(req.body);
    // the updated users array
    res.json( users );
});





// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
