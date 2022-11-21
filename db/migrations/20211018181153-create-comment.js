"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Comments",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        content: {
          allowNull: false,
          type: Sequelize.TEXT,
        },
        answerId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Answers" },
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Users" },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      options
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Comments", options);
  },
};
