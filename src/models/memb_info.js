import bookshelf from '../database';
import MEMB_STAT from './memb_stat';
import AccountCharacter from './accountCharacter';

const MEMB_INFO = bookshelf.Model.extend({
	tableName: 'MEMB_INFO',
	stats: function() {
		return this.hasOne(MEMB_STAT, 'memb___id', 'memb___id');
	},
	account: function() {
		return this.hasOne(AccountCharacter, 'Id', 'memb___id');
	}
})

export default MEMB_INFO;