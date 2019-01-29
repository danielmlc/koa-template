const axios = require('axios')
// const model = {
//   order_code: '收2018xxx',
//   order_date: '2019-09-12',
//   title: '测试',
//   orderItem: [
//     {
//       name: 'xxxxxx',
//       code: 'sdsds',
//       model: '测试'
//     },
//     {
//       name: 'xxxxxx11111',
//       code: 'sdsds',
//       model: '测试'
//     }
//   ]
// }
// axios.post('http://localhost:3000/order', model)
//   .then((result) => { console.log(result) })
//   .catch((err) => { console.log(err) })

axios.post('http://localhost:3000/order', model)
  .then((result) => { console.log(result) })
  .catch((err) => { console.log(err) })
