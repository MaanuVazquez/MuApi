import News from '../models/news';

const controller = {

	getAllNews(req, res) {
		News.fetchAll().then(news => {
			res.json(news);
		}).catch(error => {
			console.log(error);
		});
	},

	getNewsById(req, res) {
		News.where({id: req.params.news_id}).fetch().then(news => {
			res.json(news);
		}).catch(error => {
			console.log(error);
		})
	}
}

export default controller;