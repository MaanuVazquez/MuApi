import MEMB_INFO from '../models/memb_info';

const controller = {
	getAccount(req, res) {
		MEMB_INFO.where({memb___id: 'test'}).fetch({withRelated: ['stats', 'account']}).then(account => {
			res.json(account);
		});
	}
}

export default controller;