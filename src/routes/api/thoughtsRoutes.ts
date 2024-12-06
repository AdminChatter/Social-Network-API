import { Router } from 'express';

import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} from '../../controllers/thoughtsController.js';

const router = Router();

// Routes for managing thoughts
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// Routes for managing reactions to thoughts
router.route('/:thoughtId/reaction').post(addReaction);
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

export { router as thoughtsRouter };

