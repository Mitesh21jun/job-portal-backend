import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import {
  createOrUpdateProfile,
  getProfile
} from '../controllers/candidateController.js';

const router = express.Router();

router.post('/profile', verifyToken, createOrUpdateProfile);
router.get('/:id', verifyToken, getProfile);

export default router;
