const Sequelize = require('sequelize')
function initOrder (SequelizeInstance) {
  const Order = SequelizeInstance.define('Order', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_code: Sequelize.TEXT,
    order_date: Sequelize.TEXT,
    title: Sequelize.TEXT,
    remark: Sequelize.TEXT,
    is_removed: Sequelize.TINYINT,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE
  },
  {
    freezeTableName: true,
    tableName: 'Order',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  })
  return Order
}

function initOrderItem (SequelizeInstance, Order) {
  const OrderItem = SequelizeInstance.define('OrderItem', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: {
      type: Sequelize.INTEGER,
      references: {
        model: Order,
        key: 'id'
      }
    },
    name: Sequelize.TEXT,
    model: Sequelize.TEXT,
    code: Sequelize.TEXT,
    remark: Sequelize.TEXT,
    is_removed: Sequelize.TINYINT,
    created_at: Sequelize.DATE,
    updated_at: Sequelize.DATE,
    deleted_at: Sequelize.DATE
  },
  {
    freezeTableName: true,
    tableName: 'OrderItem',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  })
  return OrderItem
}

module.exports = {
  initOrder,
  initOrderItem
}
