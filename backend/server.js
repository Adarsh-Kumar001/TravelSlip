import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import travelRoutes from "./routes/travelRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/travel", travelRoutes);

// MongoDB connection
const uri = `mongodb+srv://adarshkumar102004:${process.env.MONGODB_PASS}@cluster0.1hlowit.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
