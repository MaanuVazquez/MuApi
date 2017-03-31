import express from 'express';
import controller from '../controllers/accountController';

const router = express.Router();

router.route('/')

.get(controller.getAccount);

export default router;