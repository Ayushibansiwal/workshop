import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import enquiryRoute from "./routes/enquiryRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }

};



app.use("/api", enquiryRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running`);
  connectDB();
});