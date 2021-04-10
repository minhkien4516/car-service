const { QueryTypes } = require('sequelize');
const sequelize = require('../../config/database');
const convertObjectToParam = require('../utils/convertObjectToParam');

async function registerCarRoster(information) {
  try {
    const paramString = convertObjectToParam(information);
    await sequelize.query(`SP_addCarRoster ${paramString}`, {
      type: QueryTypes.INSERT,
    });
  } catch (error) {
    throw new Error(error.message);
  }
}
module.exports = registerCarRoster;
