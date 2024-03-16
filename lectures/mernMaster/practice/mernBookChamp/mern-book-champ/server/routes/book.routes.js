import {Router} from 'express';
import { createBook, deleteOneBook, readAllBooks, readOneBook, updateOneBook } from '../controllers/book.controller.js';

const router = Router();

router.route('/books')
    .get(readAllBooks)
    .post(createBook)

router.route('/books/:id')
    .get(readOneBook)
    .put(updateOneBook)
    .delete(deleteOneBook)

export default router;