const { initUser } = require('./user')
const { initOrder, initOrderItem } = require('./order')
let Model = {}
function initModel (SequelizeInstance) {
  Model.User = initUser(SequelizeInstance)
  Model.Order = initOrder(SequelizeInstance)
  Model.OrderItem = initOrderItem(SequelizeInstance, Model.Order)
  Model.Order.hasMany(Model.OrderItem, { as: 'orderItem' })
  return Model
}
module.exports = {
  initModel
}
