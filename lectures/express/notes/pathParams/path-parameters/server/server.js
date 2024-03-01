import express from "express";
import {users} from "./users.js"

const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );

app.get("/api/users/:id", (req, res) => {
    // We can use the find method to get the first element that has the matching id
   const getUserById = users.find(user => user.id == req.params.id);
    // always add in a console.log to see what is happening
    console.log(getUserById);
    res.json(getUserById);
});   

app.get("/api/users/name/:firstName", (req, res) => {
    // We can use the find method to get the first element that has the matching id
   const getUserById = users.filter(user => user.firstName === req.params.firstName);
    // always add in a console.log to see what is happening
    console.log(getUserById);
    res.json(getUserById);
});    

app.put("/api/users/:id", (req, res) => {
    console.log(req)
    users.forEach((user, idx) => {
       if (user.id == req.params.id) {
           user = {...user, ...req.body}
           users[idx] = user
       }
   })
   const updatedUser = users.find(user=>user.id == req.params.id)
   res.json(updatedUser)
 })




// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
