const sequelize = require('../config/sequelize'); //dois pontos sobre dois níveis de diretório
const Sequelize = require('sequelize');

const Produto = require('./produto');
const Fornecedor = require('./fornecedor');

const produto = Produto(sequelize, Sequelize.DataTypes);
const fornecedor = Fornecedor(sequelize, Sequelize.DataTypes);

const db = {
    produto,
    fornecedor,
    sequelize
}

module.exports = db;