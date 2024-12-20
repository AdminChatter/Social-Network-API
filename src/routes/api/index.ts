import { Router } from 'express';
import { usersRoutes } from './userRoutes.js';
import { thoughtsRouter } from './thoughtsRoutes.js';
const router = Router();

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRouter);

export default router;