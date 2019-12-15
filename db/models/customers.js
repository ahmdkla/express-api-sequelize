"use strict";

module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define(
    "customers",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {}
  );

  return customers;
};
