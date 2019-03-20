const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await db.collection('targets').add({
    data: {
      targetId: event.targetId,
      name: event.name,
      punchDay: event.punchDay,
      lastCheck: event.lastCheck,
      className: event.className,
      color: event.color,
      desc: event.desc,
      _openid: wxContext.OPENID,
      _unionid: wxContext.UNIONID
    }
  })
}
