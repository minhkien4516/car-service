const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/database");

async function getAllCars() {
  try {
    const car = await sequelize.query(`SP_GetAllCar `, {
      type: QueryTypes.SELECT,
    });
    return car;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getAllCars;
