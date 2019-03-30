// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

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
