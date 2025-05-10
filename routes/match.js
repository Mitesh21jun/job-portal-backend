import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import {
  matchCandidatesToJob,
  matchJobsToCandidate
} from '../controllers/matchController.js';

const router = express.Router();

router.get('/job-to-candidates/:jobId', verifyToken, matchCandidatesToJob);
router.get('/candidate-to-jobs/:userId', verifyToken, matchJobsToCandidate);

export default router;
