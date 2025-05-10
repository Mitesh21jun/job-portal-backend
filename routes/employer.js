import express from "express";
import { verifyEmployer, verifyToken } from "../middleware/authMiddleware.js";
import {
  createJob,
  getEmployerJobs,
  updateJob,
  deleteJob,
} from "../controllers/employerController.js";

const router = express.Router();

router.post("/post-job", verifyToken, verifyEmployer, createJob);
router.get("/:userId/jobs", verifyToken, getEmployerJobs);
router.put("/update-job/:jobId", verifyToken, verifyEmployer, updateJob);
router.delete("/delete-job/:jobId", verifyToken, verifyEmployer, deleteJob);

export default router;
