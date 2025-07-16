import client, { connectToMongo } from "./lib/db.js";
import express from 'express';
import router from "./routes.js";

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000;

try {
    await connectToMongo();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} catch (err) {
    console.error("Failed to connect to DB:", err);
    process.exit(1);
}