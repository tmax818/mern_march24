import { connect } from 'mongoose';

const MONGODB_URI = "mongodb+srv://root:password1234@cluster0.0vtlvvt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: 'recipesDB',
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;

