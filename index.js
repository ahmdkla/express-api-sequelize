const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to myyy api with mysql sequelize-cli" });
});

app.use("/customers", require("./routes/customers"));
app.use("/products", require("./routes/products"));

app.listen(PORT, () => {
  console.log(`On port ${PORT}`);
});
