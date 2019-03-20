const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await db.collection('checkin').add({
    data: {
      target_id: event.target_id,
      time: event.time,
      _openid: wxContext.OPENID,
      _unionid: wxContext.UNIONID
    }
  })
}
