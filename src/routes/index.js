import express from 'express';
import news from './news';
import stadistics from './stadistics';
import account from './account';
import character from './character';

const router = express.Router();

router.use('/news', news);
router.use('/stadistics', stadistics);
router.use('/account', account);
router.use('/character', character);

router.get('/', (req, res) => {
	res.send('Hello World');
});

export default router;