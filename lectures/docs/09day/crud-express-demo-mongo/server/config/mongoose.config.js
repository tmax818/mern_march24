import { connect } from 'mongoose';

const MONGODB_URI = `mongodb://127.0.0.1:27017/booksDB`
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

