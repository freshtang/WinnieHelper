export function formatNumber (n) {
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

  const t1 = [year, month, day].map(formatNumber).join('/')

  return `${t1}`
}

export const defaultTargetsLists = [{
  targetId: 1,
  name: '早起',
  className: 'icon-sun',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '一日之计在于晨',
  photo: 'wakeup.jpeg'
}, {
  targetId: 2,
  name: '吃早餐',
  className: 'icon-eat',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '你需要一顿健康的早餐来激发能量，让你的大脑正常运转。',
  photo: 'eatting.jpeg'
}, {
  targetId: 3,
  name: '早睡',
  className: 'icon-sleep',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '早睡早起。',
  photo: 'sleep.jpeg'
}, {
  targetId: 4,
  name: '绿色出行',
  className: 'icon-bicycle',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '绿色出行',
  photo: 'bybus.jpeg'
}, {
  targetId: 5,
  name: '健身',
  className: 'icon-gym',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '健身',
  photo: 'gym.jpeg'
}, {
  targetId: 6,
  name: '读书',
  className: 'icon-read',
  color: 'primary',
  punchDay: 0,
  lastCheck: 0,
  desc: '读书。',
  photo: 'readding.jpeg'
}]

export default {
  formatNumber,
  formatTime,
  formatDate
}
