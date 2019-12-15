"use strict";

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {}
  );
  products.associate = function(models) {
    products.belongsTo(models.customers);
    // associations can be defined here
  };

  return products;
};
