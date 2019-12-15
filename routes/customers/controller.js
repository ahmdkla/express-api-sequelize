const { customers } = require("../../db/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await customers.findAll({
        where: { id: req.params.id }
      });

      res.status(200).json({
        message: `Show all customers with id ${req.params.id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  getAllCustomers: async (req, res) => {
    try {
      const result = await customers.findAll({ raw: true });

      res.status(200).json({ message: `Show all customers `, data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await customers.create(req.body);

      res.send({ message: "Success add customers", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    try {
      const result = await customers.update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          age: req.body.age
        },
        { where: { id: req.params.id } }
      );

      res.send({
        message: `Succes update customers at ${req.params.id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    try {
      const result = await customers.destroy({
        where: { id: req.params.id }
      });

      res.send({
        message: `Succes delete customers at ${req.params.id}`,
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
};
