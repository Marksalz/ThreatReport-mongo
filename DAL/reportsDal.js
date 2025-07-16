import client, { connectToMongo } from "../lib/db.js";
import "dotenv/config";
//import { ObjectId } from "mongodb"

const reportsCollection = client.collection("intel_reports");

export async function newReport(report) {
    const result = await reportsCollection.insertOne(report);
    console.log(`Inserted document with _id: ${result.insertedId}`);
}

export async function getAllReports() {
    const allReports = await reportsCollection.find().toArray();
    console.log(allReports);
}

export async function getAllReportsThreatLargerThenFour() {
    const allReports = await reportsCollection.find({ threatLevel: { $gt: 4 } }).toArray();
    console.log(allReports);
}

export async function confirmTrueById(id) {
    const updateResult = await reportsCollection.updateOne(
        { _id: id },
        { $set: { confirmed: true } }
    );
    console.log(`${updateResult.modifiedCount} document(s) updated`);
}

export async function deleteReportById(id) {
    const deleteResult = await reportsCollection.deleteOne({ _id: id });
    console.log(`${deleteResult.deletedCount} document(s) deleted`);
}

export const reportsDal = {
    newReport,
    getAllReports,
    getAllReportsThreatLargerThenFour,
    confirmTrueById,
    deleteReportById
}