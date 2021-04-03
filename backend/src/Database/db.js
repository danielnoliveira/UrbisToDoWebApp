const { Sequelize } = require("sequelize");

const connection = new Sequelize(`postgres://${process.env.POSTGRESQL_DATABASE_USER}:${process.env.POSTGRESQL_DATABASE_PASSWORD}@queenie.db.elephantsql.com:5432/${process.env.POSTGRESQL_DATABASE_NAME}`);

module.exports = connection;