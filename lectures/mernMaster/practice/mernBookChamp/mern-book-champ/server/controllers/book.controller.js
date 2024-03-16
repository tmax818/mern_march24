import Book from "../models/book.model.js";

export const createBook = async (req, res) => {
    try {
        res.json(await Book.create(req.body));
    } catch (err) {
        console.error(err)
        res.status(400).json(err);
    }
    
}

export const readAllBooks = async (req, res) => {
    try {
        res.json(await Book.find());
    } catch (err) {
        console.error(err)
        res.status(400).json(err);
    }
    
}

export const readOneBook = async (req, res) => {
    try {
        res.json(await Book.findById(req.params.id));
    } catch (err) {
        console.error(err)
        res.status(400).json(err);
    }

}

export const updateOneBook = async (req, res) => {
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

export const deleteOneBook = async (req, res) => {
    try {
        res.json(await Book.findByIdAndDelete(req.params.id));
    } catch (err) {
        console.error(err)
        res.status(400).json(err);
    }

}