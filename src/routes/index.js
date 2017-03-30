import express from 'express';
import news from './news';
import stadistics from './stadistics';

const router = express.Router();

router.use('/news', news);
router.use('/stadistics', stadistics);

router.get('/', (req, res) => {
	res.send('Hello World');
});

export default router;