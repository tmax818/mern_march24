import {model, Schema} from 'mongoose';

const BookSchema = new Schema(
    {
        title: {type: String},
        author: {type: String},
        pages: {type: Number},
        isAvailable: {type: Boolean}

    },
    {timestamps: true}
);

const Book = model("Book", BookSchema);

export default Book;