import express from 'express';
import controller from '../controllers/stadisticsController';

const router = express.Router();

router.route('/')

.get(controller.getOnlinePlayers, controller.getServerStatus, (req, res) => {
	res.json(res.locals.stadistics);
});

export default router;