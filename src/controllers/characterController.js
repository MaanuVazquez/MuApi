import Character from '../models/character';

const controller = {
	getCharacterById(req, res) {
		Character.where({Name: req.params.character_id}).fetch().then(character => {
			res.json(character);
		}).catch(error => {
			console.log(error);
		});
	}
}

export default controller;