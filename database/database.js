const Sequelize = require("sequelize");

const connection = new Sequelize("bancoteste6", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
