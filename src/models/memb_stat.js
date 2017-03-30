import bookshelf from '../database';
/*import MEMB_INFO from './memb_info';*/

const MEMB_STAT = bookshelf.Model.extend({
	tableName: 'MEMB_STAT'/*,
	account: () => {
		return this.belongsTo(MEMB_INFO);
	}*/
});

export default MEMB_STAT;