import knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../config.json';

export default bookshelf(knex(config.database));