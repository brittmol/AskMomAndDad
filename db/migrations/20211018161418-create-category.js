"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Categories",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        category: {
          allowNull: false,
          type: Sequelize.STRING(50),
          unique: true,
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
    return queryInterface.dropTable("Categories", options);
  },
};
