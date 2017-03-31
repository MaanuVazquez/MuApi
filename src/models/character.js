import bookshelf from '../database';
import AccountCharacter from './accountCharacter';

const Character = bookshelf.Model.extend({
	tableName: 'Character',
	account: function() {
		return this.belongsTo(AccountCharacter, 'AccountID', 'Id');
	}
});

export default Character;