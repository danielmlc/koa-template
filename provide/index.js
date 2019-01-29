const fs = require('fs')
const Sequelize = require('sequelize')
const configData = JSON.parse(fs.readFileSync('config.json'))
const { initModel } = require('../model/index')
const initSql = function () {
  const SequelizeInstant = new Sequelize(
    configData.mysql.database,
    configData.mysql.username,
    configData.mysql.password,
    {
      host: configData.host,
      dialect: configData.sqltype,
      operatorsAliases: false
    })
  return initModel(SequelizeInstant)
}

module.exports = {
  initSql
}
