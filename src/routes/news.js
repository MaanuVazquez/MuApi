import express from 'express';
import controller from '../controllers/newsController';

const router = express.Router();

router.route('/')

.get(controller.getAllNews);

router.route('/:news_id')

.get(controller.getNewsById);

export default router;