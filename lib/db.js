import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connected to DB");

        await client.db("aman").command({ ping: 1 });
    } catch (error) {
        console.log(error);
    }
}
export default client.db('aman');