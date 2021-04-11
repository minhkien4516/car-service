const dotEnv = require("dotenv");
const { Sequelize } = require("sequelize");

dotEnv.config(".env");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: "mssql",
    dialectOptions: {
      instanceName: "sql",
    },
  }
);

module.exports = sequelize;
