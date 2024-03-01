import express from "express";

import { createCompany, createUser } from "./helpers/helpers.js";
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );




app.get("/api/users/new", (req, res) => {
    const user = createUser()
    res.json(user)
})

app.get("/api/companies/new", (req, res) => {
    const company = createCompany();
    res.json(company)
})

app.get("/api/user/company", (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({company, user})
})





// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
