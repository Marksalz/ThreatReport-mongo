import "dotenv/config";
import client, { connectToMongo } from "./lib/db.js";
import { ObjectId } from "mongodb"

await connectToMongo();