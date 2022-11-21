"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Categories";
    return queryInterface.bulkInsert(options, [
      { category: "Taxes", createdAt: new Date(), updatedAt: new Date() },
      { category: "Laundry", createdAt: new Date(), updatedAt: new Date() },
      { category: "Rent", createdAt: new Date(), updatedAt: new Date() },
      {
        category: "Medication",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { category: "Cooking", createdAt: new Date(), updatedAt: new Date() },
      { category: "Cleaning", createdAt: new Date(), updatedAt: new Date() },
      { category: "Repairs", createdAt: new Date(), updatedAt: new Date() },
      {
        category: "Social advice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category: "Relationship advice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { category: "Other", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = "Categories";
    return queryInterface.bulkDelete(options);
  },
};
