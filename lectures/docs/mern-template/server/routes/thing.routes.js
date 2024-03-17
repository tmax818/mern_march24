/**
 * ! thing.routes.js
 */


import { Router } from "express";


import { createThing,  
         getAllThings,  
         getOneThingById,
         editThing,  
         deleteOneThing  } from "../controllers/thing.controller.js";

const router = Router();

//! CREATE and READ ALL
router.route("/things")
.post(createThing)
.get(getAllThings)

//! READ ONE, UPDATE, DELETE
router.route("/things/:id")
.get(getOneThingById)
.put(editThing)
.delete(deleteOneThing)

export default router;