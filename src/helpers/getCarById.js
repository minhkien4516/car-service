const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/database');

async function getCarById(Id, licencePlate) {
  try {
    const car = await sequelize.query(`GetCar '${Id}','${licencePlate}'`, {
      type: QueryTypes.SELECT,
    });
    return car;
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = getCarById;
