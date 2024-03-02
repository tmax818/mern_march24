import { Router } from "express";

// Creating a router variable for ease of use
const router = Router();


// All routes with the /users path
router.route("/users")
    .get((req, res) => {
        res.send("Hello World");
    })
    .post((req, res) => {
        res.send("POST request");
    });



/// All routes with the /users/:id path
router.route("/users/:id")
.get((req, res) => {
    res.send("GET request");
})
.put((req, res) => {
    res.send("PUT request");
})
.delete((req, res) => {
    res.send("DELETE request");
});
export default router;

