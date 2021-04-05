const Sequelize = require('sequelize');
const connection = require('../db');
const User = require('./User');
const Task = connection.define('task',{
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
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    concluded: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
});
Task.belongsTo(User,{foreignKey:'id_user',targetKey:'id'});


module.exports = Task;