import client, { connectToMongo } from "../lib/db.js";
import "dotenv/config";
//import { ObjectId } from "mongodb"

const reportsCollection = client.collection("intel_reports");

export async function createReport(report) {
    const result = await reportsCollection.insertOne(report);
    console.log(`Inserted document with _id: ${result.insertedId}`);
}

export async function ggetReports() {
    const allReports = await reportsCollection.find().toArray();
    console.log(allReports);
}

export async function getHighReports() {
    const allReports = await reportsCollection.find({ threatLevel: { $gt: 4 } }).toArray();
    console.log(allReports);
}

export async function confirmReport(id) {
    const updateResult = await reportsCollection.updateOne(
        { _id: id },
        { $set: { confirmed: true } }
    );
    console.log(`${updateResult.modifiedCount} document(s) updated`);
}

export async function deleteReport(id) {
    const deleteResult = await reportsCollection.deleteOne({ _id: id });
    console.log(`${deleteResult.deletedCount} document(s) deleted`);
}