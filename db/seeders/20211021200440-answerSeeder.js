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
    let answerArray = [];
    for (let i = 0; i < 250; i++) {
      answerArray.push({
        content: faker.lorem.sentence(),
        questionId: getRandomInt(1, 34),
        userId: getRandomInt(1, 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    options.tableName = "Answers";
    return queryInterface.bulkInsert(options, answerArray);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Answers";
    return queryInterface.bulkDelete(options);
  },
};
