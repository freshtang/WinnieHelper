const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  await db.collection('checkin').add({
    data: {
      target_id: event.target_id,
      time: event.time,
      _openid: wxContext.OPENID,
      _unionid: wxContext.UNIONID
    }
  })

  await db.collection('targets').doc(event.target_id).update({
    data: {
      punchDay: _.inc(1),
      lastCheck: event.time
    }
  })

  const res = await db.collection('checkin').where({
    _openid: wxContext.OPENID,
    target_id: event.target_id
  }).get().then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
  })

  return {...res, code: 200}
}
