import express from "express";
import { verifyEmployer, verifyToken } from "../middleware/authMiddleware.js";
import {
  createJob,
  getEmployerJobs,
  updateJob,
  deleteJob,
  getJobById,
} from "../controllers/employerController.js";

const router = express.Router();

router.post("/", verifyToken, verifyEmployer, createJob);
router.get("/:jobId", verifyToken, getJobById);
router.get("/:userId/jobs", verifyToken, getEmployerJobs);
router.put("/update-job/:jobId", verifyToken, verifyEmployer, updateJob);
router.delete("/delete-job/:jobId", verifyToken, verifyEmployer, deleteJob);

export default router;
