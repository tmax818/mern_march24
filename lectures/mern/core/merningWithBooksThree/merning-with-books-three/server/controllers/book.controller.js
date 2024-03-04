import Book from '../models/book.model.js';


export async function addBook(req, res){
    try{
        console.log(req.body)
        const newBook = await Book.create(req.body);
        res.json(newBook);
    } catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
}


export async function getAllBooks(req, res){
    try {
        const allBooks = await Book.find();
        res.json(allBooks)
    } catch (e) {
        console.error(e);
        res.status(400).json(e);
    }
}

export async function getOneBook(req, res){
    try{
        console.log(req.params)
        const theBook = await Book.findById(req.params.id);
        res.json(theBook);
    } catch (e) {
        console.error(e);
        res.status(400).json(e)    
    }
}

export async function updateBook(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export async function deleteOneBook(req, res) {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}



