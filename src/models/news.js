import bookshelf from '../database';

const News = bookshelf.Model.extend({
	tableName: 'News'
})

export default News;