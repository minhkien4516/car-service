const dotEnv = require("dotenv");
const { Sequelize } = require("sequelize");

dotEnv.config(".env");

const sequelize = new Sequelize("partnerCars", "sa", "!abc12345", {
  port: "1445",
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    instanceName: "sql",
  },
});

module.exports = sequelize;
