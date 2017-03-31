import express from 'express';
import controller from '../controllers/characterController';
const router = express.Router();

router.route('/:character_id')

.get(controller.getCharacterById)

export default router;
