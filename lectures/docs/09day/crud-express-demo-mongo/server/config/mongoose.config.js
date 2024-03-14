import { connect } from 'mongoose';

// const MONGODB_URI = `mongodb://127.0.0.1:27017/booksDB`
const MONGODB_URI = `mongodb+srv://root:password1234@cluster0.0vtlvvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'booksDB',
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;

