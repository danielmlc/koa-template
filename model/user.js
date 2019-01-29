const Sequelize = require('sequelize')
function initUser (SequelizeInstance) {
  const User = SequelizeInstance.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.TEXT,
    is_removed: Sequelize.TINYINT,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE
  },
  {
    freezeTableName: true,
    tableName: 'User',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  })
  return User
}

module.exports = {
  initUser
}
