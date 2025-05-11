import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import candidateRoutes from "./routes/candidate.js";
import employerRoutes from "./routes/employer.js";
import matchRoutes from "./routes/match.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/candidate", candidateRoutes);
app.use("/api/employer", employerRoutes);
app.use("/api/job", employerRoutes);
app.use("/api/match", matchRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the Job Matching API");
});
app.use((req, res, next) => {
  res.status(404).json({ message: "API Not Found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
