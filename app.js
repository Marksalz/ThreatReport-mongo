import client, { connectToMongo } from "./lib/db.js";
import { reportsDal } from "./DAL/reportsDal.js";


await connectToMongo();


// await reportsDal.newReport({
//     fieldCode: "A15-B",
//     location: "Downtown Metro District",
//     threatLevel: 3,
//     description: "Suspicious vehicle activity near government building, plates obscured",
//     timestamp: new Date(),
//     confirmed: false
// });