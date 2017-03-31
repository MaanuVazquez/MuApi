import bookshelf from '../database';
import MEMB_STAT from './memb_stat';
import Character from './character';

const AccountCharacter = bookshelf.Model.extend({
	tableName: 'AccountCharacter',
	info: function() {
		return this.belongsTo(MEMB_STAT, 'Id', 'memb___id');
	},
	characters: function() {
		return this.hasMany(Character, 'AccountID', 'Id');
	}
});

export default AccountCharacter;