"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
// const faker = require('faker');
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkInsert(options, [
      {
        username: "John",
        email: "john@john.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Tammy",
        email: "tammy@tammy.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Phil",
        email: "phil@phil.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Sarah",
        email: "sarah@sarah.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Todd",
        email: "todd@todd.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Orlando",
        email: "orlando@orlando.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Alexis",
        email: "alexis@alexis.com",
        hashedPassword: bcrypt.hashSync("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "demo",
        email: "demo@demo.com",
        hashedPassword: bcrypt.hashSync("Demo!1"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Users";
    return queryInterface.bulkDelete(options);
  },
};
