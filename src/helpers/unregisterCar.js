const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");

async function unregisterCar(Id) {
  try {
    await sequelize.query(`UnregisterCar '${Id}'`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = unregisterCar;
