"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    let commentArray = [];
    for (let i = 0; i < 700; i++) {
      commentArray.push({
        content: faker.lorem.sentence(),
        answerId: getRandomInt(1, 251),
        userId: getRandomInt(1, 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    options.tableName = "Comments";
    return queryInterface.bulkInsert(options, commentArray);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Comments";
    return queryInterface.bulkDelete(options);
  },
};
