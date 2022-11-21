"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Questions",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING(255),
        },
        content: {
          type: Sequelize.TEXT,
        },
        imageURL: {
          type: Sequelize.STRING(3000),
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Users" },
        },
        categoryId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: "Categories" },
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
    return queryInterface.dropTable("Questions", options);
  },
};
