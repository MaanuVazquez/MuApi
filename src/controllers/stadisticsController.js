import config from '../../config.json';
import MEMB_STAT from '../models/memb_stat';
import net from 'net';

const controller = {
	getOnlinePlayers(req, res, next) {
		MEMB_STAT.where({ConnectStat: 1}).count('ConnectStat').then(stadistics => {
			res.locals.stadistics = {};
			res.locals.stadistics.onlinePlayers = stadistics;
			next();
		});
	},

	getServerStatus(req, res, next) {
		getStatus(status => {
			res.locals.stadistics.serverOnline = status;
			next();
		});
	}
}

/** Obtiene el estado del servidor */
function getStatus(callback) {
	let client = net.Socket();
	client.connect(44405, config.server.host);

	client.on('connect', () => {
		callback(true);
		client.destroy(); // kill client after server's response
	});

	client.on('error', () => {
		callback(false);
	});
}

export default controller;