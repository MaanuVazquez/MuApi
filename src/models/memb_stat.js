import bookshelf from '../database';
import MEMB_INFO from './memb_info';

const MEMB_STAT = bookshelf.Model.extend({
	tableName: 'MEMB_STAT',
	account: function() {
		return this.belongsTo(MEMB_INFO, 'memb___id', 'memb___id');
	} 
});

export default MEMB_STAT