const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/database');
const convertObjectToParam = require('../utils/convertObjectToParam');

async function updateCar(information) {
  const params = convertObjectToParam(information);
  try {
    await sequelize.query(`SP_UpdateCarInformation ${params}`, {
      type: QueryTypes.UPDATE,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = updateCar;
