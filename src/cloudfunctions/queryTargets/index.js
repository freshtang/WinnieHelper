// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()
const db = cloud.database()

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * event 参数包含小程序端调用传入的 data
 */
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  return await db.collection('targets').where({
    _openid: wxContext.OPENID
  }).get().then(res => {
    console.log(res)
    return res
  }).catch(err => {
    console.log(err)
  })
}
