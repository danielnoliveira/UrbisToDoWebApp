const Sequelize = require('sequelize');
const connection = require('../db');
const bcrypt = require("bcrypt");


const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;