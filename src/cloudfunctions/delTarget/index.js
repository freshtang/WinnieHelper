const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  await db.collection('targets').doc(event._id).remove()

  await db.collection('checkin').where({
    target_id: event._id
  }).remove()

  const res = await db.collection('targets').where({
    _openid: wxContext.OPENID
  }).get().then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
  })

  return {...res, code: 200}
}
