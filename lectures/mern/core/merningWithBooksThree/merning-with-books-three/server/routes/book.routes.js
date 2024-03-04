//? ROUTER MIDDLEWARE IMPORT
import { Router } from "express";

//? CONTROLLERS IMPORT
import { getAllBooks, addBook, getOneBook, updateBook, deleteOneBook } from "../controllers/book.controller.js";

//? INIT ROUTER
const router = Router();

router.route("/")
    .get(getAllBooks)
    .post(addBook)

router.route("/:id")
    .get(getOneBook)
    .put(updateBook)
    .delete(deleteOneBook)


export default router;
