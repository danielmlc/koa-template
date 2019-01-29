const router = require('koa-router')()
const orderService = require('../service/order')
const userService = require('../service/user')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.post('/order', async (ctx, next) => { console.log(1111); await orderService.CreateOrder(ctx) })
router.get('/orderItem', async (ctx, next) => { await orderService.GetOrderItem(ctx) })
router.get('/user', async (ctx, next) => { await userService.GetUser(ctx) })
module.exports = router
