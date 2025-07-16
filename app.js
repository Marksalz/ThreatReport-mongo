import client, { connectToMongo } from "./lib/db.js";
import express from 'express'; // corrected import
import router from "./routes.js";

await connectToMongo();

const server = express();

server.use(express.json());
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// await reportsDal.newReport({
//     fieldCode: "A15-B",
//     location: "Downtown Metro District",
//     threatLevel: 3,
//     description: "Suspicious vehicle activity near government building, plates obscured",
//     timestamp: new Date(),
//     confirmed: false
// });