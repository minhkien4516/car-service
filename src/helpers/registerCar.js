const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");
const convertObjectToParam = require("../utils/convertObjectToParam");

async function registerCar(information) {
  try {
    const paramString = convertObjectToParam(information);
    await sequelize.query(`RegisterCar ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerCar;
