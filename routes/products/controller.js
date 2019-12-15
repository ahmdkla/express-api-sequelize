const { products } = require("../../db/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await products.findAll({
        where: { customer_id: req.params.customer_id }
      });

      res
        .status(200)
        .json({
          message: `Show all products with customer_id ${req.params.customer_id}`,
          data: result
        });
    } catch (error) {
      console.log(error);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const result = await products.findAll({ raw: true });

      res.status(200).json({ message: `Show all products `, data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await products.create(req.body);

      res.send({ message: "Success add products", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    try {
      const result = await products.update(
        { product_name: req.body.products , price : req.body.price},
        { where: { product_id: req.params.id } }
      );

      res.send({
        message: `Succes update products at ${req.params.id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const result = await products.destroy({ where: { product_id: req.params.id } });

      res.send({
        message: `Succes delete products at ${req.params.id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
