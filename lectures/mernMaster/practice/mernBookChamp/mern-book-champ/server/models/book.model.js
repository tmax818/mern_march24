import {model, Schema} from 'mongoose';

const BookSchema = new Schema (
    
    {title: String},
    
    {timestamp: true}

)

const Book = model("Book", BookSchema);

export default Book;