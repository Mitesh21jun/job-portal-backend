import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import {
  createOrUpdateProfile,
  getProfileById
} from '../controllers/candidateController.js';

const router = express.Router();

router.post('/profile', verifyToken, createOrUpdateProfile);
router.get('/:id', verifyToken, getProfileById);

export default router;
