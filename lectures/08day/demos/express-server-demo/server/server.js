import express from "express";

// The port we listen for traffic on
const port = 8000;
const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );



app.get("/", (req, res) => {
    console.log(req)
    res.send("it works!!!")
})

app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React later
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database using a database method

    // the updated users array

});



// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
// import {faker} from '@faker-js/faker'

// console.log(faker.person.firstName())
// console.log(faker.person.lastName())
// console.log(faker.database.mongodbObjectId())
