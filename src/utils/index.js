function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('-')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatDate (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [year, month, day].map(formatNumber).join('-')

  return `${t1}`
}

export const defaultTargetsLists = [{
  targetId: 1,
  name: '早起',
  className: 'icon-sun',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '一日之计在于晨'
}, {
  targetId: 2,
  name: '吃早餐',
  className: 'icon-eat',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '你需要一顿健康的早餐来激发能量，让你的大脑正常运转。'
}]

export default {
  formatNumber,
  formatTime,
  formatDate
}
