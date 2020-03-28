const knex = require('knex');
const configuration = require('../../knexfile');

//Conexão com o DB do ambiente de desenvolvimento
const connection = knex(configuration.development);

// Comando para exportar a conexão 
module.exports = connection;

