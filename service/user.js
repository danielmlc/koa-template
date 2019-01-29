
async function GetUser (ctx) {
  const result = await ctx.model.User.findAll()
  ctx.body = result
}

async function CreateUser (ctx) {
  console.log(111, ctx.request.body)
  let order = ctx.request.body
  const result = await ctx.model.User.create(order)
  ctx.body = result
}

// async function GetPersonById (instant, ctx) {
//   Assert.notEmpty(ctx.params.id)
//   const result = await instant.Person.findById(ctx.params.id)
//   ctx.body = result
// }

// async function CreatePerson (instant, ctx) {
//   const result = await instant.Person.create(ctx.request.body)
//   ctx.body = result
// }

// async function UpdatePerson (instant, ctx) {
//   const result = await instant.Person.update(ctx.request.body,
//     { where: { id: ctx.request.body.id } })
//   ctx.body = result
// }

// // 软删除
// // async function DeletePerson (instant, ctx) {
// //   const result = await instant.Person.update({ deleted_at: Date(), is_removed: 1 },
// //     { where: { id: ctx.query.id } })
// //   ctx.body = result
// // }

// async function DeletePerson (instant, ctx) {
//   const result = await instant.Person.destroy({ where: { id: ctx.query.id } })
//   ctx.body = result
// }

module.exports = {
  GetUser,
  CreateUser
}