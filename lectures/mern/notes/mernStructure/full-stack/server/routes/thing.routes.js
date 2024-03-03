//? ROUTES

import { Router } from "express";
import {getAllThings, createThing, getOneThing, deleteOneThing} from "../controllers/thing.controller.js";
import ThingController from "../controllers/thing.controller.js";





// Creating a router variable for ease of use
const router = Router();


// All routes with the /things path
router.route("/things")
    .get(getAllThings)
    .post(createThing);



/// All routes with the /things/:id path
router.route("/things/:id")
.get(getOneThing)
.put((req, res) => {
    res.send("PUT request");
})
.delete(deleteOneThing);


export default router;

